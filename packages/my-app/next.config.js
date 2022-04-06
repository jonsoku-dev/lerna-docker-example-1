const withTM = require("next-transpile-modules")(["@jonsoku/sample"]);

module.exports = withTM({
  reactStrictMode: true,
});
