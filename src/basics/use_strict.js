// not a keyword, its string

// enable strict mode globaly
"use strict"


/* function newCode() {
    // enable strict mode for this function
    "use strict"

} */


// variable with var keyword will through error
var a = 10; // will work
a = 10; // will through error

// Keyword which are used by javascript
var let = 10; // will not work in strict mode

// We cant not delete function, variables and function arguments

var foo = 1;
delete foo;

function moo() {};
delete moo;

function moo2(arg) {
    delete arg;
};

var eval = 1; // through error as eval is javascript keyword

var a = 2;
eval("var a = 1"); // a variable leaks out in normal mode
console.log(a); // a is 2 in strict mode | a is 1 in normal mode