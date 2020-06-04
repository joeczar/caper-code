function logType(input) {
    var type = typeof input;

    function log(data) {
        console.log('"' + data + '!' + '"');
    }

    if (input === null) {
        log(input);
    } else if (input === undefined) {
        log(input);
    } else if (Number.isNaN(input)) {
        log(input);
    } else if (type === 'number') {
        log(type);
    } else if (type === 'string') {
        log(type);
    } else if (type === 'boolean') {
        log(type);
    } else if (type === 'bigint') {
        log(type);
    } else if (type === 'function') {
        log(type);
    } else if (Array.isArray(input)) {
        log('array');
    } else if (type === 'object') {
        log(type);
    } else {
        log('I have no idea');
    }
}

logType();

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
