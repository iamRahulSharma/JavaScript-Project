// More Node Module

// We will learn about the "path" 

// importing the path module
const path = require('path');

// Using the path parse method, To get the some information related the file path given by the user
var pathParseObj = path.parse(__filename);

// printing out the path.parse object with the respective properties and method
console.log(pathParseObj);