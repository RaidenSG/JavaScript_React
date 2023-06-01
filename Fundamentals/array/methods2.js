//slice operator
// let arr1 = [1,2,3,4,5,6,7]
// console.log(arr1.slice(3,5))
// console.log(arr1)

//concat operator
let arr1 = [1,2]
let arr2 = ['a', 'b']
console.log(arr1.concat(arr2))

//spread operator
let arr3 = [90, 80, 70]
const output = [...arr3, ...arr1]
console.log(output)