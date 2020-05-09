import firebase from 'firebase/app';
import 'firebase/auth';

import pinsData from '../../helpers/data/pinsData';
import boardData from '../../helpers/data/boardData';
import utils from '../../helpers/utils';
import cardpins from '../cardpins/cardpins';
import editPin from '../editPin/editPin';
import createNewPin from '../createNewPin/createNewPin';

const boardDiv = $('#board');
const returnButton = $('#navbar-return-button');
const logoutButton = $('#navbar-logout-button');
const pinsDiv = $('#pins');


const deletePins = (e) => {
  const pinsId = e.target.closest('.card').id;
  const selectedBoard = $('.delete-pins').data('board-id');
  console.log('selectedboard', selectedBoard);
  pinsData.deletePins(pinsId)
    // eslint-disable-next-line no-use-before-define
    .then(() => buildPins(selectedBoard))
    .catch((err) => console.error('could not delete pins', err));
};

const makeNewPin = (e) => {
  e.preventDefault();
  const selectedBoard = $('.board-cards').data('board-id');
  const brandNewPin = {
    imageUrl: $('#new-pin-image').val(),
    boardId: selectedBoard,
  };
  pinsData.addPins(brandNewPin)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildPins(selectedBoard);
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

const modifyPin = (e) => {
  const pinsId = e.target.closest('.edit-pin-form').id;
  const selectedBoard = $('.edit-pin-form').data('board-id');
  console.log('selectedBoard', selectedBoard);
  e.preventDefault();
  const modifiedPin = {
    imageUrl: $('#edit-pin-image').val(),
    boardId: $('#pin-board-id-dropdown').val(),
  };
  pinsData.updatePin(pinsId, modifiedPin)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildPins(selectedBoard);
      utils.printToDom('edit-pin', '');
    })
    .catch((err) => console.error('could not modify weapon', err));
};


const buildPins = (boardId) => {
  pinsData.getPinsbyBoards()
    .then((pins) => {
      let domString = '';
      domString += '<div class="text-center">';
      domString += '<button class="btn btn-primary add-newpin" id="create-pin-form">Add Pin</button>'; // finding the first
      domString += '<h2 class="text-center">Pins</h2>';
      domString += '<div class= "d-flex flex-wrap">';
      pins.forEach((pin) => {
        if (pin.boardId === boardId) {
          domString += cardpins.pinsMaker(pin);
        }
        pinsDiv.removeClass('hide');
        boardDiv.addClass('hide');
        logoutButton.addClass('hide');
        returnButton.removeClass('hide');
      });
      domString += '</div>';
      utils.printToDom('pins', domString);
      // $('.delete-pins').click(deletePins);
      $('body').on('click', '.delete-pins', deletePins);
      $('#create-pin-form').click(createNewPin.buildNewPin); // builds the form for the new pin
    })
    .catch((err) => console.error('get pins broke', err));
};
const clickEvents = () => {
  $('body').on('click', '#form-pin-creator', makeNewPin);
  $('body').on('click', '.edit-pins', editPinEvent);
  $('body').on('click', '#form-edit-pin-creator', modifyPin);
};

const viewSinglePins = (e) => {
  const myUid = firebase.auth().currentUser.uid;
  boardData.getBoardsByUid(myUid)
    .then(() => {
      const boardId = e.target.closest('.card').id;
      // const selectedBoard = boards.find((currentBoard) => boardId === currentBoard.id);
      buildPins(boardId);
    })
    .catch((err) => console.error('messed up', err));
};


export default {
  buildPins,
  viewSinglePins,
  makeNewPin,
  clickEvents,
};
