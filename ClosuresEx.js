// Data Privacy / Emulating Private Methods with Closures

function Person(name, age) {
    // Private data variables
    let _name = name;
    let _age = age;

    return {
        getName: function() {
            // This inner function has access to the outer function's variables
            return _name;
        },
        getAge: function() {
            return _age;
        },
        setAge: function(age) {
            _age = age;
        }
    };
}

let john = Person("John", 25);
console.log(john.getName()); // "John"
console.log(john.getAge()); // 25

john.setAge(26);
console.log(john.getAge()); // 26

console.log(john._name); // undefined
console.log(john._age); // undefined
