var assert = require("assert");
var Calculate = require("../index.js");

describe("Calculate", () => {
  describe(".factorial", () => {
    it("testing output of 5! matches 120", () => {
      //Set Up
      const inputNum = 5;
      const expected = 120;
      // Exercise
      const actual = Calculate.factorial(5);
      // Verify
      assert.equal(actual, expected);
    });

    it("testing output of 3! matches 6", () => {
      //Set Up
      const inputNum = 3;
      const expected = 6;
      // Exercise
      const actual = Calculate.factorial(3);
      // Verify
      assert.equal(actual, expected);
    });

    it("testing edgecase of 0!", () => {
      //Set Up
      const inputNum = 0;
      const expected = 1;
      // Exercise
      const actual = Calculate.factorial(0);
      // Verify
      assert.equal(actual, expected);
    });
  });
});
