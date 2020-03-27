import boardData from '../../helpers/data/boardData';
import cardboard from '../cardboard/cardboard';
import singleUser from '../singleUser/singleUser';
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
  boardData.getBoards()
    .then((board) => {
      let domString = '';
      domString += '<h2 class="text-center">Boards</h2>';
      domString += '<div class= "d-flex flex-wrap">';
      board.forEach((boards) => {
        domString += cardboard.boardMaker(boards);
      });
      domString += '</div>';
      utils.printToDom('board', domString);
      $('body').on('click', '.board-cards', singleUser.buildSingleUser);
      $('body').on('click', '.delete-board', deleteBoard);
    })
    .catch((err) => console.error('get board broke', err));
};

export default { buildBoard };
