const countries = require('./countries');
const chars = ['a', 'fa', 'b', 'z', 'hi', 's'];
const gibberish = [
    'asdfa',
    'pojhnk',
    'ponchovilla',
    'santamaria',
    'conquistodoro',
];

function emptyArrayTest(res) {
    return Array.isArray(res) && res.length === 0;
}

test('if an empty string passed to countries.find it returns an empty array', () => {
    const result = countries.find('');

    expect(emptyArrayTest(result)).toBe(true);
});

test('countries.find returns no more than four matches', () => {
    const chars = ['a', 'fa', 'b', 'z', 'hi', 's'];
    chars.forEach((test) =>
        expect(countries.find(test).length <= 4).toBe(true)
    );
});

test('countries.find returns the same results regardless of case', () => {
    chars.forEach((test) => {
        const cap = test.toUpperCase();
        expect(countries.find(test).toString()).toBe(
            countries.find(cap).toString()
        );
    });
});

test('if no countries match the search, an empty array is returned', () => {
    gibberish.forEach((test) => {
        const res = countries.find(test);
        expect(emptyArrayTest(res)).toBe(true);
    });
});
