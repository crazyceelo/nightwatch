"use strict";
const landingPage = require("../../../pages/evisions/landingPage");
const utils = require("../../../pages/common/utils");

module.exports = {
  "@tags": ["navigation", "evisions", "all"],

  before: function(client) {
    utils.openBrowser(client);
  },

  after: function(client) {
    utils.closeBrowser(client);
  },

  "Go to landing page": function(client) {
    landingPage.goToLandingPage(client);
  },

  "Landing page loads": function(client) {
    landingPage.landingPageLoads(client);
  }
};
