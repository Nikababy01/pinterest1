import userData from './userData';


const getSingleUserwithBoards = (userId) => new Promise((resolve, reject) => {
  userData.getUserById(userId)
    .then((response) => {
      const user = response.data;
      resolve(user);
    })
    .catch((err) => reject(err));
});

export default { getSingleUserwithBoards };
