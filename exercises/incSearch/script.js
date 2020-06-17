(function () {
    // get countries from countries.json
    var countries = [];
    $.getJSON('countries.json', function (data) {
        $.each(data, function (data, i) {
            countries.push(i);
        });
    });

    // elements
    var doc = $(document);
    var input = $('input');
    var resultsContainer = $('#resultsContainer');
    // inserted elements
    var elems;
    var highlighted;
    var inputVal;

    // event listeners
    // input
    input.on('input', function (e) {
        inputVal = input.val();
        getCountries(inputVal);
    });

    input.on('focus', function (e) {
        input.css({
            border: '2px solid blue',
        });
        var inputVal = input.val();
        getCountries(inputVal);
    });

    input.on('blur', function (e) {
        input.css({
            border: '2px solid white',
        });
        resultsContainer.html('');
    });

    // resultsContainer
    resultsContainer.on('mouseover', 'p', function (e) {
        var p = $(e.target);
        p.addClass('highlight');
    });

    resultsContainer.on('mouseout', 'p', function (e) {
        var p = $(e.target);
        p.removeClass('highlight');
    });

    resultsContainer.on('mousedown', 'p', function (e) {
        var p = $(e.target);
        var text = p.text();
        input.val(text);
    });
    // keydown
    doc.on('keydown', function (e) {
        handleKeydown(e, elems);
    });

    // search
    function getCountries(input) {
        // filter countries according to input
        var filtered = countries.filter(function (country) {
            return indexPass(country, input);
        });
        // check for results & store top four or no results
        var topFour =
            filtered.length === 0 ? ['No Results'] : filtered.slice(0, 4);

        // filter function
        function indexPass(value, input) {
            return (
                value.toLowerCase().indexOf(input.toLowerCase()) === 0 &&
                input.length > 0
            );
        }

        // create html string with results
        var resultsHTML = '';
        topFour.forEach(function (result) {
            resultsHTML += '<p class="country">' + result + '</p>';
        });
        inputVal === ''
            ? resultsContainer.html('')
            : resultsContainer.html(resultsHTML);
    }

    // up down function
    function handleKeydown(e, elems) {
        elems = resultsContainer.find('p');
        highlighted = $('.highlight');
        if (highlighted.length === 0) {
            elems.eq(0).addClass('highlight');
        }
        if (e.keyCode === 40) {
            highlighted.next().addClass('highlight');
            highlighted.removeClass('highlight');
        }
        if (e.keyCode === 38) {
            highlighted.prev().addClass('highlight');
            highlighted.removeClass('highlight');
        }

        if (e.keyCode === 13) {
            input.val(highlighted.text());
            resultsContainer.html('');
        }
    }
})();
