const credentials = require("../../../config/credentials");

module.exports = {
  "@tags": ["testcase3"],
  "user can login with valid email and password": function(client) {
    client
      .url("https://www.artsyjewels.com/account/login")
      .waitForElementVisible("body", 1000)
      .waitForElementVisible("#CustomerEmail", 1000)
      .setValue("#CustomerEmail", credentials.email)
      .waitForElementVisible("#CustomerPassword", 1000)
      .setValue("#CustomerPassword", credentials.password)
      .waitForElementVisible('[value="Sign In"]', 1000)
      .click('[value="Sign In"]');
  }
};
