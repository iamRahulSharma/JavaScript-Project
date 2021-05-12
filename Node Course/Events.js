// Events Node Module

// Events : A signal that something has happened

// EventEmitter is a class
const EventEmitter =  require('events');

// emitter is a object
const emitter = new EventEmitter();

// Register a listener
emitter.on('messageLogged', function(arg) {

    console.log('Listener called', arg);

});


// emit meaning = making a noise
// Raise an event
emitter.emit('messageLogged', { id:1, url: 'https://www.google.com' });
