var outer = document.getElementById('outer');
var inner = document.getElementById('inner');

outer.addEventListener('click', function (e) {
    event.stopPropagation();
    changeColor(e);
});

function randomRGB() {
    var rgb = [];
    for (var val in new Range(3)) {
        val = Math.floor(Math.random() * 256);  
        rgb.push(val);
    }
    return rgb;
}

function changeColor(e) {
    var color = randomRGB();
    e.target.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
}
