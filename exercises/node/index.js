// callbacks
function first(callback) {
    setTimeout(() => {
        console.log('First!');
        callback();
    }, 2000);
}
function second(callback) {
    setTimeout(() => {
        console.log('second!');
        callback();
    }, 1000);
}
function third() {
    console.log('Third!');
}
// first(function () {
//     console.log('I log after first');
// });
// second(function () {
//     console.log('I log after second.');
// });
// third();
first(() => {
    second(() => {
        third();
    });
});
