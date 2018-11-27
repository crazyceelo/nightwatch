const credentials = require("../../../config/credentials");
var utils = require("../../../pages/common/utils");
const loginPage = require("../../../pages/artsyjewels/loginPage");

module.exports = {
  "@tags": ["login", "artsy", "all"],

  before: function(client) {
    utils.openBrowser(client);
  },

  after: function(client) {
    utils.closeBrowser(client);
  },

  "Navigate to the login page": function(client) {
    loginPage.goToLoginPage(client);
  },

  "Login with valid credentials": function(client) {
    loginPage.login(client, credentials.email, credentials.password);
  }
};
