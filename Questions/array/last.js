//Create a function that takes an array and return last element of that array

const arr = ['a', 'b', 'c', 'd', 'e']
// const last = arr => arr(arr1.length-1)
// console.log(last(arr1))

//shows last element but removes it from array
const arrLastEl = arr => {
    const  lastEl = arr.pop()
    return lastEl
}
console.log(arrLastEl(arr))