// import boardData from '../../helpers/data/boardData';
import utils from '../../helpers/utils';

const buildNewPin = (pins) => {
  let domString = '';
  domString += '<h2 class="text-center">New Pin</h2>';
  domString += `<form class="col-10 offset-1 pin-form" id=${pins.id}>`;
  domString += `<div id=${pins.boardId}>`;
  domString += '<div class="form-group">';
  domString += '<label for="new-pin-image">Image</label>';
  domString += '<input type="text" class="form-control" id="new-pin-image"  placeholder="Enter Image">';
  domString += '</div>';
  domString += '</div>';
  domString += '<button type="submit" class="btn btn-success pin-creator" id="form-pin-creator">Submit</button>';
  domString += '</form>';
  domString += '</div>';

  utils.printToDom('add-new-pin', domString);
};

export default { buildNewPin };
