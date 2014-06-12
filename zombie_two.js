
var util = require("util");

var Browser = require("zombie");

/*

Keep in mind, I'm a crappy Python programmer as it is. That said, 
I tend to use Python's dir() a ton when trying to figure out
what an object can do or what I can do to that object.

*/

// Make a browser
b = new Browser();

// OK, now what?! And don't say to RTFD! What is in this browser object?!

// You might think about doing something like this ....
// I won't even print out the details since they bust the scrollback
// of my terminal.
var chatty_details = util.inspect(b)

// What you really - KIND OF - want is something like this
var details = util.inspect(b, { showHidden: true, depth: 1, colors: true});
console.log(details);

