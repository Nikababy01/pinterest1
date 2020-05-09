import './cardpins.scss';

const pinsMaker = (pins) => {
  let domString = '';
  domString += '<div class="col-3">';
  domString += `<div class= "card pins-cards" id="${pins.id}">`;
  domString += '<div class= "card-header"></div>';
  domString += '<div class= "card-body">';
  domString += `<img class = "card-img-top" src= "${pins.imageUrl}" alt= "card image">`;
  domString += `<button class="btn btn-danger delete-pins" data-board-id="${pins.boardId}"><i class="fas fa-trash-alt"></i></button>`;
  domString += '<button class="btn btn-primary edit-pins"><i class="fas fa-pencil-alt"></i></button>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  return domString;
};

export default { pinsMaker };
