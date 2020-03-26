const userMaker = (user) => {
  let domString = '';
  domString += `<div class= "card user-cards" id=${user.id}>`;
  domString += `<div class= "card-header">${user.name}</div>`;
  domString += '<div class= "card-body">';
  domString += `<h5 class= "card-title">${user.id}</h5>`;
  domString += '<p class="card-text"><i class="fas fa-trash-alt"></i></p>';
  domString += '</div>';
  domString += '</div>';

  return domString;
};

export default { userMaker };
