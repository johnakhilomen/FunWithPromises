let sum = (a, b) => {
    return new Promise((resolve, reject)=>{
        if(!a && !b)
        {
            reject("You need args a and b");
            return;
        }
        resolve(a + b);
    });
    
}

let multiply = (a, b) => {
    return new Promise((resolve, reject)=>{
        if(!a && !b)
        {
            reject("You need args a and b");
            return;
        }
        resolve(a * b);
    });
    
}

let a = 25, b = 65;
sum(a, b)
.then(result=>{
   return result
})
.then(multResult=>{
    console.log(multResult);
    return multiply(multResult, 10);
})
.then(multiplied10=>{
    console.log("multiplying the result with 10 " + multiplied10);
})
.catch(err=>{
    console.log(err);
});