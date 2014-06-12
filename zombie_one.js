var Browser = require("zombie");
var assert = require("assert");
var url = "http://www.yahoo.com";

browser = new Browser({ debug: true });

Browser.visit(url, function (e, browser) {
	console.log(browser.url);
	console.log(browser.statusCode);
	console.log(browser.text("title"));
});
