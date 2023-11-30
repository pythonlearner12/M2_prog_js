
class App {
    runApplication() {
        this.greeting = "starting up"
        this.appNaam = "appNaam"
        app.versienummer = 0.9
        app.versiedatum = "21/11/2023"
        app.autheur = "Fred"
        app.copyright = "yes"
        app.distributeur = "Fred"
        app.darkmode = true


        let Bul = true
        let str = "string"
        let num = 1


        //console.log(appNaam, versienummer, versiedatum, autheur, copyright, distributeur, darkmode);

        console.log(Bul, str, num)

        console.log("hello world!");
        //code gaat hier!
        //print("hello")
        {
        }
    }
}
let app = new App();
app.runApplication();

let app2 = new App();
app2.runApplication();


console.log("appNaam: "+app.appNaam)
console.log("versienummer: "+app.versienummer)
console.log("versiedatum"+app.versiedatum)
console.log("autheur: "+app.autheur)
console.log("copyright: "+app.copyright)
console.log("distributeur"+app.distributeur)
console.log("darkmode"+app.darkmode)
console.log("appNaam2: "+app2.appNaam)
