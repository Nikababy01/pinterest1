const userMaker = (user) => {
  let domString = '';
  domString += '<div class="col-3">';
  domString += `<div class= "card user-cards" id=${user.id}>`;
  domString += `<div class= "card-header">${user.name}</div>`;
  domString += '<div class= "card-body">';
  domString += `<h5 class= "card-title">${user.id}</h5>`;
  domString += '<button id="remove-user"><i class="fas fa-trash-alt"></i></button>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';

  return domString;
};

export default { userMaker };
