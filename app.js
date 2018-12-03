function createGreeting(name, age) {

    const yob = getYearOfBirth()

    if(name === undefined || age === undefined) {
        throw new Error("Arguments not valid")
    } else {
    return `Hi my name is ${name} and I'm ${age} years old. I was born in ${yob}`
}
}

function getYearOfBirth(age){
let yearOfBirth = 2018 - age
if (age < 0) {
    throw new Error("Age can not be negative")} else {
    return yearOfBirth;}
}

try {
    const greeting = createGreeting();
} catch (e) {
    console.log(e)
} 
console.log(greeting);
