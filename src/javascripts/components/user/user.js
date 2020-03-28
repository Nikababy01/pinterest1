// import firebase from 'firebase/app';
// import 'firebase/auth';
import singleUser from '../singleUser/singleUser';
import userData from '../../helpers/data/userData';
import utils from '../../helpers/utils';
// import boardData from '../../helpers/data/boardData';
import carduser from '../carduser/carduser';


// const getCurrentUid = () => {
//  const myUid = firebase.auth().currentUser.uid;
// console.error(myUid);
// boardData.getBoardsByUid(myUid).then().catch();
// };

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
      domString += '<button class="btn btn-danger" id="get-uid">get UID</button>';
      utils.printToDom('user', domString);
      $('body').on('click', '.user-cards', singleUser.buildSingleUser);
      // $('#get-uid').click(getCurrentUid);
    })
    .catch((err) => console.error('get user broke', err));
};

export default { buildUser };
