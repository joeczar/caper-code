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
    for (let i = 0; i < arr.length; i++) {
        if (arr.length == 0) {
            console.log("done");

            return { done: true };
        } else {
            var popped = arr.pop();
            console.log({ arr, popped, length: arr.length });

            yield popped;
        }
    }
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const elem of reverseGenerator(nums)) {
    console.log({ elem });
}
