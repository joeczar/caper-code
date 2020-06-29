/* 
    When a countdown instance is created, it should emit a secondElapsed event every second until it gets to zero, passing the current number of seconds remaining to any listeners that have been added
*/

const events = require("events");

module.exports = class Countdown extends events.EventEmitter {
    constructor(num) {
        super();
        this.timeLeft = num;

        this.interval();
    }
    interval() {
        const int = setInterval(() => {
            if (this.timeLeft < 0) {
                clearInterval(int);
                return 0;
            }
            this.emit("secondElapsed", this.timeLeft--);
            // this.timeLeft--;
        }, 1000);
    }
};
