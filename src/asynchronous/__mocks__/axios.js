// Import dummy data
const profile = require("../../dummy/profile");

const get = url => {
  return profile ? Promise.resolve({ data: profile }) : Promise.reject();
};

module.exports = { get: get };
