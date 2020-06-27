const emitter = require('events');

const emi = new emitter();

emi.on('do', () => {
    console.log('done');
    
});
emi.on('do', () => {
    console.log('tryin to get it done');
});
emi.emit('do');