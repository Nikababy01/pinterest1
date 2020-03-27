import boardData from './boardData';


const getSingleUserwithBoards = (boardId) => new Promise((resolve, reject) => {
  boardData.getUserById(boardId)
    .then((response) => {
      const board = response.data;
      resolve(board);
    })
    .catch((err) => reject(err));
});

export default { getSingleUserwithBoards };
