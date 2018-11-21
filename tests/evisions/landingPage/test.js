"use strict";
const landingPage = require("../../../pages/evisions/landingPage");
const argosPage = require("../../../pages/evisions/argosPage");

module.exports = {
  "@tags": ["navigation", "argos"],

  before: function(client) {
    landingPage.goToLandingPage(client);
  },

  after: function(client) {
    landingPage.goToLandingPage(client);
  },

  "Argos page loads": function(client) {
    landingPage.clickOnArgos(client);
    argosPage.argosPageLoads(client);
  }
};
