// //Converting string to array

// //split method

// let word = 'Hello World'
// let spreadOp=[...word]                //Spread operator
// let splitMethod = word.split('l')      //split method

// // console.log(spreadOp)
// // console.log(splitMethod)

// console.log(Array.from(word))    //constructor object

let nameAll = 'Shive Presad Chapagain'
// let spreader = [...nameAll]
// // console.log(spreader)
// let arr = spreader.map(e=>{
//     if(e=='a'){
//         return 1
//     }else{
//         return 0
//     }
// }).reduce((acc,curr)=>{
//     return acc+curr
// },0)
// // console.log(arr)
// console.log(`No of letter a : ${arr}`)

let output = [...nameAll].reduce((acc,curr)=>{
    if(curr=='a'){
        acc++
    }
    return acc
},0)
console.log(output)