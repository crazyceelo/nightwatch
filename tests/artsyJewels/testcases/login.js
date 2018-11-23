var utils = require("../../../pages/utils");

module.exports = {
  "@tags": ["login", "artsy"],

  before: function(client) {
    utils.openBrowser(client);
  },

  after: function(client) {
    utils.closeBrowser(client);
  },

  "Login with valid credentials": function(client) {
    utils.login(client);
  }
};
