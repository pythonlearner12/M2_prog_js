/*class App {
    constructor() {
        this.tag = "";
    }

    runApplication() {
        let uiButton = document.getElementById("myButton");

        uiButton.addEventListener("click", (e) => {
            console.log("click! " + this.tag);
            this.logEvent();
        });
    }

    logEvent() {
        console.log("yeah " + this.tag);
        if (this.tag == "1")
        {
            let a = 5;
            console.log(a);
        }
    }
}

let app = new App();
app.tag = "1";
app.runApplication();

// Create a new instance of App
app = new App();
app.tag = "2";
app.runApplication();
*/


/*
let buttonsToBind = document.getElementsByClassName("myButton");

for (let i = 0; i < buttonsToBind.length; i++) {
    let fred_function = function(e) {            
        console.log("ffffffffrrreeeeddd");
    };
    buttonsToBind[i].addEventListener("click", fred_function);
}*/

/*
function logEvent()
{
    console.log("ÿeah")
}

class App {
    runApplication() {
        
        let uiButton = document.getElementById("myButton");
        let tag = this.tag;

        uiButton.addEventListener("click", (e)=>
        {
            console.log("click!"+app.tag + " "+tag);  
            logEvent();      
        });
        

        //let scope = this;
        uiButton.addEventListener("click", function (e) {
            console.log("click!" +app.tag+ " "+tag);
            logEvent();
        });
    }


}
let app = new App();
app.tag = "1";
app.runApplication();

let app2 = new App();
app2.tag = "2";
*/
let buttonsToBind = document.getElementById("myButton");

buttonsToBind.addEventListener("click", (e) => {
    const para = document.createElement("p");
    const node = document.createTextNode("Tffdfsdfsdsgfgf");
    para.appendChild(node);
    document. body. appendChild(para);
});


let buttonsToBind2 = document.getElementById("myButton2");
console.log(buttonsToBind2)
buttonsToBind2.addEventListener("click", (e) => {
    const img2 = document.createElement("img");
    img2.src = "black.png";
    document.body.appendChild(img2);
});
