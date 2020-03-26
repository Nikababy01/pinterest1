import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getBoards = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/board.json`)
    .then((response) => {
      const myBoards = response.data;
      const boards = [];
      Object.keys(myBoards).forEach((boardId) => {
        myBoards[boardId].id = boardId;
        boards.push(myBoards[boardId]);
      });
      resolve(boards);
    })
    .catch((err) => reject(err));
});
export default { getBoards };
