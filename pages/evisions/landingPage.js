"use strict";

module.exports = {
  goToLandingPage: function(client) {
    client
      .windowMaximize()
      .url("https://evisions.com/")
      .waitForElementVisible("body", 3000);
  },

  closeBrowser: function(client) {
    client.end();
  },

  landingPageLoads: function(client) {
    client.expect
      .element("#et-boc h1")
      .text.to.equal("Higher Education Software Solutions");
  },

  clickOnArgos: function(client) {
    client
      .waitForElementVisible("#menu-item-3551", 2000)
      .moveToElement("#menu-item-3551", 5, 5)
      .waitForElementVisible(
        '[title="Argos: Enterprise Reporting"]:nth-child(1)',
        1000
      )
      .click('[title="Argos: Enterprise Reporting"]:nth-child(1)');
  }
};
