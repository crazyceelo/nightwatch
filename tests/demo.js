module.exports = {
  "Demo test Google": function(client) {
    client
      .url("http://www.google.com")
      .waitForElementVisible("body", 1000)
      .assert.title("Google")
      .assert.visible("input[type=text]")
      .setValue("input[type=text]", "rembrandt van rijn")
      .waitForElementVisible("input[type='submit']:nth-child(1)", 1000)
      .click("input[type='submit']:nth-child(1)")
      .pause(1000)
      .assert.containsText(
        "#rso > div:nth-child(1) > div > div:nth-child(2) > div > div > div.r > a > h3",
        "Rembrandt - Wikipedia"
      )
      .end();
  }
};
