import firebase from 'firebase/app';
import 'firebase/auth';

import userComponent from '../../components/user/user';
// import pins from '../../components/pins/pins';
import board from '../../components/board/board';

const authDiv = $('#auth');
const boardDiv = $('#board');
const pinsDiv = $('#pins');
const userDiv = $('#user');
const addnewboardDiv = $('#add-new-board');
const logoutButton = $('#navbar-logout-button');
const returnButton = $('#navbar-return-button');


const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      boardDiv.removeClass('hide');
      pinsDiv.addClass('hide');
      userDiv.addClass('hide');
      addnewboardDiv.removeClass('hide');
      logoutButton.removeClass('hide');
      returnButton.addClass('hide');
      board.buildBoard();
      userComponent.buildUser();
      // pins.buildPins();
    } else {
      authDiv.removeClass('hide');
      boardDiv.addClass('hide');
      pinsDiv.addClass('hide');
      userDiv.addClass('hide');
      logoutButton.addClass('hide');
      returnButton.addClass('hide');
      addnewboardDiv.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
