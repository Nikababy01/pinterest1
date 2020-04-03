import axios from 'axios';
import apiKeys from '../apiKeys.json';


const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getUser = () => new Promise((resolve, reject) => {
  // axios.get(`${baseUrl}/users.json`).then((response) => { console.log(response); });
  axios.get(`${baseUrl}/users.json`)
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


export default { getUser };
