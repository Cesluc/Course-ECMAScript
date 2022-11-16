//Create a promise
const finAsync = () =>{
    return new Promise((resolve,reject)=>{
        (true)
        ? setTimeout(()=> resolve('Async!!'), 2000)
        : reject(new Error('Error!'));
    })
}

const anotherfn = async () =>{
    // const something = await finAsync();
    const something =  finAsync();
    console.log(something);
    console.log('Hello');
}

console.log('Before');
anotherfn();
console.log('After');