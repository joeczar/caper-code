const Countdown = require('./countdown');

const countdown = new Countdown(10);
// console.log(countdown);

countdown.on('secondElapsed', function (timeLeft) {
        
    if (timeLeft > 0) {
        console.log(timeLeft);
    } else {
        console.log('lift off!');
    }
});
countdown.emit('secondElapsed', countdown.interval)