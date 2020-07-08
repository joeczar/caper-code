module.exports = (n) =>
    new Promise((rslv, rjct) =>
        setTimeout(
            () => (isNaN(n) ? rjct(new Error('Bad number')) : rslv(n * 2)),
            2000
        )
    );
