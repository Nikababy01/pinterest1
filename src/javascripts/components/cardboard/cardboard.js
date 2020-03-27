const boardMaker = (board) => {
  let domString = '';
  domString += '<div class="col-3">';
  domString += `<div class= "card" id=${board.id}>`;
  domString += `<div class= "card-header">${board.name}</div>`;
  domString += '<div class= "card-body board-cards">';
  domString += `<h5 class= "card-title">${board.description}</h5>`;
  domString += '<button class="btn btn-danger delete-board"><i class="fas fa-trash-alt"></i></button>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';

  return domString;
};

export default { boardMaker };
