function* generateFizzBuzz() {
    for (let i = 0; i < 100; i++) {
        if (i % 3 === 0) {
            if (i % 5 === 0) {
                yield "fizzBuzz";
            } else {
                yield "fizz";
            }
        } else if (i % 5 === 0) {
            yield "buzz";
        }
        yield i;
    }
}

for (const num of generateFizzBuzz()) {
    console.log(num);
}

function* reverseGenerator(arr) {
    const popme = [...arr];
    for (let i = 0; i < arr.length; i++) {
        if (arr.length == 0) {
            return { done: true };
        } else {
            yield popme.pop();
        }
    }
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const elem of reverseGenerator(nums)) {
    console.log({ elem });
}

function makeWierdArray() {
    const arr = [...arguments];

    arr[Symbol.iterator] = function* () {
        // I tried .reverse() but it wouldn't wouk...
        const reversed = [];
        for (let i = arr.length - 1; i >= 0; i--) {
            const elem = arr[i];
            reversed.push(elem);
        }

        yield reversed;
    };
    return arr;
}
const wierd = makeWierdArray(10, 20, 30);
const wierder = [...wierd];
console.log(wierd);
console.log(wierder);
