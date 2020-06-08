/*
    Write a constructor called Rectangle that accepts two numbers (width and height) as parameters. Rectangle instances should have a method called getArea that returns the instance's width multiplied by its height. Write another constructor called Square that accepts one number (which will serve as both width and the height) as a parameter. Instances of Square should also have a getArea method but you should not rewrite the getArea function you wrote for Rectangle. Square instances should use the same getArea method that Rectangle instances do.
*/

function Rectangle(w, h) {
    this.width = w;
    this.height = h;
    this.getArea = function () {
        return this.width * this.height;
    };
}

function Square(s) {
    return new Rectangle(s, s);
} // I feel like I should have used call or apply here
// but I couldn't do that and use the test arguments given.

var square = new Square(4);
square.getArea(); //16

var rect = new Rectangle(4, 5);
rect.getArea(); //20

console.log(square, square.getArea(), '\n', rect, rect.getArea());
/* 
    Write a function called invertCase that expects a string as a parameter. This function should return a new string with all the same characters as the string that was passed in but with the cases of the alphabetic characters switched. Uppercase characters should become lowercase and lowercase letters should become uppercase. Characters that are not alphabetic should not change. The toUpperCase and toLowerCase methods that all strings have will come in handy here.
*/

function invertCase(string) {
    var strArr = string.split('');
    console.log(strArr);

    return strArr
        .map((char) => {
            return char === char.toUpperCase()
                ? (char = char.toLowerCase())
                : (char = char.toUpperCase());
        })
        .join('');
}

console.log(invertCase('AllIWannaDo'));

/*
    Write a constructor called Countdown that accepts a single argument - the number of seconds to count down. It should be possible to call the start method of instances of Countdown to initiate the countdown. Once the countdown starts, it should count down to zero starting with the number that was passed to the constructor and logging each number to the console with a one second delay.

It's the final countdown
*/

function Countdown(n) {
    this.steps = n;
    this.timeout = function() {
        setTimeout(function() {
            console.log(this.steps);
            this.steps--;
            if ( this.steps > 0) {
                this.start();
            }
        }.bind(this), 1000)
    }
    
    this.start = function() {
        if (this.steps > 0) {
            this.timeout();
            
        }
    };
}

var five = new Countdown(5);
console.log(five.start());
