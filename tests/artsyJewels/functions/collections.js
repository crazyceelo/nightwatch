const utils = require("../../../pages/common/utils");
const landingPage = require("../../../pages/artsyjewels/landingPage");
const collectionsPage = require("../../../pages/artsyjewels/collectionsPage");

module.exports = {
  "@tags": ["collections", "artsy", "all"],

  before: async client => {
    await utils.openBrowser(client);
  },

  after: async client => {
    await utils.closeBrowser(client);
  },

  "Navigate to landing page": function(client) {
    landingPage.goToLandingPage(client);
  },

  "Click buy now button": function(client) {
    landingPage.clickBuyNowButton(client);
  },

  "Collections page loads": function(client) {
    collectionsPage.collectionsPageLoads(client);
  }
};
