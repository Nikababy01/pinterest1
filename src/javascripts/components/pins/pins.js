import pinsData from '../../helpers/data/pinsData';
// import boardData from '../../helpers/data/boardData';
// import singleUser from '../singleUser/singleUser';
import utils from '../../helpers/utils';
import cardpins from '../cardpins/cardpins';

const boardDiv = $('#board');
const returnButton = $('#navbar-return-button');
const logoutButton = $('#navbar-logout-button');
const pinsDiv = $('#pins');

const deletePins = (e) => {
  const pinsId = e.target.closest('.card').id;
  pinsData.deletePins(pinsId)
    // eslint-disable-next-line no-use-before-define
    .then(() => buildPins())
    .catch((err) => console.error('could not delete pins', err));
};


const buildPins = () => {
  pinsData.getPins()
    .then((pins) => {
      let domString = '';
      domString += '<h2 class="text-center">Pins</h2>';
      domString += '<div class= "d-flex flex-wrap">';
      pins.forEach((pin) => {
        domString += cardpins.pinsMaker(pin);
        pinsDiv.removeClass('hide');
        boardDiv.addClass('hide');
        logoutButton.addClass('hide');
        returnButton.removeClass('hide');
      });
      domString += '</div>';
      utils.printToDom('pins', domString);
      $('body').on('click', '.delete-pins', deletePins);
    })
    .catch((err) => console.error('get pins broke', err));
};

export default { buildPins };
