const { getAlbumNames } = require('./albums');
const spotify = require('./spotify');

// jest.mock('./spotify');
getAlbumNames('meat loaf')
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
