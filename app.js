function createGreeting(name, age) {
    return `Hi my name is ${name} and I'm ${age} years old. I was born in ${yearOfBirth}`
}

let yearOfBirth = 2018 - age

const greeting = createGreeting();
console.log(greeting);
