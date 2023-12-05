function argumentsAreHandy(shoutout)
{
console.log("do you want to give a shoutout?");
console. log(shoutout);
}

argumentsAreHandy("Super Shout out");
argumentsAreHandy("hou het netjes!");
argumentsAreHandy("hou het niet netjes!");

function superMooieGlobalFunction()
{
console.log("ik ben global");
console. log("dus je mag mij overal aanroepen");
}

superMooieGlobalFunction();
superMooieGlobalFunction();
superMooieGlobalFunction();


class App {
    runApplication() {

        //code gaat hier!
        console.log("hello world")
        superMooieGlobalFunction();
        
        
    }
}

let app = new App();
app. runApplication();



