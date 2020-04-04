import firebase from 'firebase/app';
import 'firebase/auth';
import pins from '../pins/pins';
import boardData from '../../helpers/data/boardData';
import cardboard from '../cardboard/cardboard';
import utils from '../../helpers/utils';

const deleteBoard = (e) => {
  const boardId = e.target.closest('.card').id;
  console.error('boardId', boardId);
  boardData.deleteBoard(boardId)
    // eslint-disable-next-line no-use-before-define
    .then(() => buildBoard())
    .catch((err) => console.error('could not delete board', err));
};

const buildBoard = () => {
  const myUid = firebase.auth().currentUser.uid;
  boardData.getBoardsByUid(myUid)
    .then((boards) => {
      let domString = '';
      domString += '<div class="jumbotron">';
      domString += '<h2 class="text-center">Monique Boards</h2>';
      domString += '</div>';
      domString += '<div class= "d-flex flex-wrap">';
      boards.forEach((board) => {
        domString += cardboard.boardMaker(board);
      });
      domString += '</div>';
      utils.printToDom('board', domString);
      $('body').on('click', '.board-cards', pins.viewSingleBoard);
      $('body').on('click', '.delete-board', deleteBoard);
    })
    .catch((err) => console.error('get board broke', err));
};

export default { buildBoard };
