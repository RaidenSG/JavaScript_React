'use strict';
let count = 0
const reset = document.querySelector('#btn-1')
const check = document.querySelector('#btn-2')
const next = document.querySelector('#btn-3')
const num = document.querySelector('input')

let score = document.querySelector('#num1')
let high_score = document.querySelector('#num2')
const message = document.querySelector('#message')

let number = Math.trunc(Math.random() * 5) + 1
console.log(number)

check.addEventListener('click', ()=>{ 
    let guess = document.querySelector('input').value
    // console.log(value)
    if(!guess){
        console.log('No value')
    }else if(guess == number){
        
        message.innerText = 'Correct'
        score.textContent = ++count
        // console.log(num.value)
    }else if(guess < number){
        message.textContent= 'Low'
        num.value=''
        score.textContent = --count
    }else if(guess > number){
        message.textContent= 'High'
        num.value=''
        score.textContent = --count
    }
})

reset.addEventListener('click',()=>{
    count = 0
    num.value = 0
    score.textContent= count
    high_score.textContent= count
    message.textContent = 'Guess...'
})

next.addEventListener('click',()=>{
     number =Math.trunc(Math.random() * 5) + 1
     num.value = ''
     message.textContent = 'Guess...'
    console.log(number)
})


