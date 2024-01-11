

class App {
    runApplication() {
        
        let uiButton = document.getElementById("myButton");

        uiButton.addEventListener("click", (e)=>
        {
            console.log("click!"+app.tag + " "+this.tag);  
            app.logEvent();      
        });
        

        //let scope = this;
        uiButton.addEventListener("click", function (e) {
            console.log("click!" +app.tag+ " "+this.tag);
            app.logEvent();
        });
    }


    logEvent()
    {
        console.log("ÿeah" + app.tag + " "+ this.tag)
        if(app.tag == "1")
        {
            let a = 5
        }
        console.log(a)
    }
}
let app = new App();
app.tag = "1";
app.logEvent();

app = new App();
app.tag = "2";
app.logEvent();

/*



       let buttonsToBind= document.getElementsByClassName("fredcaller");

for (let i = 0; i < buttonsToBind.length; i++) {
        let fred_function = function(e)
        {            
            console.log("ffffffffrrreeeeddd")
        }
        buttonsToBind[i].addEventListener("click", fred_function);
       };
    }




    

class App {
    runApplication() {
        
        let uiButton = document.getElementById("myButton");

        uiButton.addEventListener("click", (e)=>
        {
            console.log("click!"+app.tag + " "+this.tag);  
            app.logEvent();      
        });
        

        //let scope = this;
        uiButton.addEventListener("click", function (e) {
            console.log("click!" +app.tag+ " "+this.tag);
            app.logEvent();
        });
    }

    logEvent()
    {
        console.log("ÿeah")
    }
}
let app = new App();
app.tag = "1";
app.runApplication();

let app2 = new App();
app2.tag = "2";
*/