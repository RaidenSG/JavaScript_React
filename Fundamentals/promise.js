const create_promise = new Promise((resolve, rejected) => {
    const a = 2, b = 2;
    const c = a+b
    if(c === 4){
        resolve(`yes!, ${a} + ${b} = 4`)
    }else{
        rejected(`no!, ${a} + ${b} != 4`)
    }
})
.then(right => console.log(right))
.catch(wrong => console.log(wrong))
