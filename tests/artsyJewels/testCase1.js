module.exports = {
  "@tags": ["testcase1"],
  "Open homepage and click on headers": function(client) {
    client
      .url("https://www.artsyjewels.com")
      .waitForElementVisible("body", 1000)
      .assert.title(
        "Best Online Jewelry Store | Affordable Jewelry Brand – Artsyjewels"
      )
      .waitForElementVisible(".site-nav--open", 1000)
      .click(".site-nav--open")
      .waitForElementVisible("#Label-2", 1000)
      .click("#Label-2")
      .end();
  }
};
