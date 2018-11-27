const credentials = require("../../../config/credentials");
var utils = require("../../../pages/common/utils");
const loginPage = require("../../../pages/artsyjewels/loginPage");

module.exports = {
  "@tags": ["login", "artsy"],

  before: async client => {
    await utils.openBrowser(client);
  },

  after: async client => {
    await utils.closeBrowser(client);
  },

  "Navigate to the login page": async client => {
    await loginPage.goToLoginPage(client);
  },

  "Login with valid credentials": async client => {
    await loginPage.login(client, credentials.email, credentials.password);
  }
};
