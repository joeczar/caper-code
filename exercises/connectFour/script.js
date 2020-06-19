(function () {
    var currentPlayer = 'player1';

    var slots = $('.slot')
    console.log(slots);
    

    $('.column').on('click', drop);

    function drop(e) {
        var col = $(e.currentTarget);
        var slotsInCol = col.children();

        for (var i = slotsInCol.length - 1; i >= 0; i--) {
            if (
                !slotsInCol.eq(i).hasClass('player1') &&
                !slotsInCol.eq(i).hasClass('player2')
            ) {
                // do something
                slotsInCol.eq(i).addClass(currentPlayer);
                break;
            }
        }
        var slotsInRow = $('.row' + (i + 1));

        // if i is -1 col is full, get outta there!
        if (i === -1) {
            return;
        }
        if (columnCheck(slotsInCol)) {
            console.log('column victory');
        } else if (rowCheck(slotsInRow)) {
            console.log('row victory');
        }

        switchPLayer();
    }

    function rowCheck(slots) {
        var counter = 0;
        for (var i = 0; i < slots.length; i++) {
            if (slots.eq(i).hasClass(currentPlayer)) {
                counter++;
            } else {
                counter = 0;
            }
            if (counter === 4) {
                console.log('VICTORY!');
                $('.column').off('click', drop);
                return true;
            }
        }
    }

    function columnCheck(slots) {
        var counter = 0;
        for (var i = 0; i < slots.length; i++) {
            if (slots.eq(i).hasClass(currentPlayer)) {
                counter++;
            } else {
                counter = 0;
            }
            if (counter === 4) {
                console.log('VICTORY!');
                $('.column').off('click', drop);
                return true;
            }
        }
    }
    function switchPLayer() {
        currentPlayer === 'player1'
            ? (currentPlayer = 'player2')
            : (currentPlayer = 'player1');
    }

    // function GameState() {
    //     this.player1,
    //     this.player2,

    // }
})();
