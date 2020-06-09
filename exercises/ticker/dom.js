/*
    Write a function that expects a string representing a selector to be passed as a parameter. The function should find all the elements in the document that match the selector and change their style so that the text they contain is italic, underlined, and bold.
*/

function decorateText(select) {
    var selected = document.querySelectorAll(select);
    selected.forEach(function(h1) {
        h1.style.textDecoration = 'underline';
        h1.style.fontStyle = 'italic';
        h1.style.fontWeight = '800'
    });
}

/*
    Write a function that expects a string representing a class name to be passed as a parameter. The function should return an array containing all the elements in the document that have the class that was passed in.
*/

function classSelectToArray(aClass) {
    var classArr = [];
    var selected = document.getElementsByClassName(aClass);
    for (el in selected) {
        if (typeof selected[el] === 'object') {
            classArr.push(selected[el]);
        }
    }
    return classArr;
}

/*
    Write a function that inserts an element into the body of the currently loaded page. That element should have fixed position, z-index of 2147483647, left of 20px, top of 100px, font-size of 200px, and contain the text 'AWESOME'.
*/
function awesomeInsert() {
    var awesomeDiv = document.createElement('div');
    awesomeDiv.style.cssText =
        'position:absolute;z-index:2147483647;left:20px;top:100px;font-size:200px;color:tomato;';
    
    var text = document.createTextNode('AWESOME!');
    awesomeDiv.appendChild(text)
    document.body.appendChild(awesomeDiv);
}