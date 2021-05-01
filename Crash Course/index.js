// First JS program to print 'Hello World' in the console

console.log('Hello World');


// Variables in JS

// Before ES6, var keyword is use to delcare the variable 

var before_es6 = 'var keyword variable';
console.log(before_es6);

// After ES6, we get two more mode to delcare the variable

// 1. let keyword

let let_var = 'let keyword variable';
console.log(let_var);

// 2. const keyword

const const_var = 'const keyword variable';
console.log(const_var);

// Primitive Data Types

// 1. Numbers

let num = 10;
console.log(num + ':-' + typeof num + ' Data type');

// 2. String

let string = 'Hello World';
console.log(string + ':-' + typeof string + ' Data type');

// 3. Boolean

let boolean = true;
console.log(boolean + ':-' + typeof boolean + ' Data type');

// 4. undefined

let var_undefined;
console.log(var_undefined + ':-' + typeof var_undefined + ' Data type');

// 5. null

let null_var = null;
console.log(null_var + ':-' + typeof null_var + ' Data type');



// Dynamic Typing

// JS is a dynamic lang, you can change the type of the data assigned to a JS variable

// Right now, delcaring a variable having the number type value
let dyn_var = 10;
console.log('[Before dynamic assignment] dyn_var = ' + dyn_var + ':-' + typeof dyn_var + ' Data type');

// Now, we will change the dyn_var to the string type
dyn_var = 'Hello World';
console.log('[After dynamic assignment] dyn_var = ' + dyn_var + ':-' + typeof dyn_var + ' Data type');


// Reference types

// 1. Object
//     So, Object is a reference data type which is similiar to the real-world object 
//     Like a person, a person have a name, address, phone no .. so on

let person = {

    name: 'Rahul Sharma',
    age: 23

}
console.log(person);

// To change the object property value, There are two ways

// i. Dot notation 

person.name = 'Sachin Sharma';
console.log(person);

// ii. Bracket Notation

person['name'] = 'Pushpa Sharma';
console.log(person);


// 2. Arrays 

let arr = ['Rigid PCB', 'Rigid Flex PCB', 'Flex PCB'];
console.log(arr);

// To access an elment, we can use bracket notation with the index position
console.log(arr[0]);

// To expand the array, we can use bracket notation providing the index position to change
arr[3] = 'Stencil';
console.log(arr);

// we can assign different data type in a array
arr[4] = 10;
console.log(arr);


// 3. Function
//         Function are a building block of any programming language
//         It is the set of statement which will execute whenever you call the function

function greet() {

    console.log("Welcome to the JS Function");

}

greet();

