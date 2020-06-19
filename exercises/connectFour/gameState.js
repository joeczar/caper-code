function ConnectFour(player1Name, player2name) {
    (this.player1 = new Player(player1Name, 1)),
        (this.player2 = new Player(player2name, 2)),
        (this.board = new Board())
        this.history = []

    // creat 2d array for board
    function Board() {
        var arr = [];
        var row = [];
        for (var i = 0; i < 7; i++) {
            row.push('');
            for (var j = 0; j < 6; j++) {
                arr.push(row);
            }
        }
        return arr;
    }
    function Player(name, number) {
        (this.name = name), (this.number = number), this.score;
    }
}
var game = new ConnectFour('joe', 'ronja');
var board = game.board
board[0][0] = 'hi'
console.log(board[0]);
