//array of salaries in this organization is given, this year everyone's getting 15% increment. Create a new array of improvised salary.

// const arr1 = [20000, 30000, 40000, 15000, 60000]
// const increment = arr1.map(e => e * 1.15)
// console.log(`Previous salarys = ${arr1}`)
// console.log(`Improvised salaryh = ${increment}`)

//

// const students = ['Sushil', 'Rachana', 'Bikash', 'Paridhi', 'Kaushal']
// const roll = students.map((e,i) => `Roll no : ${i+1} ${e}`)
// console.log(roll)

const arr1 = [1,2,3,4,5]
const ans = arr1.map((e,i) => e*i)
console.log(ans)

//create an array of numbers and return a new array showing boolean value according to the number in the array is even or not
//[2,4,5,9,6,70]
//output: [true, true, false, false,true true]

// const arr = [2,4,5,9,6,70]
// const istrue = arr.map(e => e%2==0? true: false)
// console.log(istrue)

//create an array of strings and return a new array with number of letters present in that string

// const arr = ['apple', 'banana', 'mango', 'orange', 'papaya']
// const length = arr.map(e => e.length)
// console.log(length)


//create a function that takes array of string and returns the array which shows the count of each string present in the passed array.

// const arr = ['apple', 'banana', 'mango', 'orange', 'papaya']
// const students = ['Sushil', 'Rachana', 'Bikash', 'Paridhi', 'Kaushal']
// const strArrLength = change => change.map(e => e.length)
// console.log(strArrLength(arr))
// console.log(strArrLength(students))