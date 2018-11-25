const utils = require("../../../pages/common/utils");
const loginPage = require("../../../pages/artsyjewels/loginPage");

module.exports = {
  "@tags": ["addtocart", "artsy"],

  before: function(client) {
    utils.openBrowser(client);
  },

  after: function(client) {
    utils.closeBrowser(client);
  },

  "Navigate to login page": function(client) {
    loginPage.goToLoginPage(client);
  },

  "Login with valid credentials": function(client) {
    loginPage.login(client);
  }

  // add product to cart steps here
};
