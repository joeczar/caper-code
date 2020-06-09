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

(function(){
    console.log(document.getElementsByClassName('headlines'));
    var headlines = document.getElementById('headlines');
    console.log(`headlines:`, headlines);
    var links = headlines.getElementsByTagName('A');
    var left = headlines.offsetLeft;

    function moveHeadlines(x) {
        left--;
        if (left <= -links[0].offsetWidth) {

        }
        window.requestAnimationFrame(moveHeadlines);
    }
    moveHeadlines();
})();
