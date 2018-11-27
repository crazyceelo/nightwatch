"use strict";
const landingPage = require("../../../pages/evisions/landingPage");
const argosPage = require("../../../pages/evisions/argosPage");

module.exports = {
  "@tags": ["evisions", "argos", "all"],

  before: async client => {
    await landingPage.goToLandingPage(client);
  },

  after: async client => {
    await landingPage.goToLandingPage(client);
  },

  "Argos page loads": async client => {
    await landingPage.clickOnArgos(client);
    await argosPage.argosPageLoads(client);
  }
};
