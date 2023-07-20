/*

In simpler terms:

SYNCHRONOUS

You are in a queue to get a movie ticket. You cannot get one until everybody in front of you gets one, and the same applies to the people queued behind you.

ASYNCHRONOUS

You are in a restaurant with many other people. You order your food. Other people can also order their food, they don't have to wait for your food to be cooked and served to you before they can order. In the kitchen restaurant workers are continuously cooking, serving, and taking orders. People will get their food served as soon as it is cooked.

*/

const data = {
  "User": [
    {
      "fullname": "Joe",
      "addresses" : ["Address1", "Address2", "Address3"]
    },
    {
      "fullname": "Bob",
      "addresses" : ["Address1", "Address3"]
    },
    {
      "fullname": "Kate",
      "addresses" : ["Address1", "Address2"]
    },
  ]
}

const addressesToCheck = ["Address1", "Address2", "Address3"];

data.User.forEach(user => {
  const hasAddresses = addressesToCheck.some(address => user.addresses.includes(address));
  
  console.log(`${user.fullname} has at least one of the addresses: ${hasAddresses}`);
});


//

const namesToCheck = ["Joe", "Kate"];

const hasNames = data.User.some(user => namesToCheck.includes(user.fullname));

console.log(`Contains Joe or Kate: ${hasNames}`);

//



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
// Consuming the promise object returned by the sum function
let a = 25, b = 65;
//Chained promises
// sum(a, b)
// .then(result=>{
//    return result
// })
// .then(multResult=>{
//     console.log(multResult);
//     return multiply(multResult, 10);
// })
// .then(multiplied10=>{
//     console.log("multiplying the result with 10 " + multiplied10);
// })
// .catch(err=>{
//     console.log(err);
// });

sum(a)
.catch(err => {
    console.log('Caught:', err); // Caught: Error occurred!
    return "ERRCODE 42";
})
.then(result => {
    console.log(result); 
});

sum(a, b)
.catch(err => {
    console.log('Caught:', err.message); // Caught: Error occurred!
    return 42;
})
.then(result => {
    console.log(result); 
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


// Consuming the promise object returned by the sum function
  async function usingAsyncWait()
  {
      try
      {
    const sum = await sum(a, b);
    const mult = await multiply(sum, b);
    console.log(mult);
      }
      catch(err){
          console.log(err)
      }
  }

// Syncrhonous operation with Promises  
let promise1 = Promise.resolve(1);
let promise2 = Promise.resolve(2);
let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(3), 1000);
});

Promise.all([promise1, promise2, promise3])
.then(result => console.log(result)) // [1, 2, 3]
.catch(err => console.log(err));



// Prototypes and Inheritance
// Define a Vehicle constructor
function Vehicle(name) {
  this.name = name;
}

// Add methods to Vehicle's prototype
Vehicle.prototype.start = function() {
  return this.name + ' started';
}

Vehicle.prototype.stop = function() {
  return this.name + ' stopped';
}

// Define a Car constructor
function Car(name, isElectric) {
  // Call the parent constructor (Vehicle) to get its properties
  Vehicle.call(this, name);
  this.isElectric = isElectric;
}

// Set up inheritance: Make Car "subclass" of Vehicle
Car.prototype = Object.create(Vehicle.prototype);

// Since we overwrote Car's prototype, let's set the constructor property appropriately
Car.prototype.constructor = Car;

// Now we can add methods to Car's prototype
Car.prototype.displayType = function() {
  return this.isElectric ? this.name + ' is an electric car' : this.name + ' is a regular car';
}

// Now we can create instances
let tesla = new Car('Tesla', true);
console.log(tesla.start()); // Logs: "Tesla started"
console.log(tesla.displayType()); // Logs: "Tesla is an electric car"

let corolla = new Car('Corolla', false);
console.log(corolla.stop()); // Logs: "Corolla stopped"
console.log(corolla.displayType()); // Logs: "Corolla is a regular car"




// function validate(user) {
//   if (!user.fullname) {
//     console.log("fullname is required")
//   }
//   else if (!user.address) {
//     console.log("fullname is required")
//   }
//   else if (user.fullname.length < 5)
//   {
//     console.log("fullname is invalid")
//   }
//   else if (user.email.indexOf('@')!== -1) {
//     console.log("Email is invalid")
//   }
//   else 
//   {
//     console.log("Validated!")
//   }
// }

// if (condition) then {action} else {action} === condition && (then) {action} || (else) {action}
function validate(user) {
  let error = "";
  !user.fullname && (error+="Fullname is required" + "\n") ||
  !user.address && (error+="Address is required" + "\n")  ||
  ( !user?.email || user?.email?.indexOf('@') === -1 ) && (error+="Email is empty or invalid" + "\n") ||
  user?.fullname?.length < 5 && (error+="Fullname is invalid" + "\n" )
 return error || "Validated!"
  // || console.log("Validated!");
}

console.log(validate({
  fullname: 'Jon Doe',
  address: 'Address 101',
  email: "email@email.com"
}))

// if (x === 1) console.log('active') 
// else console.log('inactive')
function ex2(x) {
  let resp = x+":"
  x === 1 && (resp+='active') || ( resp+='inactive' );
  return resp
}
console.log(ex2(9))
