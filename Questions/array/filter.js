// let basicSalary = 15000;
// let salariesCom1 = [7600, 15000, 45000, 12000, 100000, 76000,1200000,43000, 3000, 5800, 35000];
// // let filterSalary = salariesCom1.filter(e => e<basicSalary)
// // console.log(`${filterSalary.length} people in this community is getting a below average salary.`)

// //Create an another array that shows percentage difference of the filterSalary to be 15000
// //Eg: 7500 salary is lagging by 50% to be 15000,.......

// // let showPer = filterSalary.map(e => `${e} salary is lagging by ${(e/basicSalary) *100}% to be ${basicSalary}`)
// // console.log(showPer)

// //Method Chaining

// let filterSalary = salariesCom1.filter(e => e<basicSalary).map(e => `${e} salary is lagging by ${(e/basicSalary) *100}% to be ${basicSalary}`)
// console.log(filterSalary)

let arr1 = [1,2,3,4,5,6,7]
let arr2 = arr1.filter(e=>e%2)
console.log(arr1)
console.log(arr2)