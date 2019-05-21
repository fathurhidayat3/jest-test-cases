// Import dummy data
const profile = require("../../dummy/profile");

const get = url => {
  return Promise.resolve({ data: profile });
};

module.exports = { get: get };
