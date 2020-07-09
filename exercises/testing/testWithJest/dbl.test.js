const { dbl } = require('./dbl');

test('dbl returns the argument times two', () => {
    return dbl(2).then((n) => {
        expect(n).toBe(4)
    })
})

test('dbl returns the string "Bad number" when we pass a string', () => {
    return dbl('cupcake').catch((err) => {
        expect(err).toBe('Bad number');
    })
})