(function () {
    var currentPlayer = 'player1';
    var slots = $('.slot');
    var columns = ['col1', 'col2', 'col3', 'col4', 'col5', 'col6', 'col7'];
    var start = $('#start');
    var game;

    $('.column').on('click', drop);
    start.on('click', startGame);

    function drop(e) {
        var col = $(e.currentTarget);
        var slotsInCol = col.children();
        colNumber = columns.indexOf(col.attr('id'));

        for (var i = slotsInCol.length - 1; i >= 0; i--) {
            if (
                !slotsInCol.eq(i).hasClass('player1') &&
                !slotsInCol.eq(i).hasClass('player2')
            ) {
                // do something
                slotsInCol.eq(i).addClass(currentPlayer);
                game.play(currentPlayer, [colNumber, i]);
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

    function startGame() {
        var player1 = prompt('Player One: Please enter your name.')
        $('#playerName1').text(player1);
        var player2 = prompt('Player Two: Please enter your name.');
        $('#playerName2').text(player2);
        game = new ConnectFour(player1, player2)
        game.printCurrentBoard();
        start.text('New Game!');
        start.off('click', startGame)
        start.on('click', newGame)
    }
    function newGame() {
        var newPlayers = confirm('Would you change players?')
        console.log(newPlayers);
        
    }
    // game state
    function ConnectFour(player1Name, player2name) {
        (this.player1 = new Player(player1Name, 1)),
            (this.player2 = new Player(player2name, 2)),
            (this.board = new Board()),
            (this.history = []),
            (this.play = function (player, position) {
                var oldBoard = JSON.stringify(this.board);
                this.history.push(oldBoard);
                var coin = player === 'player1' ? 'X' : 'O';
                this.board[position[1]][position[0]] = coin;
                this.getPLayerName();
                this.printCurrentBoard();
            });
        this.getPLayerName = function () {
            var num = currentPlayer.charAt(currentPlayer.length - 1);
            var player = num === '1' ? this.player1.name : this.player2.name;
            console.log('Player ' + num + ': ' + player);
        };

        this.printCurrentBoard = function () {
            var board = '';
            
            for (var i = 0; i < this.board.length; i++) {
                var row = this.board[i];
                board += row.toString() + '\n';
                
            }
            console.log(board);
        };
        // creat 2d array for board
        function Board() {
            var arr = [];
            for (var j = 0; j < 6; j++) {
                arr.push([' ', ' ', ' ', ' ', ' ', ' ', ' ']);
            }
            return arr;
        }
        function Player(name, number) {
            (this.name = name), (this.number = number), this.score;
        }
    }
})();
