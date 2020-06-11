(function () {
    var canvas = document.getElementById('inner');
    var ctx = canvas.getContext('2d');

    var outerCanvas = document.getElementById('outer');
    var outerCtx = outerCanvas.getContext('2d');

    var posX = 100;
    var posY = 100;

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
    // I had big plans for this guy, but I'm just too beat

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

    outerCtx.drawImage(canvas, posX, posY);

    document.addEventListener('keydown', function (e) {
        // right = 39 left = 37 up = 38 down = 40

        if (e.keyCode === 39) {
            posX++;
        } else if (e.keyCode === 37) {
            posX--;
        } else if (e.keyCode === 38) {
            posY--;
        } else if (e.keyCode === 40) {
            posY++;
        }

        outerCtx.clearRect(0, 0, outerCanvas.width, outerCanvas.height);
        outerCtx.drawImage(canvas, posX, posY);
    });
})();
