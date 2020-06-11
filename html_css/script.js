(function() {
    var hamburger = document.getElementById('hamburger');
    var overlay = document.getElementById('overlay');
    var menu = document.getElementById('menu')
    var x = document.getElementById('x');
    console.log(overlay);
    
    hamburger.addEventListener('click', function() {
         menu.classList.add('menu-open');
         overlay.classList.add('overlay-on')
    })
    x.addEventListener('click', function() {
        menu.classList.remove('menu-open');
        overlay.classList.remove('overlay-on');
    });

    function toggleClass() {
        
    }
    
    
    


})();