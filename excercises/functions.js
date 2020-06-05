// Write a function that takes any number of numbers as arguments and returns the sum of those numbers.

function sum(nums) {
    var acc = 0;
    for (arg in arguments) {
        acc = arguments[arg] + acc;
    }
    return acc;
}
console.log(
    sum(5, 10), //15

    sum(5, 10, 15), //30;

    sum(5, 10, 15, 100, 200) //330
);

//Write a function that takes another function as an argument. It should wait 1.5 seconds and then run the function that was passed in.
function waitThenRun(fn) {
    setTimeout(function () {
        fn();
    }, 1500);
}

waitThenRun(function () {
    console.log('Hello!');
    waitThenRun(function () {
        console.log('Goodbye!');
    }); // logs 'Goodbye!' 1.5 seconds later
}); // logs 'Hello!' 1.5 seconds later

// Write a function that expects a number as an argument. If the value that is passed in is less than 0, equal to 0, or not a number, the function should return the string 'ERROR'. If the number that is passed in is greater than or equal to 1000000 it should simply return the number. Otherwise it should multiply the number by 10 however many times it takes to get a number that is greater than or equal to 1000000 and return that.
function millions(num) {
    if (num <= 0) {
        return 'ERROR'
    }else if (num >= 1000000) {
        return num;
    } else {
        while (num < 1000000) {
            num = num * 10;
        }
        return num;
    }
}
console.log(millions(23), millions(1000000));
// Write a function that returns a function that can be called repeatedly and passed a number each time. Each time it is called it should return the sum of the number that is passed in and all other numbers that were passed in previous calls. That is, it should return the sum of all the numbers that were ever passed to it.
function getTotaler() {
    var acc = 0;
    return function (num) {
        acc = num + acc;
    };
}
var totaler = getTotaler();

console.log(
    totaler(1), //1
    totaler(2), //3
    totaler(5) //8
);
