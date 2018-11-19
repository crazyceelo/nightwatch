module.exports = {
  "@tags": ["testcase2"],
  "search functionality is working": function(client) {
    client
      .url("https://www.artsyjewels.com")
      .waitForElementVisible("body", 1000)
      .waitForElementVisible('a[href*="/search"]', 1000)
      .click('a[href*="/search"]')
      .waitForElementVisible("[type=search]", 1000)
      .setValue("[type=search]", ["silver bracelets", client.Keys.ENTER]);

    client.saveScreenshot("./screenshots/chrome/testcase2.jpg").end();
  }
};
