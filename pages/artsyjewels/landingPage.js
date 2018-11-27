const credentials = require("../../config/credentials");

module.exports = {
  goToLandingPage: function(client) {
    client
      .url("https://www.artsyjewels.com")
      .waitForElementVisible("body", 3000);
  },

  clickBuyNowButton: function(client) {
    client.waitForElementVisible(".hero__cta", 2000).click(".hero__cta");
  }
};
