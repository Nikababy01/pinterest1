import './cardboard.scss';
// import cardpins from '../cardpins/cardpins';

const boardMaker = (board) => {
  let domString = '';
  domString += '<div class="col-3">';
  domString += `<div class="card ${board.name}" id="${board.id}">`;
  domString += `<div class="card-header">${board.name}</div>`;
  domString += '<div class="mycard-body">';
  domString += `<h5 class="card-title">${board.description}</h5>`;
  domString += '<button class="btn btn-danger delete-board"><i class="fas fa-trash-alt"></i></button>';
  domString += `<button class="btn btn-success board-cards" data-board-id=${board.id}><i class="fab fa-pinterest"></i></button>`;
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  return domString;
};

export default { boardMaker };
