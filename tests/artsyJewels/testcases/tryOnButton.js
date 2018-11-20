const utils = require("../../../pages/utils");

module.exports = {
  "@tags": ["tryonbutton"],

  before: function(client) {
    utils.openLandingPage(client);
  },

  after: function(client) {
    utils.closeBrowser(client);
  },

  "Click try on button": function(client) {
    utils.tryOnButton(client);
  }
};
