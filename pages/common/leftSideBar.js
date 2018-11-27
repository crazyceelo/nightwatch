module.exports = {
  addToCart: function(client) {
    client
      .waitForElementVisible("body", 4000)
      .assert.title("Account – Artsyjewels")
      .waitForElementVisible(".site-nav--open", 4000)
      .click(".site-nav--open")
      .waitForElementVisible("#Label-2", 4000)
      .click("#Label-2")
      .pause(5000)
      .waitForElementVisible("#gf-products > div:nth-child(1)", 15000)
      .click("#gf-products > div:nth-child(1)")
      .waitForElementVisible("#AddToCart--product-template", 4000)
      .click("#AddToCart--product-template");
  }
};
