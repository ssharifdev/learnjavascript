"use strict";

// what is the scope chain ?

// where the variable is looked > order is defined the functions are writen (Lexical environment)

function foo() {
    console.log(myvar); // myvar is not defined // Lexically foo function is writen in global so myvar will be checked inside function is not found chain will go to global scope
}

function goo() {
    var myvar = 1;
    foo();
}

goo();


function goo() {
    var myvar = 1;
    function foo() {
        console.log(myvar); // 1 // because now the foo function is lexically writen inside function goo so the scope chain will go to goo after foo
    }
    foo();
}