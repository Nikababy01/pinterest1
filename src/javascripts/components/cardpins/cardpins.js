const pinsMaker = (pins) => {
  let domString = '';
  domString += '<div class="col-3">';
  domString += `<div class= "card" id= ${pins.id}>`;
  domString += `<div class= "card-header">${pins.imageUrl}</div>`;
  domString += '<div class= "card-body">';
  domString += `<h5 class= "card-title">${pins.imageUrl}</h5>`;
  domString += '<button class="btn btn-danger delete-pins"><i class="fas fa-trash-alt"></i></button>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';

  return domString;
};

export default { pinsMaker };
