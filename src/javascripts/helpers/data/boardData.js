import axios from 'axios';
import apiKeys from '../apiKeys.json';


const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getBoardsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boards.json?orderBy="uid"&equalTo="${uid}"`)
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
const getUserById = (boardId) => axios.get(`${baseUrl}/board/${boardId}.json`);
const deleteBoard = (boardId) => axios.delete(`${baseUrl}/board/${boardId}.json`);

export default { getBoardsByUid, getUserById, deleteBoard };
