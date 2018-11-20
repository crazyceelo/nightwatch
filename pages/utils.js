const credentials = require("../config/credentials");

module.exports = {
  openBrowser: function(client) {
    client
      .windowMaximize()
      .url("https://www.artsyjewels.com/account/login")
      .waitForElementVisible("body", 3000);
  },

  openLandingPage: function(client) {
    client
      .windowMaximize()
      .url("https://www.artsyjewels.com")
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
  },

  tryOnButton: function(client) {
    client
      .waitForElementVisible(".hero__cta", 1000)
      .click(".hero__cta")
      .waitForElementVisible("header h1", 1000)
      .assert.containsText("header h1", "$50-$100")
      .end();
  }
};
