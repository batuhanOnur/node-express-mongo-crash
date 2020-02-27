const EventEmitter = require('events');

// Create class
class MyEmitter extends EventEmitter { };

// Inıt object
const myEmitter = new MyEmitter();

// Event Listener
myEmitter.on('event', () => console.log('event fired'));

// Inıt event
myEmitter.emit('event');