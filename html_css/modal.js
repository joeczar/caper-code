(function() {
    var shroud = $('#overlay')
    var modal = $('#modal')
    var x = $('#xWrapper')
    
    setTimeout(showModal, 1000)
    function showModal() {
        shroud.addClass('overlay-on')
        modal.removeClass('hideModal');
        modal.addClass('showModal')
    }
    x.on('click', function(e) {
        shroud.addClass('overlay-off')
        shroud.removeClass('overlay-on')
        modal.addClass('hideModal')
        modal.removeClass('showModal')
        
    })
})();
