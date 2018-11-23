const utils = require("../../../pages/utils");

module.exports = {
  "@tags": ["addtocart", "artsy"],

  before: function(client) {
    utils.openBrowser(client);
  },

  after: function(client) {
    utils.closeBrowser(client);
  },

  "Login with valid credentials": function(client) {
    utils.login(client);
  },

  "Add a product to cart": function(client) {
    utils.addToCart(client);
  }
};
