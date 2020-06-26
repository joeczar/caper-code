(function() {
    var results = $('#results');

    $.ajax({
        url:"/data.json",
        method: 'GET',
        success: function(response) {
            var myHtml = ""
            for (var i = 0; i < response.length; i++) {
                
                var city = '<div>' + response[i].city + '</div>'
                myHtml += city;
            }
            results.html(myHtml)
            console.log(myHtml);
            
        },
        error: function (err) {
            console.log('error in ajax:', err);
            
        }
    })
})();



