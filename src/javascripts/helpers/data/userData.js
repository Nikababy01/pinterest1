import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getUser = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/user.json`)
    .then((response) => {
      const myUser = response.data;
      const user = [];
      Object.keys(myUser).forEach((userId) => {
        myUser[userId].id = userId;
        user.push(myUser[userId]);
      });
      resolve(user);
    })
    .catch((err) => reject(err));
});

const getUserById = (userId) => axios.get(`${baseUrl}/user/${userId}.json`);

export default { getUser, getUserById };
