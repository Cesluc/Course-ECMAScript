// Declarando
class User {};
// Instancia de una clase
//const newUser = new User();

class user{
    // Metodos
    greeting(){
        return 'Hello';
    }
};

const gndx = new user();
console.log(gndx.greeting());
const bebeloper = new user();
console.log(bebeloper.greeting());

//Constructor

class user {
    // Constructor
    constructor(){
        console.log('nuevo usuario')
    }
    greeting(){
        return 'Hello';
    }
}

const david = new user();

// this

class user {
    constructor(name){
        this.name = name;
    }
    //metodos
    speak(){
        return 'Hello';
    }
    greeting(){
        return`${this.speak()} ${this.name}`;
    }
}

const ana = new user('Ana');
console.log(ana.greeting());

// setters getters

class user {
    //constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    speak(){
        return 'Hello';
    }
    greeting(){
        return`${this.speak()} ${this.name}`;
    }

    get uAge(){
        return this.age;
    }

    set uAge(n){
        this.age = n;
    }
}

const bebeloper1 = new user('Cesar',15);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 20);