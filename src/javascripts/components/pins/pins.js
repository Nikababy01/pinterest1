import firebase from 'firebase/app';
import 'firebase/auth';

import pinsData from '../../helpers/data/pinsData';
import boardData from '../../helpers/data/boardData';
import createNewPin from '../createNewPin/createNewPin';
import utils from '../../helpers/utils';
import cardpins from '../cardpins/cardpins';

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
  const brandNewPin = {
    imageUrl: $('#new-pin-image').val(),
    boardId: 'board1',
  };
  pinsData.addPins(brandNewPin)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildPins();
      utils.printToDom('add-new-pin', '');
    })
    .catch((err) => console.error('could not add pin', err));
};

const buildPins = (selectedBoard) => {
  pinsData.getPins(selectedBoard)
    .then((pins) => {
      let domString = '';
      domString += '<div class="text-center">';
      domString += '<h2 class="text-center">Pins</h2>';
      domString += '<button class="btn btn-success add-newpin" id="create-pin-form">Add Pin</button>';
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
      $('body').on('click', '#form-pin-creator', makeNewPin);
      $('#create-pin-form').click(createNewPin.buildNewPin); // builds the form for the new pin
    })
    .catch((err) => console.error('get pins broke', err));
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


export default { buildPins, viewSinglePins };
