module.exports = {
  cartContainsProduct: async client => {
    await client.waitForElementVisible("#CartDrawer", 3000);
    await client.waitForElementVisible(
      "#CartContainer > form > div.ajaxcart__inner.ajaxcart__inner--has-fixed-footer > div.ajaxcart__product",
      5000
    );
    await client.assert.visible(
      "#CartContainer > form > div.ajaxcart__inner.ajaxcart__inner--has-fixed-footer > div.ajaxcart__product"
    );
  }
};
