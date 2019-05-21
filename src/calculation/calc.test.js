const { tambah, kurang } = require("./calc");

let num1 = 0;
let num2 = 0;

/**
 * Describe will add block/scope to the test case
 * so before and after just run inside it
 */
describe("Calculation", () => {
  beforeAll(() => {
    console.log("Init calculation test...");

    num1 = 1;
    num2 = 2;
  });

  test("add 2 number", () => {
    expect(tambah(num1, num2)).toBe(3);
  });

  test("substract 2 number", () => {
    expect(kurang(num1, num2)).toBe(-1);
  });

  afterAll(() => console.log("Calculation test done."));
});
