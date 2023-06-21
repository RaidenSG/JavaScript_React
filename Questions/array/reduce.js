// let salaries = [15000, 20000, 10000, 30000, 12000]
//  let avg = salaries.reduce((acc,curr)=>{
     
//      return acc + curr
//  },0)
// console.log(avg/salaries.length)

//Create a function that takes two arguments first is the word and second is the letter and return output as   `${word} has ${x} no if ${letter} presebt in it

const tourFunction = (word, letter) => {
    let number = [...word].reduce((acc,curr)=>{
        if(curr==letter){
            acc++
        }
        return acc
    },0)
    console.log (`${word} has ${number} no if ${letter} present in it`)
}
tourFunction('banana','n')