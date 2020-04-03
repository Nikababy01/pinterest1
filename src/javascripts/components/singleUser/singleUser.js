import boardData from '../../helpers/data/boardData';
import utils from '../../helpers/utils';

const buildSingleBoard = (e) => {
  const boardId = e.target.closest('.card').id;
  boardData.getUserById(boardId)
    .then((response) => {
      const singleBoard = response.data;
      let domString = '';
      domString += '<h2 class="text-center"> User Board</h2>';
      domString += '<div class="col-12">';
      domString += '<div class="card text-white bg-success">';
      domString += `<div class="card-header">My Board: ${singleBoard.name}</div>`;
      domString += `<div class="card-body"> ${'what up'}</div>`;
      domString += '<h3 class="card-title"></h3>';
      domString += '</div>';
      domString += '</div>';
      utils.printToDom('single-user', domString);
      // utils.printToDom('board', '');
    })
    .catch((err) => console.error('problem with single board', err));
};

export default { buildSingleBoard };
