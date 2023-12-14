
class App {
    runApplication() {
        
        let array = ["artiest1", "artiest2", "artiest3"]
        console.log(array)


        for (let i = 0; i < array. length; i++)
        {
            const element = array[i];
            console.log(`${i} : ${element}`)
        }
        
    }

    runApplication2() {
        
        let nummers = [2,5,7]
        console.log(nummers)


        for (let i = 0; i < nummers. length; i++)
        {
            const element = nummers[i];
            console.log(element+1);
        }
        
    }
}

let app = new App();
app.runApplication();