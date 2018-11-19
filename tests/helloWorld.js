module.exports = {
  "@tags": ["helloworld"],
  "User can click on button": function(client) {
    client
      .url("http://clickclickclick.click")
      .waitForElementVisible(".button:nth-child(1)", 3000)
      .click(".button:nth-child(1)")
      .end();
  }
};
