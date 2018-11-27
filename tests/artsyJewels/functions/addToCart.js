const credentials = require("../../../config/credentials");
const utils = require("../../../pages/common/utils");
const loginPage = require("../../../pages/artsyjewels/loginPage");
const leftSideBar = require("../../../pages/common/leftSideBar");
const cartSideBar = require("../../../pages/common/cartSideBar");

module.exports = {
  "@tags": ["addtocart", "artsy"],

  before: async client => {
    await utils.openBrowser(client);
  },

  after: async client => {
    await utils.closeBrowser(client);
  },

  "Navigate to login page": async client => {
    await loginPage.goToLoginPage(client);
  },

  "Login with valid credentials": async client => {
    await loginPage.login(client, credentials.email, credentials.password);
  },

  "add to cart": async client => {
    await leftSideBar.addToCart(client);
  },

  "Cart contains product": async client => {
    await cartSideBar.cartContainsProduct(client);
  }
};
