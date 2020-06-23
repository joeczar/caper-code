(function () {
    $('#go').on('click', function (e) {
        var input = $('input[name=user-input]').val();
        var albumOrArtist = $('select').val();
        var url = 'https://spicedify.herokuapp.com/spotify';

        console.log(albumOrArtist);
        spicedifyRequest(url, input, albumOrArtist);
        
    });

    function spicedifyRequest(url, query, type) {
        console.log(type.toLowercase(), typeof type);
        
        $.ajax({
            url: url,
            method: 'GET',
            data: {
                query: query,
                type: type.toLowercase(),
            },
            success: function (response) {
                response = response.artists || response.albums;
                updatePage(response);
                // return response;
            },
            error: function (err) {
                console.log(err);
            },
        });
    }
    function updatePage(response) {
        console.log(response);
        
        var responseHtml = '';
        for (var i = 0; i < response.items.length; i++) {
            console.log(response.items[i]);

            var url = response.items[i].external_urls.spotify;
            var name = response.items[i].name;
            var img = response.items[i].images[0]
                ? response.items[i].images[0].url
                : 'https://www.svgrepo.com/show/55272/spotify.svg';
            responseHtml +=
                '<div><a href="' +
                url +
                '" target="blank"><img src="' +
                img +
                '">' +
                name +
                '</div>';
        }
        $('#results-container').html(responseHtml);

        var nextUrl =
            response.next &&
            response.next.replace(
                'api.spotify.com/v1/search',
                'spicedify.herokuapp.com/spotify'
            );
        console.log(nextUrl);
    }
})();
