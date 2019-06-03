class Person {
    constructor(name = 'anonymous', age = 0) {
        this.name = name 
        this.age = age
    }
    getGreeting(){
        return `Hi, I am ${this.name}! I am ${this.age} years old!`
    }
    getDesc(){
        return `${this.name} is ${this.age} years old`;
    }
}


class Student extends Person{
    constructor(name, age, major) {
        super(name, age);
        this.major = major
    }
    hasMajor(){
        return !!this.major;
    }
    getDesc(){
        let description = super.getDesc()
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }
        return description

    }
}

//traveler -> Person
//add support for homelocation (set home location for class)
// override getGreeting
// 1. Hi. I am Jordan Olson. I'm visiting from ${this.location}
//else
//2 Hi. I am Jordan Olson
class Traveler extends Person{
    constructor(name, age, location){
        super(name, age);
        this.location = location;
    }

    getGreeting(){
        let greeting = super.getGreeting()
        if (this.location) {
            greeting += ` Their location is ${this.location}`
        }

        return greeting
    }
}




const me = new Traveler('Jordan Olson', 31, 'Utah');
console.log(me.getGreeting())

const other = new Traveler('Jordan Olson', 31);
console.log(other.getGreeting())

const brother = new Traveler(undefined, undefined, "mexico");
console.log(brother.getGreeting())