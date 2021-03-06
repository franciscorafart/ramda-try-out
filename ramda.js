const R = require('ramda')

// map-reduce-filter
// Taks: Take the smallest number of the doubled values of an array which are greater than 30.
let array = [4, 9, 8, 3, 1, 16, 25, 29, 30, 35, 36, 37, 38]
const greaterThan30 = x => { return x > 30 } // return boolean
const smallest = (x, y) => { return x <= y ? x : y } // return value
console.log(array.map(x => x * 2).filter(greaterThan30).reduce(smallest))

// Ramda
// function that returns pairs
const pairs = R.filter(x => { return x % 2 === 0 })
console.log(pairs(array))

const timesTwo = R.map(x => x * 2)

// Compose functions
const pairsTimesTwo = R.compose(timesTwo, pairs)
console.log(pairsTimesTwo(array))

// Ramda greater than 30
const rGreaterThan30 = R.filter(greaterThan30)
console.log(rGreaterThan30(array))

//Curried functions
let add4 = (a,b,c,d) => {return a+b+c+d}
let add4curries = R.curry(add4)
let lastAdd = add4curries(1)(2)(3)
console.log(lastAdd(4))

console.log(add4curries(1,2)(3,4))

let _ = R.__ //Ramda placeholder
let addSecond = add4curries(1,_,3,4)
console.log(addSecond(2))
