

class Dino {
    constructor(name, bruh, hi)
        {
            this.name = name;
            this.bruh = bruh;
            this.hi = hi;
        }
    
}







class App {
    runApplication() {
        {
        
            let dino = new Dino("a", "b", "c");
            console.log(dino.name)
            console.log(dino.bruh)
            console.log(dino.hi)    
        }
    }
}

let app = new App ();
app.runApplication();