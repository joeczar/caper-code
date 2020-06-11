var runners = document.getElementsByClassName('runner');
var donuts = document.getElementsByClassName('donut');

console.log(runners);
var ghost = 0,
    alien = 0,
    rider = 0,
    robot = 0;
var runPosArray = [ghost, alien, rider, robot];

function getRandomNum() {
    return Math.floor(Math.random() * 101);
}
function winnerCheck() {
    for (var i = 0; i < runners.length; i++) {
        if (
            runners[i].offsetLeft + runners[i].offsetWidth >=
            donuts[i].offsetLeft
        ) {
            console.log('GAME OVER!', runners[i].innerText, 'is the winner!');

            document.removeEventListener('keypress', game);
        }
    }
}

function game(e) {
    if (e.keyCode == 32) {
        for (var i = 0; i < runPosArray.length; i++) {
            runPosArray[i] += getRandomNum();
        }

        for (var i = 0; i < runners.length; i++) {
            runners[i].style.left = runPosArray[i] + 'px';
        }
        winnerCheck();
    }
}

document.addEventListener('keypress', game);

function randomRGB() {
    var RGB = [];
    for (var val in new Range(3)) {
        val = Math.floor(Math.random() * 256);

        RGB.push(val);
    }
    return RGB;
}
document.addEventListener('click', function (e) {
    var rgb = randomRGB();

    e.target.style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
});
