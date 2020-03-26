const boardMaker = (board) => {
  let domString = '';
  domString += `<div class= "card board-cards" id=${board.id}>`;
  domString += `<div class= "card-header">${board.name}</div>`;
  domString += '<div class= "card-body">';
  domString += `<h5 class= "card-title">${board.description}</h5>`;
  domString += '<p class="card-text"><i class="fas fa-trash-alt"></i></p>';
  domString += '</div>';
  domString += '</div>';

  return domString;
};

export default { boardMaker };
