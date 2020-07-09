const { getAlbumNames } = require('./albums');
const spotify = require('./spotify');

jest.mock('./spotify');
spotify.search.mockResolvedValue({
    albums: {
        items: [
            {
                name: 'Bat Out of Hell',
            },
            {
                name: 'Bat Out Of Hell II: Back Into Hell',
            },
            {
                name: 'Dead Ringer',
            },
        ],
    },
});

test('album names are in alphabetical order', () => {
    spotify.search.mockResolvedValue;
    return getAlbumNames('meat loaf').then((albumNames) => {
        expect(albumNames).toEqual(albumNames.sort());
    });
});
