// import boardData from '../../helpers/data/boardData';
import utils from '../../helpers/utils';

const buildNewBoard = () => {
  let domString = '';
  domString += '<h2 class="text-center">New Board</h2>';
  domString += '<form class="col-10 offset-1">';
  domString += '<div class="form-group">';
  domString += '<label for="new-board-name">Name</label>';
  domString += '<input type="text" class="form-control" id="new-board-name" placeholder="Enter Board Name">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="board-description">Description</label>';
  domString += '<input type="text" class="form-control" id="board-description" placeholder="Enter Description">';
  domString += '</div>';
  domString += '</div>';
  domString += '<button type="submit" class="btn btn-success" id="form-board-creator">Submit</button>';
  domString += '</form>';

  utils.printToDom('add-new-board', domString);
  // utils.printToDom('board', '');
};

export default { buildNewBoard };
