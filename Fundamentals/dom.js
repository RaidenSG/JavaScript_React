// Accessing DOM nodes in JS

// const div1 = document.getElementById('d-1')
// console.log(div1)

// const div2 = document.getElementsByClassName('para1')
// console.log(div2)

// const dive = document.querySelector('.para1')
// console.log(dive)

// const dive = document.querySelectorAll('.para1')
// console.log(dive)



// const mainHeading = document.querySelector('#intro')
// const list1 = document.querySelector('.fruit')

// //Manipulation the DOM
// //Style Manipulation

// mainHeading.style.color = 'red'
// mainHeading.style.backgroundColor = 'blue'
// mainHeading.style.textDecoration = 'underline'

// list1.style.backgroundColor = 'aqua'


// Text manipulation

// console.log(mainHeading.textContent)
// console.log(mainHeading.innerText)

const anotherList = document.createElement('li')
anotherList.textContent = 'Dragonfruit'
anotherList.classList.add('fruit')
document.getElementById('uList').appendChild(anotherList)

