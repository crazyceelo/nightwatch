const credentials = require("../../config/credentials");

module.exports = {
  goToLandingPage: async client => {
    await client.url("https://www.artsyjewels.com");
    await client.waitForElementVisible("body", 3000);
  },

  clickBuyNowButton: async client => {
    await client.waitForElementVisible(".hero__cta", 2000);
    await client.click(".hero__cta");
  }
};
