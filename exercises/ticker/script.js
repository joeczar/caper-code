/*
        Javascript

       1. Variables to store

            the element we want to move (the link container)

            the left position of the element to move

            the collection of links in the the element to move

       2. Main animation function

            decrements the current left position

                determine if the new left position is so low that the first link is entirely of screen and if it is

                    add to the current left position the width of the first link (which is about to become the last link)

                    take the first link out and make it the last link

            moves the link container to the new left position

            passes itself to requestAnimationFrame

    Call your animation function to kick the whole thing off

*/
(function () {
    var headlines = document.getElementById('headlines');
    var links = headlines.getElementsByTagName('A');
    var left = headlines.offsetLeft;
    var step;



    headlines.addEventListener('mouseover', function (e) {
         e.target.style.cssText =
             'color:red;';
        cancelAnimationFrame(step);
    });
    headlines.addEventListener('mouseout', function(e){
         e.target.style.cssText = 'textDecoration:none;color:white;'
         window.requestAnimationFrame(moveHeadlines);
    })

    function moveHeadlines() {
        left--;
        // console.log(left, links[0].offsetWidth);
        if (left < -links[0].offsetWidth) {
            left += links[0].offsetWidth;
            headlines.style.left = left + 'px';
            headlines.appendChild(links[0]);
        }
        headlines.style.left = left + 'px';

       step = window.requestAnimationFrame(moveHeadlines);
    }
    step = window.requestAnimationFrame(moveHeadlines);
})();
