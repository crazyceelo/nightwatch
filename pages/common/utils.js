module.exports = {
  openBrowser: async client => {
    await client.windowMaximize();
  },

  closeBrowser: async client => {
    await client.end();
  }
};
