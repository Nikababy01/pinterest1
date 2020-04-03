import firebase from 'firebase/app';
import 'firebase/auth';
import board from '../board/board';

const logoutEvent = () => {
  $('#navbar-logout-button').click((e) => {
    e.preventDefault();
    firebase.auth().signOut();
  });
};

const boardDiv = $('#board');
const returnButton = $('#navbar-return-button');
const logoutButton = $('#navbar-logout-button');
const pinsDiv = $('#pins');
const backToBoards = () => {
  $('#navbar-return-button').click((e) => {
    e.preventDefault();
    board.buildBoard();
    boardDiv.removeClass('hide');
    logoutButton.removeClass('hide');
    returnButton.addClass('hide');
    pinsDiv.addClass('hide');
  });
};
export default { logoutEvent, backToBoards };
