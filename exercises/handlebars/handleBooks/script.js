(function () {
    console.log('sanity');
    
    ////////////// Handlebars Boilerplate DO NOT TOUCH!!! ///////////
    Handlebars.templates = Handlebars.templates || {};

    var templates = document.querySelectorAll(
        'script[type="text/x-handlebars-template"]'
    );

    Array.prototype.slice.call(templates).forEach(function (script) {
        Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
    });
    ////////////// Handlebars Boilerplate DO NOT TOUCH!!! ///////////
    var url = 'books.json';
    var books;

    $.getJSON(url,success);

    function success(data) {
        books = data;
        $('#authors').html(Handlebars.templates.authorList( books ));
        console.log(books);
        
    }


})();
