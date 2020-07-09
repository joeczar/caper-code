module.exports = function fn(arg) {
    if (typeof arg === 'string') {
        const result = arg.split('').reverse().join('');
        return result;
    } else if (typeof arg !== 'string' && !Array.isArray(arg)) {
        return null;
    } else {
        return arg.map((elem) => fn(elem));
    }
};
