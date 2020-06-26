(function() {
    var textArea = $('textarea');
    var nameInput = $('input')
    var name;
    var storedText;
    var text;
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
        text = textArea.val();
        
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
                var text = localStorage.getItem(name);
                if (text === null) {
                    alert("We couldn't find that text.");
                } else {
                    console.log(text);
                    
                    textArea.val(text)
                }
                
            } catch(err) {
                console.log('load', err);
                
            }
        }
    })
    deleteBtn.on('click', function(e) {
         if (name === undefined) {
             alert('Please enter a text name');
         } else {
             try {
                 localStorage.removeItem(name);
                 nameInput.val("");
                 textArea.val("");
                     alert(name + ' has been deleted');

                     
                 
             } catch (err) {
                 console.log('load', err);
             }
         }
    })
    
    
})();
