class user {
    //constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    // metodos
    #speak(){ // It became private with #
        return 'Hello';
    }
    greeting(){
        return`${this.speak()} ${this.name}`;
    }

    get #uAge(){
        return this.age;
    }

    set #uAge(n){
        this.age = n;
    }
}

const bebeloper1 = new user('Cesar',15);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 20);