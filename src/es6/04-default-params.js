function newUser(name, age, country){
    var name = name || 'Oscar';
    var age = age || 34;
    var country = country || 'MX';
    console.log(name,age, country);
}

newUser();
newUser('David', 15, 'CO');

function newAdmin(name = 'Oscar', age = 32, country = 'CL'){
    console.log(name,age, country);
}

newAdmin();
newAdmin('Ana',28,'PE');

// Spread Operator

let person = {name: 'oscar', age: 28};
let country = 'MX';

let data = { id: 1 , ...person, country};
console.log(data);

// rest

function sum (num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1,1,2,3);