import userData from '../../helpers/data/userData';
// import smash from '../../helpers/data/smash';
import utils from '../../helpers/utils';

const buildSingleUser = (e) => {
  const userId = e.target.closest('.card').id;
  // smash.getSingleUserwithBoards(userId)
  userData.getUserById(userId)
    .then((response) => {
      const singleUser = response.data;
      let domString = '';
      domString += '<h2 class="text-center"> User Board</h2>';
      domString += '<div class="col-12">';
      domString += '<div class="card text-white bg-success">';
      domString += `<div class="card-header">My Board: ${singleUser.name}</div>`;
      domString += `<div class="card-body"> ${'what up'}</div>`;
      domString += '<h3 class="card-title"></h3>';
      domString += '</div>';
      domString += '</div>';
      utils.printToDom('single-user', domString);
    })
    .catch((err) => console.error('problem with single board', err));
};

export default { buildSingleUser };
