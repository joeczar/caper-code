/* 
    Write a function that takes an array as an argument and returns a new array containing all of the items that are in the array that was passed in but in reverse order. This function should

        leave the original array unchanged

        contain no loops of any kind. That includes for, for...in, for...of, while, and do...while

        not call slice or any other method on the original array

        not call push or concat on any array in any way
*/

const reverseArr = (arr) => [...arr].reverse();

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(reverseArr(nums), nums);

/*
    Write a function that takes two arrays as arguments and returns a new array containing all of the items in the two arrays passed to it. This function should

        leave the original arrays unchanged

        contain no loops of any kind. That includes for, for...in, for...of, while, or do...while

        not call slice or any other method on the two arrays passed to it

        not call push or concat on any array in any way
*/

const concatArrays = (arr1, arr2) => [...arr1, ...arr2];

const numbers = ["one", "two", "three", "four", "five", "six"];

const concatinated = concatArrays(nums, numbers);

console.log(concatinated, nums, numbers);

/*
    Rewrite the following function to use destructuring assignment for the three variables it creates:
*/
function logInfo({ name, country, population }) {
    console.log(`${name} is in ${country} and has ${population} in it.`);
}

/*
    The three highlighted lines should be replaced with a single line.

    Pretend that it is 2002 and rewrite the following hipster Javascript so it will work in Internet Explorer 5 and Netscape 4.
*/
let getNameAndCountry = ({ name, country }) => [name, country];

let getRelocatedCity = (city1, city2 = { country: "Germany" }) => {
    let [, country] = getNameAndCountry(city2);
    return {
        ...city1,
        country,
    };
};

var city2 = { name: "Berlin", country: "Germany" };
var city1 = { name: "Longmont", country: "USA" };

function gatNameAndCountryOld(person) {
    return [person.name, person.country];
}
function getRelocatedCityOld(city1, city2) {
    if (typeof city2 == "undefined") {
        city2 = { country: "Germany" };
    }
    var country = gatNameAndCountryOld(city2)[1];

    return {
        name: city1.name,
        country,
    };
}
const es6NameAndCountry = getNameAndCountry(city1);
var oldNameAndCountry = gatNameAndCountryOld(city2);
const es6RelocatedCity = getRelocatedCity(city1);
var oldRelsocatedCity = getRelocatedCityOld(city1);

console.log({
    es6NameAndCountry,
    oldNameAndCountry,
    es6RelocatedCity,
    oldRelsocatedCity,
});
