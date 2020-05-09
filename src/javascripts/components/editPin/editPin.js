import pinsData from '../../helpers/data/pinsData';
import boardData from '../../helpers/data/boardData';
import utils from '../../helpers/utils';

const showForm = (pinsId) => {
  pinsData.getSinglePins(pinsId)
    .then((resp) => {
      const pins = resp.data;
      console.log('pin', pins.boardId);
      let domString = '';
      domString += `<form class="col-10 offset-1 edit-pin-form" id=${pinsId} data-board-id="${pins.boardId}">`;
      domString += '<div class="form-group">';
      domString += '<label for="pins-imageUrl"></label>';
      domString += `<input type="text" class="form-control" id="edit-pin-image" placeholder="image" value=${pins.imageUrl}>`;
      domString += '<div class="form-group">';
      domString += '<label for="pins-board-name" class="pr-3">Board Name:</label>';
      domString += '<select id="pin-board-id-dropdown">';
      boardData.getAllBoards()
        .then((boards) => {
          boards.forEach((board) => {
            domString += `<option value=${board.id} ${board.id === pins.boardId ? 'selected' : ''}>${board.name}</option>`;
          });
          domString += '</select>';
          domString += '<label for="pins-boardId"></label>';
          // domString += `<input type="text" class="form-control" id="edit-pin-boardId" placeholder="boardId" value=${pins.boardId}>`;
          domString += '<div>';
          domString += '<button type="submit" class="btn btn-dark" id="form-edit-pin-creator">Modify Pin</button>';
          domString += '</div>';// fix everything below this line to boards
          domString += '</div>';
          domString += '</div>';
          domString += '</form>';
          utils.printToDom('edit-pin', domString);
        })
        .catch((err) => console.error('could not get edit pin info', err));
    });
};
export default { showForm };
