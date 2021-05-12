// File System Node 

const fs = require('fs');

// readdirSync will be execution in async nature

const files = fs.readdirSync('./');

console.log(files);

// readdir will be executed in async nature

fs.readdir('./', function(err, files) {

    if (err) console.log('Error :', err);
    else console.log('Result :', files); 
})