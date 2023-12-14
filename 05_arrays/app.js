
class App {
    runApplication() 
    {
        
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

    runApplication3()
    {
        let headers = document.getElementsByTagName("h1");
        for(let i = 0; i < headers.length; i++)
        {
            console.log(headers[i])
        }
        let codeObjs = document.getElementsByClassName("bandName");
        for(let i = 0; i < codeObjs.length; i++)
        {
            console.log(codeObjs[i])
        }
    }

    runApplication4()
    {
        let mijnH1 = document.getElementsByTagName("h1");
        for(let i = 0; i < mijnH1.length; i++)
        {
            console.log(mijnH1[i].innerText)
        }
    }

    runApplication5()
    {
        let mijnH1 = document.getElementsByTagName("h1");
        mijnH1[0].innerText = "nieuws ";
        mijnH1[1].innerText = "reviews";
        mijnH1[2].innerText = "commentaar ";
        console.log(mijnH1)
    }
}

let app = new App();
app.runApplication5();