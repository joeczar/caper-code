/***
Write a function called each that accepts either an object or an array as its first parameter and a callback as its second parameter.

If the first parameter is an object, it should loop over the object's properties and call the callback for each one. The property value should be the first parameter passed to the callback and the property name should be the second.

If the first parameter is an array, it should loop over the array's elements and call the callback for each one. The array element should be the first parameter passed to the callback and the index should be the second.
 ***/

function each(objOrArr, fn) {
    if (objOrArr.isArray) {
        // How nescessary is this? According to what we learned on thursday (I believe) about accessing the Array methods, it would seem important, yet in this small example it seems overkill.
        for (var i = 0; i < objOrArr.length; i++) {
            fn(objOrArr[i], i);
        }
    } else {
        for (key in objOrArr) {
            fn(objOrArr[key], key);
        }
    }
}

each(
    {
        a: 1,
        b: 2,
    },
    function (val, name) {
        console.log('The value of ' + name + ' is ' + val);
    }
); // logs 'the value of a is 1' and 'the value of b is 2'

each(['a', 'b'], function (val, idx) {
    console.log('The value of item ' + idx + ' is ' + val);
}); // logs 'the value of item 0 is a' and 'the value of item 1 is b'

/***

Write a function that takes an array as a parameter and returns a new array containing all of the items that are in the array that was passed in but in reverse order. Unlike the reverse method that all arrays have, this function should leave the original array unchanged.

***/
function reverseArr(arr) {
    var reversed = [];
    for (var i = 0; i < arr.length; i++) {
        reversed.unshift(arr[i]);
    }
    return reversed;
}

var nums = [1, 2, 3, 4, 5, 6];

var reversed = reverseArr(nums);
console.log(nums, reversed);

/***

Write a function called getLessThanZero that expects an array of numbers to be passed to it and returns a new array containing only those numbers from the array that was passed in that are less than zero.

***/
function getLessThanZero(arr) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(
    getLessThanZero([1, 2, -1, -90, 10]), //[-1, -90]
    getLessThanZero([1, 2]) //[]
);
