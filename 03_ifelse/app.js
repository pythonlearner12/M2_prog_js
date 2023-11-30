//welke 2 manieren er zijn om html tags te selecteren met document?
//met een class een id of de <p> zelf

class App {
    runApplication() {
        console.log("hello world");


        const title = document.getElementById("newstitle");

        const newsItem1 = document.getElementsByClassName("gamenews")[0];
        const newsItem2 = document.getElementsByClassName("gamenews")[1];

        let random2 = Math.random();

        if (random2 > 0.2) {
            console.log("meer dan 0.2");
            newsItem1.style.backgroundColor = "#FF0000";
        }else{
            console.log("minder dan 0.2");
            newsItem1.style.backgroundColor = "#FF0017";
        }


        if (random2 > 0.3) 
        {
            console.log("meer dan 0.3");
            newsItem2.style.backgroundColor = "#FF0937";
        }
        else
        {
            console.log("minder dan 0.3");
            newsItem2.style.backgroundColor = "#FF1317";
        }
        let random = Math.random();
        console.log(random);

        if (random < 0.2) {
            title.style.backgroundColor = "#FF0000";
        } else if (random >= 0.2 && random < 0.6) {
            title.style.backgroundColor = "#FF0500";
        } else if (random >= 0.6 && random < 0.75) {
            title.style.backgroundColor = "#FF0520";
        } else {
        }
    }
}

const app = new App();
app.runApplication();
