(function() {
    var kitties = document.getElementById('carousel').getElementsByTagName('img');
    console.log(kitties);
    
    var cur = 0;

    document.addEventListener('transitionend', function(e) {
        if (e.target.classList.contains('exit')) {
            e.target.classList.remove('exit');
            setTimeout(moveKitties, 5000);
        }
        
    })

    setTimeout(moveKitties, 5000);

    function moveKitties() {
        // remove onscreen from "cur" and add exit;
        kitties[cur].classList.remove('show')
        kitties[cur].classList.add('exit');
        console.log(cur);
        
        cur++;
        if (cur >= kitties.length) {
            cur = 0;
        }
        kitties[cur].classList.add('show')
        

    }
    // transitionend event
    
})();