console.log('sanity', $);

// var board = document.getElementById('board');
var jqBoard = $('#board') // css type syntax. class would be $(.class)

// var animals = document.getElementsByClassName('animal');
var jqAnimals = $('.animal')
var animalsLeft = [0, 0, 0, 0];


function getRandomNumber(num) {
    return Math.floor(Math.random() * num);
}

// board.addEventListener('click', function () {
//     for (var i = 0; i < animalsLeft.length; i++) {
//         animalsLeft[i] += getRandomNumber(21);
//         animals[i].style.left = animalsLeft[i] + 'px';
//     }
// });

// jQ event listeners
jqBoard.on('click', function() {
    console.log('clicked on board');
    for (var i = 0; i < animalsLeft.length; i++) {
        
        animalsLeft[i] += getRandomNumber(21);
        jqAnimals.eq(i).css({
            left: animalsLeft[i] + 'px',
        });
    }
})

// document.getElementById('boost-button').addEventListener('click', function (e) {
//     console.log('clicked on boost button!');
//     e.stopPropagation();

//     animalsLeft[0] += 20;
//     animals[0].style.left = animalsLeft[0] + 'px';
// });

$('#boost-button').on('click', function(e) {
    console.log('clicked on boost button!');
    e.stopPropagation();
    
    animalsLeft[0] += 20;

    // jqAnimals.eq(0).toggle(500);
    // jqAnimals.eq(0).hide(500).show(500);
    jqAnimals.eq(0).fadeOut(500).fadeIn(500);
    jqAnimals.eq(0).css({
        left: animalsLeft[0] + 'px',
    });
})

// document.addEventListener('keydown', function (evt) {
//     if (evt.keyCode === 82) {
//         var r = getRandomNumber(256);
//         var g = getRandomNumber(256);
//         var b = getRandomNumber(256);
//         var randomColor = 'rgb(' + r + ',' + g + ',' + b + ')';
//         console.log(randomColor);
//         board.style.backgroundColor = randomColor;
//     }
// });

$(document).on('keydown', function(e) {
    if (e.keyCode === 82) {
        var r = getRandomNumber(256);
        var g = getRandomNumber(256);
        var b = getRandomNumber(256);
        var randomColor = 'rgb(' + r + ',' + g + ',' + b + ')';
        jqBoard.css({
            backgroundColor: randomColor,
        });
    }
})
