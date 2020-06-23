(function () {
   

    // elements
    var doc = $(document);
    var input = $('input');
    var resultsContainer = $('#resultsContainer');
    // inserted elements
    var elems;
    var highlighted;
    var inputVal;
    var timerId;
    // event listeners
    // input
    input.on('input', function (e) {
        inputVal = input.val();
        if (!inputVal) {
            resultsContainer.html('')
        } else {
            debounce(ajaxReq(inputVal), 250);
        }
    });

   
    // debounce from https://www.telerik.com/blogs/debouncing-and-throttling-in-javascript
    function debounce(fn, delay) {
        // cancels the timeout
        clearTimeout(timerId)

        // timeout function
        timerId = setTimeout(fn, delay);
    }

    function ajaxReq(input) {
        console.log(input);
        
         $.ajax({
                url: 'https://spicedworld.herokuapp.com/',
                data: {
                    q: input,
                },
                success: function (data, msg, i) {
                    // do something with the data here
                    console.log(i);
                    var currentVal = $('input').val()
                    
                    if (input !== currentVal) {
                        console.log(currentVal);
                        
                        ajaxReq(currentVal)
                    }
                    var resultsHTML = '';
                    if (data.length > 0) {
                        data.forEach(function (elem) {
                            resultsHTML +=
                                '<p class="country">' + elem + '</p>';
                        });
                    } else {
                        resultsHTML = 'No Results';
                    }

                    resultsContainer.html(resultsHTML);
                },
            });
     
    }


    input.on('focus', function (e) {
        input.css({
            border: '2px solid blue',
        });
        // var inputVal = input.val();
        // getCountries(inputVal);
    });

    input.on('blur', function (e) {
        input.css({
            border: '2px solid white',
        });
        resultsContainer.html('');
    });

    // resultsContainer
    resultsContainer.on('mouseover', 'p', function (e) {
        
        highlighted = $('.highlight');
        highlighted.removeClass('highlight');
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


    //     // create html string with results
    

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
