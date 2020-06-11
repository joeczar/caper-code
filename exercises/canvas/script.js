var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
console.log(canvas);

ctx.beginPath();
ctx.fillStyle = 'tomato';
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.beginPath();
ctx.moveTo(150, 50);
ctx.strokeStyle = 'black';
ctx.lineWidth = '3px';
ctx.lineTo(50, 350);
ctx.lineTo(350, 350);
ctx.lineTo(150, 50);
ctx.stroke();
ctx.fillStyle = 'thistle'
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(350, 200, 50, 0, Math.PI * 2);
ctx.stroke();
ctx.fillStyle = 'lemonchiffon';
ctx.fill();

ctx.beginPath();
ctx.arc(350, 50, 10, 0, Math.PI *2);
ctx.stroke();
ctx.fillStyle = 'darksalmon';
ctx.fill();

ctx.clearRect(0,0,canvas.width, canvas.height)


// bonus needs 2 canvases, smaller canvas will move. drawn image..