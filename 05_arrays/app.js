
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
        for(let i = 0; i < mijnH1.length; i++)
        {
            mijnH1[i].innerText = "huh?";
        }
        console.log(mijnH1)
    }

    runApplication6()
    {
        let headersByCssClass = document.getElementsByTagName("h1");
        headersByCssClass[0].innerText = "nieuws ";
        headersByCssClass[1].innerText = "reviews";
        headersByCssClass[2].innerText = "commentaar ";        
        headersByCssClass[3].innerText = "bla ";
        headersByCssClass[4].innerText = "ahaha ";
    }

    runApplication7()
    {
        let data = ["nieuws ","reviews","commentaar ", "bla ","ahaha "]
        
        let headersByCssClass = document.getElementsByTagName("h1");
        for(let i = 0; i < data.length; i++)
        {
            
            headersByCssClass[i].innerText = `${i} : ${data[i]}`;
        }
    }
}

let app = new App();
app.runApplication7();