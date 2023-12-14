
class App {
    runApplication() {
        
        let array = ["artiest1", "artiest2", "artiest3"]
        array.push("bob dylan")
        array.push("prince")
        array.splice(array.indexOf("bob dylan"),1)
        array.splice(array.indexOf("prince"),1)
        
        array.push("artiest4")
        array.push("artiest5")


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