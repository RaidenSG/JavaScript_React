let ans= new Promise((res, rej)=>{
        return res('Woking promise : 1')
})
let p2 = ans.then((data)=>{
    console.log(data)
    return new Promise((res, rej)=>{
        return res("Working promise : 2")
    })
})

let p3 = p2.then((data)=>{
    console.log(data)
    return new Promise((res,rej)=>{
        return res ('working promise : 3')
    })
})

p3.then((data)=>{
    console.log(data)
})