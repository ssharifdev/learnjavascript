"use strict";

// what are the different scopes in javascript ?

// Life time of a variable is scopes

var shaik = 1 // global variables

window.shaik = 1;

function moo () {
    var shaik = 1 // function scope
}


for(var i=0;i<5;i++) {
    var j = 5;
}

console.log(j)  // j is global variable