"use strict";
const landingPage = require("../../../pages/evisions/landingPage");

module.exports = {
  "@tags": ["navigation", "evisions", "all"],

  before: async client => {
    await landingPage.goToLandingPage(client);
  },

  after: async client => {
    await landingPage.goToLandingPage(client);
  },

  "Landing page loads": function(client) {
    landingPage.landingPageLoads(client);
  }
};
