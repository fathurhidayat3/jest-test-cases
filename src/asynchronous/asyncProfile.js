const axios = require("axios");

const getProfile = () => {
  let url = "http://jsonplaceholder.typicode.com/users/1/";

  return axios
    .get(url)
    .then(response => response.data)
    .catch(error => error);
};

module.exports = { getProfile };
