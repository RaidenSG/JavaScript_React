
// const dice = document.getElementById('dice')

// const roll = () => {
//     let rand1to6 = Math.trunc(Math.random() * 6) + 1
//     dice.innerHTML = `<img src="images/${rand1to6}.png"/>`
// }

const diceAll = document.getElementById('dice')
const button = document.getElementById('roll')
let roll = button.addEventListener('click', ()=>{
    let rand1to6 = Math.trunc(Math.random() * 6) + 1
    diceAll.innerHTML = `<img src="images/${rand1to6}.png"/>`
})

