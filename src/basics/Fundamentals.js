//Javascript Practice fundamentals

//Global objects (window, this)


// Scope chain
/* Outer environment and where variables are available and it matters lexical Environment */

//1
//function b(){
//    console.log(myVar);
//}
//
//function a(){
//    var myVar = 2;
//    b();
//}
//
//var myVar = 1;
//a();

//2
//var myVar = 1;
//function a(){
//    var myVar = 2;
//    
//    function b(){
//        console.log(myVar);
//    }
//    b();
//}
//a();


//Scope
/* Where a variable is available in your code */


// Asynchronous
/* More than one at a time */

// Long running function
//function waitThreeSeconds(){
//    var ms = 3000 + new Date().getTime();
//    while(new Date() < ms){}
//    console.log('Fineshed Function');
//}
//function clickHandler(){
//    console.log('Click event!');
//}
//
//// Listen for click event
//document.addEventListener('click', clickHandler);
//
//waitThreeSeconds();
//console.log('Finished execution');


// Default Value
/* By using the OR || oparater we can check if value is available or not */


// Objects and Functions

// Objects and Dot
/* An object can have Primitive(Property), Object(Property), Function(method) */

// How to create and access the object
//1
//var person = new Object();
////[] computed member Access operater (Usefull when working with dynamical value)
//person['firstname'] = 'Tony';
//person['lastname'] = 'Alicea';
//
//var firstNameProperty = 'firstname';
//console.log(person[firstNameProperty]);
//
////2
//// . Member Access
//console.log(person.firstname);

// Objects and Object Literals 
/* New way of creating object */
//var person = {
//    firstnamr: 'Shaik',
//    lastname: 'Sharif'
//};

// Faking Namespace
/* A container for Variables and functions */
//
//var english = {};
//var spanish = {};

//english.greet = 'Hello';
//spanish.greet = 'Hola';

// JSON and Object Literals
/*JSON.stringify(object);
  JSON.parse(JSON String);*/


// Functions are Objects

/* FIrst class functions : Everything you can do with other types you can do with functions. (Assign them to variables, Pass them around, create them on the fly) */

/* Function is a special type of Object */
/* Attach Primitive, Object, Function and Name(Optional can be anonymous) and Code(Invocable()) */

//function greet(){
//    console.log('Hi');
//}
//greet.language = 'English';
//console.log(typeof greet.language);


// Function (Statements and Expressions)
/* Expression : A unit of code that Results in a value (It doesnt have to save to a variable) */
/* Statements : Doesnt return a value */

/* Function statements */
//function greet(){
//    console.log('Hi');
//}
/* Function Expression */
//var anonymousGreet = function(){
//    console.log('Hi');
//}

/* Creating function on the fly */
//function log(a){
//    a();
//}
//log(function(){
//    console.log('Hi');
//});

// By Value VS By Reference
/* BY Value : Primitive value create a copy of primitive value (b = a) */
/* By Reference : Object store the same path (b = a) */

/* BY Value */
//var a = 3;
//var b;
//b = a;
//a = 2;
//console.log(a);
//console.log(b);
//
///* BY Reference (all objects (including function)) */
//var c = { greeting: 'hi'};
//var d;
//d = c;
//c.greeting = 'hello'; // mutate
//console.log(c);
//console.log(d);
//
///* BY Reference (even as parameters) */
//function changeGreeting(obj){
//    obj.greeting = 'Hola'; // mutate
//}
//changeGreeting(d);
//console.log(c);
//console.log(d);
//
///* Equals operator sets up new memory space (New address) */
//c = { greeting : 'new Hola'};
//console.log(c);
//console.log(d);


// Objects, Functions and this
/* At Globle context this value is window(Globle Object) */
//function a(){
//    console.log(this);
//}
//a();
//
//var b = function(){
//    console.log(this);
//}
//b();
//
//var c = {
//    name: 'Shaik Sharif',
//    logName: function(){
//        var self = this;
//        console.log(this);        
//        var setName = function(newName){
//            console.log(self);
//            //this.name = newName;
//            self.name = newName;
//        }
//        setName('New sharif');
//        console.log(this);
//    }
//}
//c.logName();



// Arrays
/* Collection of everything */

//var arr = new Array();
//var arr = [
//    1,
//    false,
//    {
//        name: 'Tony',
//        address: 'Hyderabad'
//    },
//    function(name){
//        var greeting = 'Hello';
//        console.log(greeting + name, this);
//    },
//    "Hello"
//];
//console.log(arr);
//console.log(arr[3]("a"));


// Arguments and Spread
/* Arguments : The Parameters you pass to a function*/
//
//function greet(firstname, lastname, language){
//    language = language || 'en';
//    
//    console.log(firstname);
//    console.log(lastname);
//    console.log(language);
//    console.log('---------');
//    console.log(arguments);
//    console.log('---------')
//}
//greet();
//greet('John');
//greet('John','Doe');
//greet('John','Doe','es');


// Immediately Invoked Function Expressions (IIFE)S
/* Using IIFE */
//var greeting = function(name){
//    console.log('Hello ' + name);
//}('John');
//console.log(greeting);
//
//(function(name){
//    console.log('Hello '+ name);    
//})('John');


// CLOSURES
//function greet(whattosay){
//    return function(name){
//        console.log(whattosay + ' ' + name)
//    }
//}
//greet('Hi')('Tony');
//var sayHi = greet('Hi');
//sayHi('Tony');
/*Example [Problem] */
//function buildFunction(){
//    var arr=[];
//    for(var i=0; i< 3;i++){
//        arr.push(
//            function(){
//                console.log(i);
//            }
//        )
//    }
//    return arr;
//}
//
//var fs = buildFunction();
//fs[0]();
//fs[1]();
//fs[2]();
/* Example [Solutions] */
//function buildFunction(){
//    var arr = [];
//    for(var i=0;i<3;i++){
//        arr.push(
//            (function(i){
//                return function(){
//                    console.log(i);
//                }
//            })(i)
//        )
//    }
//    return arr;
//}
//var fs = buildFunction();
//fs[0]();
//fs[1]();
//fs[2]();


// Function Factories (Using Closures)
//function makeGreeting(language){
//    return function(firstname, lastname){
//        if(language === 'en'){
//            console.log('Hello '+ firstname+' '+lastname);
//        }
//        if(language === 'es'){
//            console.log('Hola '+ firstname+' '+lastname);
//        }
//    }
//}
//
//var greetEnglish = makeGreeting('en');
//var greetSpanish = makeGreeting('es');
//
//greetEnglish('John','Doe');
//greetSpanish('John','Doe');


//Closures and Callbacks
//
//function sayHiLater(){
//    var greeting = 'Hi';
//    
//    setTimeout(function(){
//        console.log(greeting);
//    },3000);
//}
//sayHiLater();

/* Jquery uses function expressions and first class functions!*/
//$('button').click(function(){
//    
//})

/* Callback function : A function you give to another function, to be run when the other function is finished */
//function tellMeWhenDone(callback){
//    var a = 1000;
//    var b = 2000;
//    
//    callback();
//}
//tellMeWhenDone(function(){
//    console.log('I am Done!');
//});


// CALL(), APPLY(), BIND()
/* Example */
//var person = {
//    firstname:'john',
//    lastname:'Doe',
//    getFullName: function(){
//        var fullname = this.firstname+' '+ this.lastname;
//        return fullname;
//    }
//}
//var logName = function(lang1, lang2){
//    console.log('Logged: '+ this.getFullName());
//    console.log('Arguments '+ lang1+' '+lang2);
//    console.log('-------------------');
//}

/* Bind function returns a new function copy of a function and when its execution context is created is see the bind function and decide the this keyword */
//var logPersonName = logName.bind(person);
//logPersonName('en');

/* Call invoce the function and all let as pass the this value and all pass the parameters unlike bind its run the function */
//logName.call(person, 'en', 'es');

/* Apply does the same as call but parameters are set in array */
//logName.apply(person, ['en','es']);

// Function borrowing
//var person2 = {
//    firstname: 'jane',
//    lastname: 'Doe'
//}
//console.log(person.getFullName.apply(person2));

//Function Currying
/* Function currying : creating a copy of a function but with some preset parameters */
//function multiply(a, b){
//    return a*b;
//}
//var multipleByTwo = multiply.bind(this,2);
//console.log(multipleByTwo(4));
































