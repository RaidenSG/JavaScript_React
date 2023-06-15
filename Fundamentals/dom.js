// Accessing DOM nodes in JS

// const div1 = document.getElementById('d-1')
// console.log(div1)

// const div2 = document.getElementsByClassName('para1')
// console.log(div2)

// const dive = document.querySelector('.para1')
// console.log(dive)

// const dive = document.querySelectorAll('.para1')
// console.log(dive)



const mainHeading = document.querySelector('#intro')
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


/////Adding , removing, toggling class to the element or node

// mainHeading.classList.add('hide')
// // mainHeading.classList.remove('hide')

// mainHeading.classList.replace('hide','transform')


//////  Creating element using DOM

// const anotherHeading = document.createElement('h2')
// anotherHeading.textContent = 'Another Heading'
// document.body.appendChild(anotherHeading)

// const list = document.getElementById('aFruit')
const lilist = document.createElement('li')
lilist.textContent = 'Dragonfruit'
document.getElementById('aFruit').appendChild(lilist)

