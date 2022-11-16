const anotherfunction = () => {
    return new Promise((resolve, reject)=>{
        if(false){
            resolve('Hey!!');
        } else{
            reject('whoooops!');
        }
    })
}

anotherfunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(() => console.log('Finally'));