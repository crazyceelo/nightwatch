const utils = require("../../../pages/common/utils");
const landingPage = require("../../../pages/artsyjewels/landingPage");
const collectionsPage = require("../../../pages/artsyjewels/collectionsPage");

module.exports = {
  "@tags": ["collections", "artsy"],

  before: async client => {
    await utils.openBrowser(client);
  },

  after: async client => {
    await utils.closeBrowser(client);
  },

  "Navigate to landing page": async client => {
    await landingPage.goToLandingPage(client);
  },

  "Click buy now button": async client => {
    await landingPage.clickBuyNowButton(client);
  },

  "Collections page loads": async client => {
    await collectionsPage.collectionsPageLoads(client);
  }
};
