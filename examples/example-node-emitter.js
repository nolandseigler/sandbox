//they were all 'let' but i like const. but should it be let
const events = require('events');

const listenerCallback = (data) => {
    console.log('Celebrate ' + data);
}
const myEmitter = new events.EventEmitter;

myEmitter.on('celebration', listenerCallback);
myEmitter.emit('celebration', 'Party');