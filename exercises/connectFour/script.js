(function () {
    var currentPlayer = 'player1';
    var columns = ['col1', 'col2', 'col3', 'col4', 'col5', 'col6', 'col7'];
    var slots = $('.slot');
    var start = $('#start');
    var shroud = $('#shroud');
    var playerNames = $('#playerNames');

    var game;

    $('.column').on('click', drop);
    start.on('click', startGame);

    function drop(e) {
        var col = $(e.currentTarget);
        var slotsInCol = col.children();
        var lastPlay;
        colNumber = columns.indexOf(col.attr('id'));

        for (var i = slotsInCol.length - 1; i >= 0; i--) {
            if (
                !slotsInCol.eq(i).hasClass('player1') &&
                !slotsInCol.eq(i).hasClass('player2')
            ) {
                // do something
                lastPlay = [colNumber, i];
                slotsInCol.eq(i).addClass(currentPlayer);
                game.play(currentPlayer, lastPlay);
                
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
        } else if (diagonalCheck(lastPlay)) {
            console.log('diagonal victory');
        }
        switchPLayer();
    }
    function diagonalCheck(currentPos) {
        var left = 0;
        var right = 0;
        var currentR = currentPos[0] + currentPos[1]
        var currentL = currentPos[0] - currentPos[1];
        
        for (var i = 0; i < slots.length; i++) {
            
            var col = columns.indexOf(slots.eq(i).parent().attr('id'));
            var rowClasses = slots.eq(i).attr('class').split(' ');
            var row = Number(rowClasses[1].slice(-1) - 1)
            var diagRight = col + row;
            var diagLeft = col-row;
            
            if (currentR === diagRight && slots.eq(i).hasClass(currentPlayer)) {
                right++;
                console.log( 'right', right);
            } 
            if (currentL === diagLeft && slots.eq(i).hasClass(currentPlayer)) {
                left++;
                console.log(`left:`, left);
            }
            if (left === 4 || right === 4) {
                return true;
            }
        }
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
        var pNames = []

        shroud.addClass('show').removeClass('hide')
        getPLayerNames()

        function getPLayerNames() {
            var p1Input = $('#p1Input');
            var p2Input = $('#p2Input');
            var ok = $('#pnOK')
            var pNames = ["", ""]
            
            playerNames.addClass('show').removeClass('hide');
            // get player one name
            p1Input.on('input', handleP1Input)
            // get player two name
            p2Input.on('input', handleP2Input)
            // handle ok
            ok.on('click', handleOk)

            function handleP1Input(e) {
                pNames[0] = p1Input.val();
            }
            function handleP2Input(e) {
                pNames[1] = p2Input.val();
            }
            function handleOk(e) {
                var conf;
                if (pNames[0] === '' || pNames[1] === '') {
                    conf = confirm(
                        "Are you sure you don't want to enter a PLayer name?\nYou won't be able to save your victory."
                    );
                    if (conf) {
                        closeGetNameAndStart(['', '']);
                    }
                } else {
                    closeGetNameAndStart(pNames);
                }
            }
            function closeGetNameAndStart(names) {
                playerNames.addClass('hide').removeClass('show');
                shroud.addClass('hide').removeClass('show');
                p1Input.off('input', handleP1Input)
                p2Input.off('input', handleP2Input)
                ok.off('click', handleOk);

                game = new ConnectFour(names[0], names[1]);
                $('#playerName1').text(names[0]);
                $('#playerName2').text(names[1]);
            }
        }
    }
    function newGame() {

        var newPlayers = confirm('Would you change players?');
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
