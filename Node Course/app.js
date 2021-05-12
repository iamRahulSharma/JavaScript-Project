
// whenever import a module with the require(), always use const
const logger = require('./logger');


function sayHello(name) {

    console.log('Hello, ' + name);

}

sayHello('Rahul Sharma');

console.log(); //global

/* In browser, window is the global object which contains setTimeout(), setInterval(), console object
   But In node, window object is replaced by the "global" object like

   1. window.console.log() -> global.console.log()
   2. window.setTimeout() -> global.setTimeout()

 */

// Node Module System

// module is a global object (not like global.module) having the 

console.log(module);


// 

console.log(logger('Starting the app.js')); 

// Module wrapper function

// functioin (exports, require, module, __filename, __dirname)