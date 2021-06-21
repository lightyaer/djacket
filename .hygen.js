const path = require("path");

module.exports = {
  helpers: {},
  // exec: (action, body) => {},
  cwd: process.cwd(),
  templates: path.resolve(__dirname, "hygen"),
  debug: true,
  // localsDefaults: {},
  // createPrompter: (q, t) => {},
};
