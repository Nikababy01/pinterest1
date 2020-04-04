import './cardpins.scss';

const pinsMaker = (pins) => {
  let domString = '';
  domString += '<div class="col-3">';
  domString += `<div class= "card pins-cards card" id="${pins.id}">`;
  domString += '<div class= "card-header"></div>';
  domString += '<div class= "card-body">';
  domString += `<img class = "card-img-top" src= "${pins.imageUrl}" alt= "card image">`;
  domString += '<button class="btn btn-danger delete-pins"><i class="fas fa-trash-alt"></i></button>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';

  return domString;
};

export default { pinsMaker };
