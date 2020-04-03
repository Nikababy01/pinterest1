import userData from '../../helpers/data/userData';
import utils from '../../helpers/utils';
import carduser from '../carduser/carduser';


const buildUser = () => {
  userData.getUser()
    .then((user) => {
      let domString = '';
      domString += '<h2 class="text-center">User</h2>';
      domString += '<div class="d-flex flex-wrap">';
      user.forEach((users) => {
        domString += carduser.userMaker(users);
      });
      domString += '</div>';
      utils.printToDom('user', domString);
    })
    .catch((err) => console.error('get user broke', err));
};

export default { buildUser };
