

var Browser = require("zombie");

/*

There's always more than one way to do it in JavaScript. 
In this case, we're instantiating a new zombie Browser() object.
You can configure the browser object in two ways - that I know of, at least

*/

// Method One / Instantiate object THEN alter it's properties.

b = new Browser();
b.debug = true;
b.userAgent = "I am a fake browser";

console.log(b.debug);
console.log(b.userAgent);


// Method Two / Instantiate object with property settings.

otherB = new Browser({ 					// I think this is how 
	debug: true, 								// you separate this.
	userAgent: "I TOO am a fake browser"		// Need lessons on
});												// JS idioms.

console.log(otherB.debug);
console.log(otherB.userAgent);
