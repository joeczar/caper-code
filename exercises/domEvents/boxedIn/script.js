var outer = document.getElementById('outer');
var inner = document.getElementById('inner');

outer.addEventListener('click', function (e) {
    changeColor(e);
});

function randomRGB() {
    var RGB = [];
    for (var val in new Range(3)) {
        var val = Math.floor(Math.random() * 256);
        RGB.push(val);
    }
    return RGB;
}

function changeColor(e) {
    var color = randomRGB();
    e.target.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
}
