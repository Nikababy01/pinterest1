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

const deletePins = (pinsId) => axios.delete(`${baseUrl}/pins/${pinsId}.json`);
export default { getPins, deletePins };
