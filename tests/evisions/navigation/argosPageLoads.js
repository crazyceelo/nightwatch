"use strict";
const landingPage = require("../../../pages/evisions/landingPage");
const argosPage = require("../../../pages/evisions/argosPage");
const utils = require("../../../pages/common/utils");

module.exports = {
  "@tags": ["evisions", "argos", "all"],

  before: async client => {
    utils.openBrowser(client);
  },

  after: async client => {
    utils.closeBrowser(client);
  },

  "Landing page loads": function(client) {
    landingPage.goToLandingPage(client);
    landingPage.landingPageLoads(client);
  },

  "Argos page loads": function(client) {
    landingPage.clickOnArgos(client);
    argosPage.argosPageLoads(client);
  }
};
