import axios from 'axios';
import apiKeys from '../apiKeys.json';


const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getBoards = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/board.json`)
    .then((response) => {
      const myBoards = response.data;
      const board = [];
      Object.keys(myBoards).forEach((boardId) => {
        myBoards[boardId].id = boardId;
        board.push(myBoards[boardId]);
      });
      resolve(board);
    })
    .catch((err) => reject(err));
});
export default { getBoards };
