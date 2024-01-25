class User {
    constructor(name) {
        this.name = name;
        console.log(this.name);
    }

    wieBenIk() {
        console.log(this.name);
    }
}

class App {
    runApplication() {
        let user1 = new User("bob1");
        let user2 = new User("bob2");
        let user3 = new User("bob3");
        let user4 = new User("bob4");
        let user5 = new User("bob5");
        let user6 = new User("bob6");

        let patches = new User("patches the hyena");

        user6.wieBenIk();
        user5.wieBenIk();
        user2.wieBenIk();
        user3.wieBenIk();
        user1.wieBenIk();
        user6.wieBenIk();
        user4.wieBenIk();
        user2.wieBenIk();
        user3.wieBenIk();
        user2.wieBenIk();
    }
}

let app = new App();
app.runApplication();
