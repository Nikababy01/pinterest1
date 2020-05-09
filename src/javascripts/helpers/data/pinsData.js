import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPins = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json`)
    .then((response) => {
      const myPins = response.data;
      const pins = [];
      Object.keys(myPins).forEach((pinsId) => {
        myPins[pinsId].id = pinsId;
        pins.push(myPins[pinsId]);
      });
      resolve(pins);
    })
    .catch((err) => reject(err));
});

const getPinsbyBoards = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json?orderBy="boardId"&equalTo"${boardId}"`)
    .then((response) => {
      const myPins = response.data;
      const pinsBoards = [];
      Object.keys(myPins).forEach((pinsId) => {
        myPins[pinsId].id = pinsId;
        pinsBoards.push(myPins[pinsId]);
      });
      resolve(pinsBoards);
    })
    .catch((err) => reject(err));
});

const getSinglePins = (pinsId) => axios.get(`${baseUrl}/pins/${pinsId}.json`);
const addPins = (brandNewPin) => axios.post(`${baseUrl}/pins.json`, brandNewPin);
const deletePins = (pinsId) => axios.delete(`${baseUrl}/pins/${pinsId}.json`);
const updatePin = (pinsId, modifiedPin) => axios.put(`${baseUrl}/pins/${pinsId}.json`, modifiedPin);
export default {
  getPins,
  deletePins,
  getSinglePins,
  addPins,
  getPinsbyBoards,
  updatePin,
};
