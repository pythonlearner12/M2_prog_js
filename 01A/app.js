
class App {
    runApplication() {
        
        let appNaam = "appNaam"
        let versienummer = 0.9
        let versiedatum = "21/11/2023"
        let autheur = "Fred"
        let copyright = "yes"
        let distributeur = "Fred"
        let darkmode = true

        console.log(appNaam, versienummer, versiedatum, autheur, copyright, distributeur, darkmode);

        console.log("hello world!");
        //code gaat hier!
        //print("hello")
        {
        }
    }
}

let app = new App ();
app.runApplication();
console.log(app.greeting);
console. log("appNaam: ."+app.appNaam);
console.log("versienummer: ."+app.versienummer);