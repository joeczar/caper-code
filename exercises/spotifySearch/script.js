(function () {
    var url = "https://spicedify.herokuapp.com/spotify";
    var container = $("#results-container");
    var input;

    $("#go").on("click", function (e) {
        input = getUserInput();
        spicedifyRequest(url, input[0], input[1]);
    });

    function getUserInput() {
        var input = $("input[name=user-input]").val();
        var albumOrArtist = $("select").val().toLowerCase();
        return [input, albumOrArtist];
    }

    function spicedifyRequest(url, query, type) {
        $.ajax({
            url: url,
            method: "GET",
            data: {
                query: query,
                type: type,
            },
            success: function (response) {
                response = response.artists || response.albums;
                updatePage(response);
                getNextUrl(response);
                // return response;
            },
            error: function (err) {
                console.log(err);
            },
        });
    }

    function updatePage(response) {
        var responseHtml = "";
        if (response.items.length === 0) {
            responseHtml =
        '<span id="noResults">No results for ' + input[0] + "</span>";
            container.html(responseHtml);
        } else {
            responseHtml +=
        '<h1 id="responseHeader">Results for ' + input[0] + "</h1>";
        }

        for (var i = 0; i < response.items.length; i++) {
            var url = response.items[i].external_urls.spotify;
            var name = response.items[i].name;
            var img = response.items[i].images[0]
                ? response.items[i].images[0].url
                : "https://www.svgrepo.com/show/55272/spotify.svg";
            responseHtml +=
        '<div class="items"><a href="' +
        url +
        '" target="blank"><div class="imgWrapper"><img src="' +
        img +
        '"></div><div class="itemName">' +
        name +
        "</div></div>";
        }
        container.html(responseHtml);
       
    }

    function getNextUrl(response) {
        var nextUrl =
      response.next &&
      response.next.replace(
          "api.spotify.com/v1/search",
          "spicedify.herokuapp.com/spotify"
      );
        if (nextUrl) {
            nextResultsBtn(nextUrl, response);
        }
    }
    function nextResultsBtn(url, response) {
        var btn =
      '<button id="next">More</button><span id="howMany">Showing ' +
      response.offset +
      " - " +
      (response.limit + response.offset) +
      " of " +
      response.total +
      "</span>";
        container.append(btn);
        $("#results-container").on("click", "button", function (e) {
            spicedifyRequest(url, input[0], input[1]);
        });
    }
})();
