/*

In simpler terms:

SYNCHRONOUS

You are in a queue to get a movie ticket. You cannot get one until everybody in front of you gets one, and the same applies to the people queued behind you.

ASYNCHRONOUS

You are in a restaurant with many other people. You order your food. Other people can also order their food, they don't have to wait for your food to be cooked and served to you before they can order. In the kitchen restaurant workers are continuously cooking, serving, and taking orders. People will get their food served as soon as it is cooked.

*/

let printHelloWorld = () => {
    return "Hello World";
}

let sum = (a, b) => {
    return new Promise((resolve, reject)=>{
        if(!a || !b)  
        {
            reject("You need args a and b");
            return;
        }
        resolve(a + b);
    });
    
}

let multiply = (a, b) => {
    return new Promise((resolve, reject)=>{
        if(!a || !b)  
        {
            reject("You need args a and b");
            return;
        }
        resolve(a * b);
    });
    
}

let a = 25, b = 65;
//Chained promises
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


const promises = [sum(13, 15), multiply(), printHelloWorld()];

Promise.allSettled(promises)
.then(result=>console.log(result))
.catch(err=>consoke.log(err));




const getFrogs = new Promise((resolve) => {
    resolve([
      { id: 'mlo29naz', name: 'larry', born: '2016-02-22' },
      { id: 'lp2qmsmw', name: 'sally', born: '2018-09-13' },
    ])
  })
  
  const getLizards = new Promise((resolve) => {
    resolve([
      { id: 'aom39d', name: 'john', born: '2017-08-11' },
      { id: '20fja93', name: 'chris', born: '2017-01-30' },
    ])
  })
  
  
  let allItems = []
  
  Promise.all([getFrogs, getLizards])
    .then(([frogs, lizards]) => {
      
      frogs.forEach((frog) => {
        allItems.push(frog)
      })
      
      lizards.forEach((lizard) => {
        allItems.push(lizard)
      })
      
      allItems.forEach((item) => {
        console.log(item)
      })
      
    })
    .catch((error) => {
      console.error(error)
    })

  /*
    result:
      [{"id":"mlo29naz","name":"larry","born":"2016-02-22"},{"id":"lp2qmsmw","name":"sally","born":"2018-09-13"},{"id":"aom39d","name":"john","born":"2017-08-11"},{"id":"20fja93","name":"chris","born":"2017-01-30"}]
  */


  async function usingAsyncWait()
  {
    const sum = await sum(a, b);
    const mult = await multiply(sum, b);
    console.log(mult);
  }
