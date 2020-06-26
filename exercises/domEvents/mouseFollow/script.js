var box = document.getElementById('follow');

var mouseX = 0;
var mouseY = 0;

document.addEventListener('mousemove', setMousePosition, false);

function setMousePosition(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    followMouse();
}

function followMouse() {
    box.style.left =`${mouseX -50}px`
    box.style.top = `${mouseY -50}px`;
}





