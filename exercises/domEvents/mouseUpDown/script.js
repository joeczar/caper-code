var sq = document.getElementById('mouse');

sq.addEventListener('mousedown', changeColor);
sq.addEventListener('mouseup', changeColor);

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
    sq.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
}
