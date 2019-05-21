const { getProfile } = require("./asyncProfile");

// Import dummy data
const profile = require("../dummy/profile");

/**
 * Callback
 */
// test("Check async profile", done => {
//   function callback(data) {
//     expect(data).toEqual(profile);
//     done();
//   }

//   getProfile(callback);
// }, 30000);

/**
 * Promise
 */
test("Check async profile", () => {
  return getProfile().then(data => {
    expect(data).toEqual(profile);
  });
}, 30000);

/**
 * .resolve
 * if the promise return reject
 * this test will automatically fail
 */
// test("Check async profile", () => {
//   return expect(getProfile()).resolves.toEqual(
//     expect.objectContaining({
//       name: "Leanne Graham",
//       email: "Sincere@april.biz"
//     })
//   );
// }, 30000);

/**
 * Match Obj Keys
 * check if the actual object data
 * contains some keys
 */
// test("Check async profile", () => {
//   return getProfile().then(data => {
//     expect(data).toMatchObject({
//       name: "Leanne Graham",
//       email: "Sincere@april.biz"
//     });
//   });
// }, 30000);

// test("Check async profile", () => {
//   return getProfile().then(data => {
//     expect(data).toEqual(expect.objectContaining({
//       name: "Leanne Graham",
//       email: "Sincere@april.biz"
//     }));
//   });
// }, 30000);
