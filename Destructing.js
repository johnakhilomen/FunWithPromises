const person = {
    name: 'John',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zip: '12345'
    }
  };
   
  const { name, age, address: { city } } = person;
   
  console.log(name); // 'John'
  console.log(age); // 30
  console.log(city); // 'Anytown'