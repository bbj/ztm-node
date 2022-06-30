const EventEmitter = require("events");
const celebrity = new EventEmitter();

//Subscribe to celebrity for Observer 1
celebrity.on('race', (result) => {
    if (result === 'win') {
        console.log("Congratulation! You are the best!");
    }
});

//Subscribe to celebrity for Observer 2 (competitor)
celebrity.on('race', (result) => {
    if (result === 'lost') {
        console.log("Boo! I could have done better!");
    }
});

celebrity.emit('race','win');
celebrity.emit('race','lost');
celebrity.emit('race','win');

//process is itself an EventEmitter
process.on('exit', (code) => { //0 if no error
    console.log('Process exit event with code: ', code);
});