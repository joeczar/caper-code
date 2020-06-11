var canvas = document.getElementById('inner');
var ctx = canvas.getContext('2d');

var outerCanvas = document.getElementById('outer');
var outerCtx = outerCanvas.getContext('2d');

outerCtx.drawImage(canvas, 0, 0, 300, 355, 21, 20, 87, 104);

document.addEventListener('keydown', function (e) {
    // right = 39 left = 37 up = 38 down = 40
    // just don't have it in me today....
});

ctx.strokeStyle = 'black';
ctx.lineWidth = '3px';
ctx.moveTo(canvas.width / 2, 25);

var middle = canvas.width / 2;
var headCenter = 75;
var bodyTop = headCenter + 50;
var bodyBase = 250;
var head = circle(middle, headCenter, 50);
var body = line(middle, bodyTop, middle, bodyBase);
var leftArm = line(middle, 175, middle - 100, 100);
var rightArm = line(middle, 175, middle + 100, 100);
var leftLeg = line(middle, bodyBase, middle - 100, bodyBase + 100);
var rightLeg = line(middle, bodyBase, middle + 100, bodyBase + 100);

function circle(x, y, radians) {
    ctx.beginPath();
    ctx.arc(x, y, radians, 0, Math.PI * 2);
    ctx.stroke();
}
function line(beginX, beginY, endX, endY) {
    ctx.beginPath();
    ctx.moveTo(beginX, beginY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
    ctx.closePath();
}
