//
//class App {
//    runApplication() {
//        
//        console.log("hello world!");
//    }
//}
//
//let app = new App ();
//app.runApplication();




//opdracht 1 en 2
class Greet
{
    constructor()
    {
    }

    showgreeting()
    {
        console.log("Greetings!");
    }
}
let greet = new Greet()


class Goodbye
{
    constructor()
    {
    }

    showBye()
    {

        console.log("goodbye!");
    }
}

let goodbye = new Goodbye()




//greet.showgreeting()
//goodbye.showBye()
//
//greet.showgreeting()
//goodbye.showBye()
//
//greet.showgreeting()
//goodbye.showBye()



//opdracht 3

class Greet2 {
    constructor() {
        this.greeting = "Greetings!";
    }

    runApplication() {
        console.log(this.greeting);
    }
}

let greet2 = new Greet2();
console.log("greeting van buiten: " + greet2.greeting);
greet2.runApplication();



class Goodbye2 {
    constructor() {
        this.farewell = "farewell!";
    }

    runApplication() {
        console.log(this.farewell);
    }
}

let goodbye2 = new Goodbye2();
console.log("greeting van buiten: " + goodbye2.greeting);
goodbye2.runApplication();