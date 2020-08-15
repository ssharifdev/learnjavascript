
// Primitive types  by value
// Objects by reference | Points to something else


var a = 1; // true
function foo(a) {
    a = 2; // false
};
foo(a); // a is passed a copy of a
console.log(a); // 1 | true



var a = {'moo':'too'};
function foo(a) {
    // a.moo = false;  // updating the object will affect the reference

    a = { 'too': 'moo' };  // initiate new object reference // we have changed what a is points to 
};
foo(a); // a is passed by referense
console.log(a);