import smash from '../../helpers/data/smash';
import utils from '../../helpers/utils';

const buildSingleUser = (e) => {
  const boardId = e.target.closest('.card').id;
  smash.getSingleUserwithBoards(boardId)
    .then((singleBoard) => {
      let domString = '';
      domString += '<h2 class="text-center"> User Board</h2>';
      domString += '<div class="col-12">';
      domString += '<div class="card text-white bg-success">';
      domString += `<div class="card-header">My Board: ${singleBoard.name}</div>`;
      domString += `<div class="card-body"> ${singleBoard.description}</div>`;
      domString += '<h3 class="card-title"></h3>';
      domString += '</div>';
      utils.printToDom('single-user', domString);
    })
    .catch((err) => console.error('problem with single board', err));
};

export default { buildSingleUser };
