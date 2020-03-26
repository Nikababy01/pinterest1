import pinsData from '../../helpers/data/pinsData';
import utils from '../../helpers/utils';
import cardpins from '../cardpins/cardpins';

const buildPins = () => {
  pinsData.getPins()
    .then((pins) => {
      let domString = '';
      domString += '<h2>Pins</h2>';
      domString += '<div class= "d-flex flex-wrap">';
      pins.forEach((pin) => {
        domString += cardpins.pinsMaker(pin);
      });
      domString += '</div>';
      utils.printToDom('pins', domString);
    })
    .catch((err) => console.error('get pins broke', err));
};

export default { buildPins };
