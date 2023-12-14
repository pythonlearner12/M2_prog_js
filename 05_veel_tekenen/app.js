

let canvas = document.getElementById("canvasId");
let g = canvas.getContext("2d");


function tekenCirkel(g, x, y)
{
    g.beginPath();
    g.arc(x, y, 20, 0,Math.PI*2);
    g.stroke();
    g. fill();
    g. closePath();
}



for(let i = 0; i < 200; i++)
{
    let randomNumberX = Math.random() * 1000;
    let randomNumberY = Math.random() * 1000;

    tekenCirkel(g, randomNumberX, randomNumberY)
}
//g.fillStyle = "red";
//g.fillRect(0,0,canvas.width,canvas.height);
//g.fillStyle = "black";
//g.fillRect(0,0,100,100);
//console.log(g)