(function () {
    var text = $('#text');
    var zahlen = [
        'Eins',
        'Zwei',
        'Drei',
        'Vier',
        'Fünf',
        'Sechs',
        'Sieben',
        'Acht',
        'Neun',
        'Zehn',
    ];
    var number;

    translateNumberToGerman()

    function translateNumberToGerman() {
        try {
            number = askForNumber();
            text.text(zahlen[number - 1]);
            setTimeout(translateNumberToGerman, 3000);
        } catch (err) {
            text.text('Nein!');
            console.log(err);
            translateNumberToGerman();
        }
    }

    function askForNumber() {
        var num = prompt('Please enter a number between 1 and 10');
        if (num >= 1 && num <= 10 && num == parseInt(num)) {
            return num;
        }
        throw new Error('Bad number');
    }
})();
