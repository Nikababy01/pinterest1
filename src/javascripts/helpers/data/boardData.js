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

const getAllBoards = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boards.json`)
    .then((response) => {
      const demBoards = response.data;
      const boards = [];
      if (demBoards) {
        Object.keys(demBoards).forEach((boardsId) => {
          demBoards[boardsId].id = boardsId;
          boards.push(demBoards[boardsId]);
        });
      }
      resolve(boards);
    })
    .catch((err) => reject(err));
});

const deleteBoard = (boardId) => axios.delete(`${baseUrl}/boards/${boardId}.json`);
const getBoardsById = (boardId) => axios.get(`${baseUrl}/boards/${boardId}.json`);
const addBoard = (brandNewBoard) => axios.post(`${baseUrl}/boards.json`, brandNewBoard);

export default {
  getBoardsByUid,
  deleteBoard,
  getBoardsById,
  addBoard,
  getAllBoards,
};
