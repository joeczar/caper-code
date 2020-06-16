console.log($);
var container = $('#container');
var slider = $('#slide');
var topImg = $('#topImage')
console.log(container);

container.on('mousedown', function (e) {
    var target = $(e.target);
    if (target[0].id === 'slide') {
        container.mousemove(slidey);
    }
});
container.mouseup(function(e) {
    container.off('mousemove', slidey);
})
function slidey(e) {
    if (e.clientX < 600) {
        slider.css({
            left: e.clientX - 15 + 'px',
        });
        topImg.css({
            width: e.clientX - 15 + 'px',
        });
    }
}
