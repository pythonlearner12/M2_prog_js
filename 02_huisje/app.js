

let canvas = document.getElementById("canvasId");
let g = canvas.getContext("2d");

g. beginPath()
g. fillStyle = "yellow";
g. moveTo(200,500);
g. lineTo(600,600);
g. lineTo(600,400);
g. lineTo(200,300);


g. moveTo(200,300);
g. lineTo(300,100);
g. lineTo(700,200);
g. lineTo(600,400);



g. moveTo(700,200);
g. lineTo(800,300);
g. lineTo(600,400);


g. moveTo(800,300);
g. lineTo(800,500);
g. lineTo(600,600);
g. lineTo(600,400);


g. closePath();
g. stroke();
g. fill()
