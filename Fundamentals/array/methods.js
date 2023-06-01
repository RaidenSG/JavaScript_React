// const fruits = ['apple ', 'banana ', 'grapes']

// console.log(fruits.indexOf('banana '))
// console.log(fruits.includes('banana '))

//console.log(`Current elements in array is ${fruits}`)

// const x = fruits.unshift('lemon')          
// console.log(x)        // returns length of new array
// console.log(fruits)

// const y = fruits.push('mango')
// console.log(y)
// console.log(fruits)

// const z = fruits.shift()  
// console.log(z)           
// console.log(fruits)

// const a = fruits.pop();   // stores popped value
// console.log(a)           // shows pop value
// console.log(fruits)

// console.log(fruits.indexOf('banana'))
// console.log(fruits.indexOf('apple'))
// console.log(fruits.indexOf('mango'))


//removing elements using splice
const arr1 = [1,2,3,4,5,6,7,8,9]
console.log(arr1.splice(2,6))
console.log(arr1)

//adding elementas using splice
const arr2 = [1,2,3,4,5,6,7,8,9]
arr2.splice(2,0,"hello there!")
console.log(arr2)