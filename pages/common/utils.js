module.exports = {
  openBrowser: function(client) {
    client.windowMaximize();
  },

  closeBrowser: function(client) {
    client.end();
  }
};
