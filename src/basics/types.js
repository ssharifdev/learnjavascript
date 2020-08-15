// what are the different types in javascript

/* 
    // Primitive types
    Boolean  // true | false
    Number  // 1, 1.0
    String  // "a" | 'a'
    Null // null
    Undefined  // undefined
    
    Object  // {} | new Object()
*/

// Check the type of variable

//typeof(variable)

typeof(1)  // "number"

typeof('a') // "string"

typeof(true) // "boolean"

typeof(undefined)  //  "undefined"

typeof(null)  // "object"

typeof({}) // object



// what is the type of Nan

 typeof(NaN) // "number"

 "abc"/4 // NaN

 NaN == 1 // false

 NaN == false // false

 NaN == NaN // false

 isNaN(NaN) // true

 isNaN(1) // false

 isNaN("1") // false

 isNaN("A") // true  // in depth javascript is coercion Number("A") => NaN


var a = NaN

a !== a // true

var a = 1

a !== a // false

var a = "a"

a !== a // false


