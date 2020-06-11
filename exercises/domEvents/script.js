var button = document.getElementById('first-button');
var input = document.querySelector('input');
var newDiv = document.getElementsByClassName('new-div')[0];

button.addEventListener('click', function(e) {
    e.stopPropagation()
    console.log('The button was clicked.');
    document.body.style.backgroundColor = 'blue';
});
document.addEventListener('keypress', function(e) {
    console.log(e.key + " was pressed and has the keycode " + e.keyCode);    
    if (e.keyCode = 80) {
        
        console.log("Do you have to " + e.key);
        document.body.style.backgroundColor = 'red';
    }
})
input.addEventListener('input', function(e) {
    console.log("input is happening");
    console.log(e)
    event.target.value = 'Joe is a gangsta!'
})
newDiv.addEventListener('click', function(e) {
    newDiv.style.backgroundColor = "green"
})