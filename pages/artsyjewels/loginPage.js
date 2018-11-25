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
  },

  addToCart: function(client) {
    client
      .waitForElementVisible("body", 1000)
      .assert.title("Account – Artsyjewels")
      .waitForElementVisible(".site-nav--open", 1000)
      .click(".site-nav--open")
      .waitForElementVisible("#Label-2", 1000)
      .click("#Label-2")
      .waitForElementVisible("#gf-products > div:nth-child(1)", 1000)
      .click("#gf-products > div:nth-child(1)")
      .waitForElementVisible("#AddToCart--product-template", 1000)
      .click("#AddToCart--product-template")
      .pause(5000)
      .end();
  }
};
