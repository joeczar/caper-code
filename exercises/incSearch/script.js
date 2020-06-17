/* jQuery
    1. input
        get list of countries that match user input
    2. mouseover
        highlight country user is hovering over
    3. mousedown/click
        country that the user mousedowned will be put in the input field
    4. keydown
        user cal select countries with down and up arrows
    5. focus
        click into input field, change border color to blue
        when focus is on, show results 
    6. blur
        deselects focus from input field click outside of input
        remove focus border & hide results.hideModal
*/
(function () {
    // get countries from countries.json
    var countries = [];
    $.getJSON('countries.json', function (data) {
        $.each(data, function (data, i) {
            countries.push(i);
        });
    });

    // elements
    var doc = $(document)
    var input = $('input');
    var resultsContainer = $('#resultsContainer');

    // counter
    var selector = 0;
    
    // event listeners
    // input
    input.on('input', function (e) {
        var inputVal = input.val();
        getCountries(inputVal)
        //console.log(list);
        
    });
    input.on('focus', function (e) {
        input.css({
            border: '2px solid blue',
        });
    });
    input.on('blur', function (e) {
        input.css({
            border: '2px solid white',
        });
    });

    // resultsContainer
    resultsContainer.on('mouseover', 'p', function(e) {
       var p = $(e.target)
       p.addClass('highlight')
       
    })
    resultsContainer.on('mouseout', 'p', function (e) {
        var p = $(e.target);
        p.removeClass('highlight');
    });
    resultsContainer.on('click', 'p', function (e) {
        var p = $(e.target);
        var text = p.text();
        input.val(text)
    });
    resultsContainer.on('keydown', function (e) {
        var countryP = $('.country');
        console.log(countryP);
        
    });
    doc.on('keydown', function(e) { 
         var elems = $('.country');
         
         handleKeydown(e, elems); 
    })
    

    // search
    function getCountries(input) {
        var filtered = countries.filter(function(country) {
            return indexPass(country, input)
        });
        var topFour = filtered.slice(0, 4);

        function indexPass(value, input) {
            return (
                value.toLowerCase().indexOf(input.toLowerCase()) === 0 &&
                input.length > 0
            );
        }
        var resultsHTML = "";
        
        topFour.forEach(function(result) {
            resultsHTML += '<p class="country">' + result + '</p>'
        })
        resultsContainer.html(resultsHTML);
        
    }

    // up down function
    function handleKeydown(e, elems) {
        // increment selector        
        if (e.keyCode === 40) {
            if (selector > elems.length -1) {
                selector = 0;
            }
            selector++;
            
        } else if (e.keyCode === 38) {
            selector--
            if (selector < 0) {
                selector = 3;
            }
        }
        // apply selected highlight
        for (var i = 0; i < elems.length; i++) {
            if (i === selector && !elems.eq(i).hasClass('highlight')) {
                elems.eq(i).addClass('highlight');
            } else {
                elems.eq(i).removeClass('highlight');
            }
        }

        // enter
       
        if (e.keyCode === 13) {

            for (var i = 0; i < elems.length; i++) {
                if (elems.eq(i).hasClass('highlight')) {
                    console.log(elems.eq(i));
                    
                    
                }
            }
            
        }
        
    }

})();
