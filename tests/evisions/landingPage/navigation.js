"use strict";
const landingPage = require("../../../pages/evisions/landingPage");

module.exports = {
  "@tags": ["navigation"],

  before: function(client) {
    landingPage.goToLandingPage(client);
  },

  after: function(client) {
    landingPage.goToLandingPage(client);
  },

  "Landing page loads": function(client) {
    landingPage.landingPageLoads(client);
  }
};
