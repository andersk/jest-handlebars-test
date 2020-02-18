module.exports = {
  testEnvironment: "node",
  transform: {
    "\\.hbs$": "<rootDir>/transform-handlebars.js",
  },
};
