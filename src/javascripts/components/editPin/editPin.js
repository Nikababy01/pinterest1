import pinsData from '../../helpers/data/pinsData';
import boardData from '../../helpers/data/boardData';
import utils from '../../helpers/utils';

const showForm = (pinsId) => {
  pinsData.getPins(pinsId)
    .then(() => {
      // const pin = response.data;
      let domString = '';
      domString += `<form class="col-10 offset-1 edit-pin-form" id=${pinsId}>`;
      domString += '<div class="form-group">';
      domString += 'label for="pins-imageUrl"></label>';
      domString += '<input type="text" class="form-control id="edit-pin-image">';
      domString += '</div>';// fix everything below this line to boards
      domString += '<div class="form-group text-center">';
      domString += '<label class="pr-3" for="pin">Pins:</label>';
      domString += '<select id="board-update-btn">';
      boardData.getBoardsById()
        .then((boards) => {
          boards.forEach((board) => {
            domString += `<option value=${board.id}selected>${board.name}</option>`;
          });
          domString += '</select>';
          domString += '</div>';
          domString += '</div>';
          domString += '</form>';
          utils.printToDom('edit-pin', domString);
        })
        .catch((err) => console.error('could not get edit pin info', err));
    });
};
export default { showForm };
