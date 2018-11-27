const credentials = require("../../config/credentials");

module.exports = {
  goToLoginPage: async client => {
    await client.url("https://www.artsyjewels.com/account/login");
    await client.waitForElementVisible("body", 3000);
  },

  login: async (client, email, password) => {
    await client.waitForElementVisible("#CustomerEmail", 1000);
    await client.setValue("#CustomerEmail", email);
    await client.waitForElementVisible("#CustomerPassword", 1000);
    await client.setValue("#CustomerPassword", password);
    await client.waitForElementVisible('[value="Sign In"]', 1000);
    await client.click('[value="Sign In"]');
  }
};
