import firebase from 'firebase/app';
import 'firebase/auth';
import pins from '../pins/pins';
import pinsData from '../../helpers/data/pinsData';
import boardData from '../../helpers/data/boardData';
import cardboard from '../cardboard/cardboard';
import createNewBoard from '../createNewBoard/createNewBoard';
import utils from '../../helpers/utils';


const deleteBoard = (e) => {
  const boardId = e.target.closest('.card').id;
  boardData.deleteBoard(boardId)
    // eslint-disable-next-line no-use-before-define
    .then(() => {
      pinsData.getPins(boardId).then((allBoardPins) => {
        allBoardPins.forEach((pin) => {
          if (boardId === pin.boardId) {
            pinsData.deletePins(pin.id);
          }
        });
      });
      // eslint-disable-next-line no-use-before-define
      buildBoard();
    })
    .catch((err) => console.error('could not delete board', err));
};

const makeNewBoard = (e) => {
  e.preventDefault();
  const brandNewBoard = {
    name: $('#new-board-name').val(),
    description: $('#board-description').val(),
    uid: firebase.auth().currentUser.uid,
  };
  boardData.addBoard(brandNewBoard)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildBoard();
      utils.printToDom('add-new-board', ''); // makes the boardview go away
    })
    .catch((err) => console.error('could not add board', err));
};

const buildBoard = () => {
  const myUid = firebase.auth().currentUser.uid;
  boardData.getBoardsByUid(myUid)
    .then((boards) => {
      let domString = '';
      domString += '<div class="text-center">';
      domString += '<h2 class="text-center">Monique Boards</h2>';
      domString += '<button class="btn btn-success add-newboard" id="create-board-form">Add Board</button>';
      domString += '</div>';
      domString += '<div class= "d-flex flex-wrap">';
      boards.forEach((board) => {
        domString += cardboard.boardMaker(board);
      });
      domString += '</div>';
      utils.printToDom('board', domString);
      $('body').on('click', '.board-cards', pins.viewSinglePins);
      $('body').on('click', '.delete-board', deleteBoard);
      $('body').on('click', '#form-board-creator', makeNewBoard);
      $('#create-board-form').click(createNewBoard.buildNewBoard); // add board button builds the form
    })
    .catch((err) => console.error('get board broke', err));
};

export default { buildBoard };
