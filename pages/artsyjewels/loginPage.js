const credentials = require("../../config/credentials");

module.exports = {
  goToLoginPage: function(client) {
    client
      .url("https://www.artsyjewels.com/account/login")
      .waitForElementVisible("body", 3000);
  },

  login: function(client, email, password) {
    client
      .waitForElementVisible("#CustomerEmail", 5000)
      .setValue("#CustomerEmail", email)
      .waitForElementVisible("#CustomerPassword", 5000)
      .setValue("#CustomerPassword", password)
      .waitForElementVisible('[value="Sign In"]', 5000)
      .click('[value="Sign In"]');
  }
};
