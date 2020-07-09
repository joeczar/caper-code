module.exports.dbl = (n) =>
    new Promise((rslv, rjct) =>
        setTimeout(
            () => (isNaN(n) ? rjct('Bad number') : rslv(n * 2)),
            2000
        )
    );
