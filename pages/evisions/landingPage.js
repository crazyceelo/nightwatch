"use strict";

module.exports = {
  goToLandingPage: function(client) {
    client
      .windowMaximize()
      .url("https://evisions.com/")
      .waitForElementVisible("body", 3000);
  },

  landingPageLoads: function(client) {
    client.expect
      .element("#et-boc h1")
      .text.to.equal("Higher Education Software Solutions");
  },

  closeBrowser: function(client) {
    client.end();
  }
};
