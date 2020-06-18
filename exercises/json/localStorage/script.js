(function() {
    var textArea = $('textarea');
    var nameInput = $('input')
    var name;
    var storedText;
    var doc = $(document)
    var saveBtn = $('#save');
    var loadBtn = $('#load');
    var deleteBtn = $('#delete');

        
    doc.ready(function() {
        try {
            storedText = localStorage.getItem('textArea');
        } catch (err) {
            console.log('error', err);
        }
        console.log( "StoredText?", storedText !== "", storedText);
    })
    
    nameInput.on('input', function(e) {
        name = nameInput.val()
    })
    
    textArea.on('input', function (e) {
        var text = textArea.val();
        
    })
    saveBtn.on('click', function(e) {
        try {
            localStorage.setItem(name, text);
        } catch (err) {
            console.log('error', err);
        }
    })
    loadBtn.on('click', function(e) {
        
        if (name === undefined) {
            alert('Please enter a text name')
        } else {
            try {
                localStorage.getItem(name);
            } catch(err) {
                console.log('load', err);
                if (err == name) {
                    alert("We couldn't find that text.")
                }
            }
        }
    })
    
    
})();
