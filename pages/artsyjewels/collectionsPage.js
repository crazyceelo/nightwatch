module.exports = {
  collectionsPageLoads: function(client) {
    client
      .waitForElementVisible("body", 3000)
      .waitForElementVisible("#CollectionSection", 1000)
      .assert.visible("#CollectionSection");
  }
};
