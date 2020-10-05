const { greet } = require("../src/utils/test-functions");

// testing add
describe("testing greet function", () => {
   test("greet user", () => {
      expect(greet("edward")).toEqual("edward good morning");
   });
});
