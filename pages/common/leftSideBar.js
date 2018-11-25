module.exports = {
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
      .click("#AddToCart--product-template");
  }
};
