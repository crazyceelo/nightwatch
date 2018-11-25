const credentials = require("../../../config/credentials");
const utils = require("../../../pages/common/utils");
const loginPage = require("../../../pages/artsyjewels/loginPage");
const leftSideBar = require("../../../pages/common/leftSideBar");
const cartSideBar = require("../../../pages/common/cartSideBar");

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
    loginPage.login(client, credentials.email, credentials.password);
  },

  "add to cart": function(client) {
    leftSideBar.addToCart(client);
  },

  "Cart contains product": function(client) {
    cartSideBar.cartContainsProduct(client);
  }
};
