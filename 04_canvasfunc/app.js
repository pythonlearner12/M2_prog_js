

class App 
{
    runApplication() 
    {
        // code goes here!
        console.log("hello world");

        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        return g;
    }


    tekenHuis(g, x, y)
    {

        //length wall
        g. beginPath()
        g. fillStyle = "grey";

        g. moveTo(200+x,500+y);
        g. lineTo(600+x,600+y);
        g. lineTo(600+x,400+y);
        g. lineTo(200+x,300+y);

        g. closePath();
        g. stroke();
        g. fill()


        //length roof
        g.beginPath();
        g. fillStyle = "red";

        g. moveTo(200+x,300+y);
        g. lineTo(300+x,100+y);
        g. lineTo(700+x,200+y);
        g. lineTo(600+x,400+y);
        g. lineTo(200+x,300+y);

        g. closePath();
        g. stroke();
        g. fill()


        //triangle wall
        g. fillStyle = "#999";
        g.beginPath();
        g. moveTo(600+x,400+y);
        g. lineTo(700+x,200+y);
        g. lineTo(800+x,300+y);
        g. lineTo(600+x,400+y);

        g. closePath();
        g. stroke();
        g. fill()


        g. fillStyle = "#999";
        g.beginPath();
        g. moveTo(600+x,400+y);
        g. lineTo(800+x,300+y);
        g. lineTo(800+x,500+y);
        g. lineTo(600+x,600+y);
        g. lineTo(600+x,400+y);

        g. closePath();
        g. stroke();
        g. fill()


        //length wall
        g. beginPath()
        g. fillStyle = "white";
        g. moveTo(250+x,450+y);
        g. lineTo(550+x,525+y);
        g. lineTo(550+x,425+y);
        g. lineTo(250+x,350+y);

        g. closePath();
        g. stroke();
        g. fill()


















        //length wall
        g. beginPath()
        g. fillStyle = "grey";

        g. moveTo(20+x,50+y);
        g. lineTo(60+x,60+y);
        g. lineTo(60+x,40+y);
        g. lineTo(20+x,30+y);

        g. closePath();
        g. stroke();
        g. fill()


        //length roof
        g.beginPath();
        g. fillStyle = "red";

        g. moveTo(20+x,30+y);
        g. lineTo(30+x,10+y);
        g. lineTo(70+x,20+y);
        g. lineTo(60+x,40+y);
        g. lineTo(20+x,30+y);

        g. closePath();
        g. stroke();
        g. fill()


        //triangle wall
        g. fillStyle = "#999";
        g.beginPath();
        g. moveTo(60+x,40+y);
        g. lineTo(70+x,20+y);
        g. lineTo(80+x,30+y);
        g. lineTo(60+x,40+y);

        g. closePath();
        g. stroke();
        g. fill()


        g. fillStyle = "#999";
        g.beginPath();
        g. moveTo(60+x,40+y);
        g. lineTo(80+x,30+y);
        g. lineTo(80+x,50+y);
        g. lineTo(60+x,60+y);
        g. lineTo(60+x,40+y);

        g. closePath();
        g. stroke();
        g. fill()


        //length wall
        g. beginPath()
        g. fillStyle = "white";
        g. moveTo(25+x,45+y);
        g. lineTo(55+x,52.5+y);
        g. lineTo(55+x,42.5+y);
        g. lineTo(25+x,35+y);

        g. closePath();
        g. stroke();
        g. fill()
    }

    tekenKerstBoom(g, x, y)
    {
        g.beginPath();
        g.fillStyle = "#a52a2a";
        g.fillRect(500+x, 690+y, 60, 90); // (x, y, width, height)
        
        g.fill();
        g.closePath();

        //triangle
        g.beginPath();

        g.fillStyle = '#00ff00';
        g.moveTo(530, 450);
        g.lineTo(430, 700);
        g.lineTo(630, 700);
        g.fill();
        g.closePath();

        // Draw the circle
        for(x = 40; x<280; x+=40)
        {
            g.beginPath();
            g.arc(530, 450+x, 10, 0, 2 * Math.PI);
            g.stroke();
            g.fillStyle = '#0000ff';
            g.fill();

        }

        for(x = 40; x<200; x+=40)
        {
            g.beginPath();
            g.arc(430+x, 670, 10, 0, 2 * Math.PI);
            g.stroke();
            g.fillStyle = '#0000ff';
            g.fill();

        }



        // Draw a smaller triangle
        g.beginPath();
        
        g.fillStyle = "#ffff00";
        g.moveTo(530, 320);
        g.lineTo(480, 470); 
        g.lineTo(580, 470); 
        g.closePath();
        g.fill();




    }
}
let app = new App();
let context = app.runApplication(); // Get the 2D context
//app.tekenHuis(context, 100, 100); // Call tekenHuis with appropriate x and y values
app.tekenKerstBoom(context, 0, 0);
