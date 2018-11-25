module.exports = {
  cartContainsProduct: function(client) {
    client
      .waitForElementVisible(
        "#CartContainer .ajaxcart__product:nth-child(1)",
        1000
      )
      .assert.visible("#CartContainer .ajaxcart__product:nth-child(1)");
  }
};
