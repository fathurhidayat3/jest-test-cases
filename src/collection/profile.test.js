const profile = require("./profile");

test("check profile", () => {
  expect(profile).toEqual({
    name: "Fathur",
    age: "25",
    gender: "male"
  });
});