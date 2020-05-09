import firebase from 'firebase/app';
import 'firebase/auth';

import pinsData from '../../helpers/data/pinsData';
import boardData from '../../helpers/data/boardData';
import utils from '../../helpers/utils';
import cardpins from '../cardpins/cardpins';
import editPin from '../editPin/editPin';

const boardDiv = $('#board');
const returnButton = $('#navbar-return-button');
const logoutButton = $('#navbar-logout-button');
const pinsDiv = $('#pins');


const deletePins = (e) => {
  const pinsId = e.target.closest('.card').id;
  const boardId = e.data;
  pinsData.deletePins(pinsId)
    // eslint-disable-next-line no-use-before-define
    .then(() => buildPins(boardId))
    .catch((err) => console.error('could not delete pins', err));
};

const makeNewPin = (e) => {
  e.preventDefault();
  // const selectedBoard = e.target.dataset.boardId;
  const selectedBoard = $('#create-pin-form').data('board-id');
  console.log('dataset', selectedBoard);
  const brandNewPin = {
    imageUrl: $('#new-pin-image').val(),
    boardId: selectedBoard,
  };
  pinsData.addPins(brandNewPin)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      utils.printToDom('add-new-pin', '');
    })
    .catch((err) => console.error('could not add pin', err));
};

const editPinEvent = (e) => {
  e.preventDefault();
  console.log('form clicked');
  const pinsId = e.target.closest('.card').id;
  editPin.showForm(pinsId);
};

const buildPins = (selectedBoard) => {
  pinsData.getPinsbyBoards(selectedBoard)
    .then((pins) => {
      let domString = '';
      domString += '<div class="text-center">';
      domString += '<h2 class="text-center">Pins</h2>';
      domString += '<div class= "d-flex flex-wrap">';
      pins.forEach((pin) => {
        if (pin.boardId === selectedBoard.id) {
          domString += cardpins.pinsMaker(pin);
        }
        pinsDiv.removeClass('hide');
        boardDiv.addClass('hide');
        logoutButton.addClass('hide');
        returnButton.removeClass('hide');
      });
      domString += '</div>';
      utils.printToDom('pins', domString);
      $('.delete-pins').click(selectedBoard, deletePins);
    })
    .catch((err) => console.error('get pins broke', err));
};
const clickEvents = () => {
  $('body').on('click', '#form-pin-creator', makeNewPin);
  $('body').on('click', '.edit-pins', editPinEvent);
};

const viewSinglePins = (e) => {
  const myUid = firebase.auth().currentUser.uid;
  boardData.getBoardsByUid(myUid)
    .then((boards) => {
      const boardId = e.target.closest('.card').id;
      const selectedBoard = boards.find((currentBoard) => boardId === currentBoard.id);
      buildPins(selectedBoard);
    })
    .catch((err) => console.error('messed up', err));
};


export default {
  buildPins,
  viewSinglePins,
  makeNewPin,
  clickEvents,
};
