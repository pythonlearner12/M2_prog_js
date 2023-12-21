

class App {
    runApplication() {
        
        let localeFunction = function (e) {
            console.log("click!");
        };



        let uiButton = document.getElementById("myButton");
        //uiButton.addEventListener("click", localeFunction);        
        uiButton.addEventListener("click", localeFunction);
    }
}
let app = new App();
app.runApplication();

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
*/