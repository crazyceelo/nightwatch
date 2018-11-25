const credentials = require("../../config/credentials");

module.exports = {
  goToLoginPage: function(client) {
    client
      .url("https://www.artsyjewels.com/account/login")
      .waitForElementVisible("body", 3000);
  },

  login: function(client, email, password) {
    client
      .waitForElementVisible("#CustomerEmail", 1000)
      .setValue("#CustomerEmail", email)
      .waitForElementVisible("#CustomerPassword", 1000)
      .setValue("#CustomerPassword", password)
      .waitForElementVisible('[value="Sign In"]', 1000)
      .click('[value="Sign In"]');
  }
};
