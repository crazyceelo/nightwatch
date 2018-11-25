/* In nightwatch/globals.js */
var HtmlReporter = require("nightwatch-html-reporter");
var reporter = new HtmlReporter({
  openBrowser: true,
  reportsDirectory: __dirname + "/reports/HTMLreports"
});
module.exports = {
  reporter: reporter.fn
};