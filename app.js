function getYearOfBirth(age){
    let yearOfBirth = 2018 - age
    return yearOfBirth;}

function createGreeting(name, age) {
    if (typeof age !== 'number') {
        throw new TypeError ('Age must be a number')
    } 
    
    if(name === undefined || age === undefined) {
        throw new Error("Arguments not valid")
    }

    if (age < 0) {
        throw new Error("Age can not be negative")} 
    
    const yob = getYearOfBirth(age)
    return `Hi my name is ${name} and I'm ${age} years old. I was born in ${yob}`;
}




try {
    const greeting = createGreeting("Rich", 18);
    console.log(greeting);
} catch (e) {
    console.error(e.message);
} 

