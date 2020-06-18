(function () {
    var message = $('#message');
    var text = $('textarea');
    var verifyBtn = $('#verify');
    var clearBtn = $('#clear');
    var verifyThis;

    text.on('input', function (e) {
        verifyThis = text.val();
    });
    verifyBtn.on('click', function () {
        try {
            jQuery.parseJSON(verifyThis);

            text.css({
                border: '3px solid green',
            });
            message.text("That's JSON!");
        } catch (err) {
            text.css({
                border: '3px solid red',
            });
            message.text('NO JSON!');
        }
    });
    clearBtn.on('click', function (e) {
        text.val('');
        message.text('');
        text.css({
            border: 'none',
        });
    });
})();
