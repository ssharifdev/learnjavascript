"use strict";

// what are function closures ? 

// can refere to variables in outer scope

// variable which are defined in the parent functi9on which are available in the current functions

function sayHello(name) {
    var text = 'hello' + name;  // for sayHello function this is local variable
    return function(){
        console.log(text);  // this function text is closure variable
    }
};

var sayAsim = sayHello("Asim");
sayAsim();


var foo = [];
for (var i= 0; i<10; i++){
    foo[i] = function() { return i };
}

console.log(foo[0]()); // 10
console.log(foo[1]()); // 10

// Fixing the above problem

for (var i=0; i<10;i++){
    (function(){
        var y = i;
        foo[i] = function() { return y };
    })();
}

for (var i=0; i<10;i++){
    (function(y){
        foo[y] = function() { return y };
    })(i);
}




function moo(){

    var myvar = 1;
    var fooValue = 5;
    debugger;
    function foo(){
        debugger;
        console.log(myvar);
        console.log(fooValue);
        var fooValue = 2;
        function doo(){
            debugger;
            console.log(myvar);   // closure (moo)
            console.log(fooValue); // closure (foo)
        }
        doo();
    }
    foo();
}
moo()




