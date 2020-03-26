import userData from '../../helpers/data/userData';
import utils from '../../helpers/utils';

const buildSingleUser = (e) => {
  const userId = e.target.closest('.card').id;
  userData.getUserById(userId)
    .then((response) => {
      const singleUser = response.data;
      let domString = '';
      domString += '<h2 class="text-center"> User </h2>';
      domString += '<div class="col-12">';
      domString += '<div class="card text-white bg-success">';
      domString += `<div class="card-header">User: ${singleUser.name}</div>`;
      domString += '<div class="card-body">';
      domString += '<h3 class="card-title"></h3>';
      domString += '</div>';
      domString += '</div>';
      utils.printToDom('single-user', domString);
    })
    .catch((err) => console.error('problem with single farmer', err));
};

export default { buildSingleUser };
