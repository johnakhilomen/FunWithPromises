let promise1 = Promise.resolve(1);
let promise2 = Promise.resolve(2);
let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(3), 1000);
});

Promise.all([promise1, promise2, promise3])
.then(result => console.log(result)) // [1, 2, 3]
.catch(err => console.log(err));
