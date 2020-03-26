const pinsMaker = (pins) => {
  let domString = '';
  domString += '<div class= "card">';
  domString += `<div class= "card-header">${pins.imageUrl}</div>`;
  domString += '<div class= "card-body">';
  domString += `<h5 class= "card-title">${pins.id}</h5>`;
  domString += '<p class="card-text"><i class="fas fa-trash-alt"></i></p>';
  domString += '</div>';
  domString += '</div>';

  return domString;
};

export default { pinsMaker };
