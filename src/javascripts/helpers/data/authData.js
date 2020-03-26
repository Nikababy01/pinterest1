import firebase from 'firebase/app';
import 'firebase/auth';
import userComponent from '../../components/user/user';
import pins from '../../components/pins/pins';
import board from '../../components/board/board';

const authDiv = $('#auth');
const boardDiv = $('#board');
const pinsDiv = $('#pins');
const userDiv = $('#user');
const logoutButton = $('#navbar-logout-button');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      boardDiv.removeClass('hide');
      pinsDiv.removeClass('hide');
      userDiv.removeClass('hide');
      logoutButton.removeClass('hide');
      board.buildBoard();
      userComponent.buildUser();
      pins.buildPins();
    } else {
      authDiv.removeClass('hide');
      boardDiv.addClass('hide');
      pinsDiv.addClass('hide');
      userDiv.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
