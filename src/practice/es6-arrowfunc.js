//arguments no longer bound


const add = (a, b) => a+ b
console.log(add(55,1))

//map takes an array and lets you transform the values and giving you methods to manipulate the data within.
const user = {
    name:"jordan ",
    cities: ['utah', 'pizza', 'dublin'],
    printPlacesLived() {
        //return this.cities.map((city)=> this.name + pee'd the bed in ' + city);
     return this.cities.map((city) => this.name + 'peed the bed in ' + city)
    }
};
console.log(user.printPlacesLived());

//this keyword - no longer bound

//challenge area

const multiplier = {
    nums : [1, 2, 3],
        multiplyBy:5,
        multiply(){
            return this.nums.map((num) => num*this.multiplyBy)
        }
    }
    console.log(multiplier.multiply())

    const divider = {
        nums : [1, 2, 4, 6],
        divideBy:2,
        divide(){
            return this.nums.map((num)=> num / this.divideBy)
        }
    }
    console.log(divider.divide())