let pets = ["dog", "cat", "chicken"];
let users = [
  { name: "John", gender: "male" },
  { name: "Jean", gender: "female" }
];

test("check if pets collection is an array", () => {
  expect(Array.isArray(pets)).toBe(true);
});

test("check if array of pets contains dog", () => {
  expect(pets).toContain("dog");
});

test("check if array of users contains John data", () => {
  // expect(users).toEqual(
  //   expect.arrayContaining([{ name: "John", gender: "male" }])
  // );

  expect(users).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ name: "John" })
    ])
  );
});
