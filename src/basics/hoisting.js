"use strict";

// what is variable hoisting ?

console.log(a);  // undefined

var a = 1;

moo();

function moo() {}  // function statement


foo() // foo is not a funtion // undefined

var foo = function() {} // function expresion
