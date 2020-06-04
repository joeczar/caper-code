function logType(input) {
    var type = typeof input;
    var typeArr = ['number', 'string', 'boolean', 'bigint', 'object'];
    function log(data) {
        console.log('"' + data + '!' + '"');
    }

    if (input === null) {
        log(input);
    } else if (input === undefined) {
        log(input);
    } else if (Number.isNaN(input)) {
        log(input);
    } else if (typeArr.includes(type)) {
        log(type);
    }
     else {
        log('I have no ideas');
    }
}
console.log(
    logType(),
    logType(10),
    logType('string'),
    logType(NaN),
    logType(Symbol('💩'))
);


var a = {
    Berlin: 'Germany',
    Paris: 'France',
    'New York': 'USA',
};

var b = {};

function keyValueSwitcher(obj1, obj2) {
    // take an object and creat a new object with keys & values switched
    for (key in obj1) {
        obj2[obj1[key]] = key;
    }
}
keyValueSwitcher(a, b);

for (var i = 10; i > 0; i--) {
    console.log(i);
}
