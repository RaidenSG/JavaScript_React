// let pro = new Promise ((res, rej) => {
//     if(!true){
//         return res();
//     }else{
//         return rej();
//     }
// })

// pro
// .then(function(){
//     console.log('Working')
// })
// .catch(function(){
//     console.log('Error')
// })


//user will ask for a number bet 0 to 9 and if the number is below 5 reosleve if not reject

let ans = new Promise((res, rej)=>{
    let n = Math.floor(Math.random()*10)
    if(n<5){
        return res();
    }else{
        return rej();
    }
})

ans
.then(()=>{
    console.log('below')
})
.catch(()=>{
    console.log('above')
})