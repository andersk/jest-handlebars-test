const greet = require("../greet.hbs");

test("am", () => {
  expect(greet({ am: true, name: "Joe" })).toEqual(
    "<p>Good\n  morning\nJoe!</p>\n"
  );
});
