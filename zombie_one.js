var Browser = require("zombie");
var assert = require("assert");
var url = "http://www.google.com";

browser = new Browser();

Browser.visit(url, function (e, browser) {
	console.log("I visited " + url);
	console.log("----------------");
	console.log("Here's what I see:");
	console.log(browser.text("title"));
})
