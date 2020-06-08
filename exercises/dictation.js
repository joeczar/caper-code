var x;
var xx;

x = 999;

function timesTwo(n) {
    return n * 2;
}

xx = timesTwo(x);

var numbers;

numbers = [x, xx];

for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

numbers = [];

numbers = {};

numbers.y = xx;
