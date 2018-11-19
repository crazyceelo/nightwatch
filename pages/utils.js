const credentials = require("../config/credentials");

module.exports = {
  openBrowser: function(client) {
    return client
      .windowMaximize()
      .url("https://www.artsyjewels.com/account/login")
      .waitForElementVisible("body", 3000);
  },

  login: function(client) {
    client
      .waitForElementVisible("#CustomerEmail", 1000)
      .setValue("#CustomerEmail", credentials.email)
      .waitForElementVisible("#CustomerPassword", 1000)
      .setValue("#CustomerPassword", credentials.password)
      .waitForElementVisible('[value="Sign In"]', 1000)
      .click('[value="Sign In"]');
  },

  closeBrowser: function(client) {
    client.end();
  }
};
