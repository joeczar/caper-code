(function() {
    // Top Ticker
    var headlines = $('#headlines');
    var links = headlines.find('A');
    var left = headlines.offset().left;

    // Bottom Ticker
    var bHeadlines = $('#bottomHeadlines');
    var bLinks = bHeadlines.find('A');
    var bLeft = bHeadlines.offset().left;
    
    var lastLink = bLinks.length - 1;
    var wWidth = $(window).width()

    var pentagram = $('#pentagram')
    var step;
    var degrees = 0;

    // top event listeners
    headlines.on('mouseover', function(e) { 
        $(e.target).css({ color: 'red', })
        cancelAnimationFrame(step);
    })
    headlines.on('mouseout', function(e) {
        $(e.target).css({ 
            textDecoration: 'none',
            color: 'white', 
        });
        window.requestAnimationFrame(moveHeadlines);
    })
    
    function moveHeadlines() {
        left--;
        bLeft++;
        // move top headlines
        if (left <= -links.eq(0).outerWidth()){
            left += links.eq(0).outerWidth();
            headlines.css({ left: left + 'px' })
            headlines.append(links.eq(0));
           
        }
        // move bottom headlines
        // get last link
        console.log((bHeadlines.width()) - wWidth);
        if (bLeft >= bLinks.eq(lastLink).outerWidth()) {
            bLeft -= bLinks.eq(lastLink).outerWidth();
            bHeadlines.css({
                left: bLeft + 'px',
            });
            bHeadlines.prepend(bLinks.eq(lastLink))
        }
        
       
        bHeadlines.css({
            left: bLeft + 'px',
        });
        headlines.css({'left': left + 'px' });
        step = window.requestAnimationFrame(moveHeadlines);
    }
    step = window.requestAnimationFrame(moveHeadlines);
    
})();