(function () {
    // Get links
    $.ajax({
        url: '/links.json',
        method: 'GET',
        success: function (response) {
            var html = '';
            for (var i = 0; i < response.length; i++) {
                var link =
                    '<a id="link_' +
                    i +
                    ' href="' +
                    response[i].link +
                    '" >⛧ ' +
                    response[i].headline +
                    ' ⛧</a>';
                html += link;
            }
            $('#headlines').html(html);
            tick()
            
        },
        error: function (err) {
            console.log('Ajax Error:', err);
        },
    });

    function tick() {
        var headlines = $('#headlines');
        var links = headlines.find('a')
        var left = headlines.offset().left;

        // Bottom Ticker
        var bHeadlines = $('#bottomHeadlines');
        var bLinks = bHeadlines.find('A');
        var bLeft = bHeadlines.offset().left;

        var lastLink = bLinks.length - 1;
        var wWidth = $(window).width();

        var pentagram = $('#pentagram');
        var step;
        var degrees = 0;

        // top event listeners
        headlines.on('mouseover', function (e) {
            $(e.target).css({ color: 'red' });
            cancelAnimationFrame(step);
        });
        headlines.on('mouseout', function (e) {
            $(e.target).css({
                textDecoration: 'none',
                color: 'white',
            });
            window.requestAnimationFrame(moveHeadlines);
        });

        var count = 0;
        function moveHeadlines() {
            left--;

            var width = links.eq(count).outerWidth();

            // move top headlines
            if (left <= -width) {
                left += width;
                // headlines.css({ left: left + 'px' })
                
                headlines.append(links.eq(count));
                count++;
                if (count > links.length - 1) {
                    count = 0;
                }
            }
            // move bottom headlines
            // get last link

            headlines.css({ left: left + 'px' });
            step = window.requestAnimationFrame(moveHeadlines);
        }
        step = window.requestAnimationFrame(moveHeadlines);
    }
})();
