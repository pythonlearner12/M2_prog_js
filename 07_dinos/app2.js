class User
{
    constructor(name)
    {
        this.name = name;
        console.log(this.name);
    }
}



class Dino {
    constructor(name, leeftijd, vegan) {
        this.name = name;
        this.leeftijd = leeftijd;
        this.vegan = vegan;

        this.leeft = true;
        this.honger = true;



        
        //console.log(`ik ben een: ${this.name}`);
        //console.log(`leeftijd:${this.leeftijd}`);
        //
        //console.log(`vegan: ${this.vegan}`);
        //console.log(`leeft: ${this.leeft}`);
        //console.log(`honger: ${this.honger}`);
        //console.log("____________________")



    }

    eatFood(foodToEat) {
        this.leeft=false;
        this.honger=false;
        foodToEat.leeft = false;
    }
}



class Plant {
    constructor(name, leeft) {
        this.name = name;
        this.leeft = leeft;

        //console.log(this.name)
        //console.log(this.leeft)
    }
}


class App {
    runApplication() {

        let plantenEter = new Dino("Triceratops", 20, true, true, true);
        let dino = new Dino("T-Rex", 20, false, true, true);
        let gras = new Plant("gras", false)
        let struik = new Plant("struik", false)

        
        console.log(`ik ben een: ${plantenEter.name}`);
        plantenEter.eatFood(gras)
        console.log(`ik eet nu: ${gras.name}`)
        console.log(`mijn honger: ${plantenEter.honger}`)
        
        console.log("_____")


        
        console.log(`ik ben een: ${plantenEter.name}`);
        plantenEter.eatFood(struik)
        console.log(`ik eet nu: ${struik.name}`)
        console.log(`mijn honger: ${plantenEter.honger}`)
        
        console.log("_____")


        
        
        console.log(`ik ben een: ${dino.name}`);
        dino.eatFood(plantenEter)
        console.log(`ik eet nu: ${plantenEter.name}`)
        console.log(`mijn honger: ${dino.honger}`)        
        console.log(`leeft tricepteor? ${plantenEter.leeft}`)
        console.log(`leeftijd van t-rex: ${dino.leeftijd}`)        
        console.log(`is t-rex vegan?: ${dino.vegan}`)


        
    }
}

let app = new App();
app.runApplication();















        //console.log(dino);
        //console.log(plantenEter);
//
        //dino.eatFood(plantenEter);
        //console.log("leeft " + plantenEter.name + "? "+ plantenEter.leeft);