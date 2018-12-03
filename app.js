function createGreeting(name, age) {
    const yob = getYearOfBirth()
    return `Hi my name is ${name} and I'm ${age} years old. I was born in ${yob}`
}

function getYearOfBirth(age){
let yearOfBirth = 2018 - age
return yearOfBirth;
}

const greeting = createGreeting();
console.log(greeting);
