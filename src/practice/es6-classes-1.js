

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
    constructor(name, age, location){
        super(name, age)
        this.location = location
    }
    getLocation(){
        let greeting = super.getGreeting()
        if(this.location){
            return `${greeting} I am from ${this.location}`
        }
        return `${greeting}`
    }
}

// traveler -> person
// add support for homelocation
// override getgreeting
// if home location:
// 1. hi, I am jordan olson. I'm visiting from Utah.
// if no home location
// 2. Hi. I am jordan Olson

const me = new Traveler('bob', 31, 'oloo')
console.log(me.getLocation())

const other = new Student();
console.log(other.getDescription())

// class Animal {
//     constructor(name) {
//       this.speed = 0;
//       this.name = name;
//     }
//     run() {
//       console.log(`${this.name} runs with speed ${this.speed}.`);
//     }
//     stop() {
//       this.speed = 0;
//       console.log(`${this.name} stopped.`);
//     }
//   }
  
//   // Inherit from Animal by specifying "extends Animal"
//   class Rabbit extends Animal {
//       constructor(name, speed){
//           super(name, speed)
//           this.speed = speed
//       }
//     hide() {
//       console.log(`${this.name} hides!`);
//     }
//   }

//   class Wolf extends Animal {
//     constructor(name, speed){
//         super(name, speed)
//         this.speed = speed
//     }
//   hide() {
//     console.log(`${this.name} hides!`);
//   }
// }
  
//   let rabbit = new Rabbit("White Rabbit", 4);
//   let wolf = new Wolf("White wolf", 5);
  
//   rabbit.run(2); // White Rabbit runs with speed 5.
//   rabbit.hide(); // White Rabbit hides!

//   wolf.run(3); // White wolf runs with speed 5.
//   wolf.hide(); // White wolf hides!