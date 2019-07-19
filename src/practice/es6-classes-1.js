

class Person{
    constructor(name = 'anon', age = 0){
        this.age = age
        this.name = name
    }
    getGreeting(){
        return `hi, i'm ${this.name}.`
    }
    getDescription(){
        return `${this.name} is ${this.age} years old,`
    }
 
}

class Student extends Person {
    constructor(name, age, major){
        // super refers to parent class 
        // the parameters must match the class or they will switch outputs
        super(name, age)
        this.major = major
    }
    hasMajor(){
        return !!this.major
    }
    getDescription(){
        let description = super.getDescription();
        // wrote a method
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}`;
        }
        return description
    }
}

class Traveler extends Person{
    constructor(name, age, homeLocation){
        super(name, age)
        this.homeLocation = homeLocation
    }
    hasHomeLocation(){
        return !!this.homeLocation
    }
    getHomeLocation(){
        let homeDescription = super.getDescription();
        if(this.hasHomeLocation()){
            homeDescription += ` and is from ${this.homeLocation}`
        }
        return homeDescription
    }
}

// traveler -> person
// add support for homelocation
// override getgreeting
// if home location:
// 1. hi, I am jordan olson. I'm visiting from Utah.
// if no home location
// 2. Hi. I am jordan Olson

const me = new Traveler('bob', 31, 'Utah')
console.log(me.getHomeLocation())

const other = new Student();
console.log(other.getDescription())
