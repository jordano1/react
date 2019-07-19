

class Person{
    constructor(name = 'anon', age = 0){
        this.age = age
        this.name = name
    }
    getGreeting(){
        return `hi ${this.name}`
    }
    getDescription(){
        return `${this.name} is ${this.age} years old`
    }

}

const me = new Person('bob', 31)
console.log(me.getDescription())

const other = new Person();
console.log(other.getDescription())
