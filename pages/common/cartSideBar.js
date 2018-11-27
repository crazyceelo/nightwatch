module.exports = {
  cartContainsProduct: function(client) {
    // if (client.options.desiredCapabilities.browserName) {
    //   client.waitForElementVisible();
    // }
    client
      .waitForElementVisible("#CartDrawer", 10000)
      .waitForElementVisible(
        "#CartContainer > form > div.ajaxcart__inner.ajaxcart__inner--has-fixed-footer > div.ajaxcart__product",
        5000
      )
      .assert.visible(
        "#CartContainer > form > div.ajaxcart__inner.ajaxcart__inner--has-fixed-footer > div.ajaxcart__product"
      );
  }
};
