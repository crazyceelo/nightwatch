"use strict";

const {
  header,
  solutionsDropdown,
  argosOption
} = require("./landingPageSelectors");

module.exports = {
  goToLandingPage: async client => {
    await client.windowMaximize();
    await client.url("https://evisions.com/");
    await client.waitForElementVisible("body", 3000);
  },

  closeBrowser: async client => {
    await client.end();
  },

  landingPageLoads: function(client) {
    client.expect
      .element(header)
      .text.to.equal("Higher Education Software Solutions");
  },

  clickOnArgos: async client => {
    await client.waitForElementVisible(solutionsDropdown, 2000);
    await client.moveToElement(solutionsDropdown, 5, 5);
    await client.waitForElementVisible(argosOption, 1000);
    await client.click(argosOption);
  }
};
