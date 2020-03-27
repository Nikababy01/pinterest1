import boardData from '../../helpers/data/boardData';
import utils from '../../helpers/utils';
import cardboard from '../cardboard/cardboard';


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
    })
    .catch((err) => console.error('get board broke', err));
};

export default { buildBoard };
