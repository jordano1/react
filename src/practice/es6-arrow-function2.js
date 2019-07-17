// arguments object no longer bound with arrow functions
var add = function add(a, b) {
    //can't use arguments, must change back to a normal function and not an arrow function
    //console.log(arguments)
    return a + b;
};
console.log(add(1, 4));
// this keyword no longer bound


var user = {
    'name': 'Jordan',
    'cities': ['utah', 'new york', 'texas'],
    //new syntax in es6 for functions
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
        //has access to this
        //const that = this;
        // console.log(this.name)
        // console.log(this.cities)
        // this.cities.forEach((city)=>{
        //     console.log(this.name + ' wants to know what it\'s like to live in' + city)
        // });
    }
};
console.log(user.printPlacesLived());

var multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }
    // numbers array of numbers
    // multiplyBy - single number 
    // 6 -> 12
    // 4
    // multiply - return a new array where the numbers have been multiplied

};

console.log(multiplier.multiply()); //[1, 2, 3] [2, 4, 6]