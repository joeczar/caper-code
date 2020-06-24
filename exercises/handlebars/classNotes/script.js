(function () {

    /////////// DO NOT TOUCH!!! ////////////
    Handlebars.templates = Handlebars.templates || {};

    var templates = document.querySelectorAll(
        'script[type="text/x-handlebars-template"]'
    );

    Array.prototype.slice.call(templates).forEach(function (script) {
        Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
    });
    /////////// DO NOT TOUCH!!! ////////////
    
    var spiced = {
        cohorts: [
            {
                name: 'Caper',
                nickName: 'Baphomet',
                favoriteFoods: ['Ice Cream', 'Schwarma', 'Pizza', 'Hummus'],
                skills: {
                    javascript: true,
                    html: 10,
                    dancing: 'questionable',
                    silence: 100,
                    tickerMaking: true
                }
            },
            {
                name: 'Dill',
                nickName: 'Dillians',
                favoriteFoods: ['Sushi', 'chips', 'pasta'],
                skills: {
                    javascript: true,
                    html: 9,
                    dancing: 'absolute moves',
                    tickerMaking: 34
                }
            },
            {
                name: 'Vanilla',
                nickName: 'Vanillians',
                favoriteFoods: ['salad', 'tofu', 'dog food'],
                skills: {
                    javascript: true,
                    html: 20,
                    dancing: 'questionable',
                    silence: 100,
                    tickerMaking: true
                }
            }
    
        ]
    };

    // var caperObj = ;
    $('.caperInfo').html(Handlebars.templates.caper(spiced));
})();
