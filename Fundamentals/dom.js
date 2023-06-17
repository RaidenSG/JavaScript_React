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
// const lilist = document.createElement('li')
// lilist.textContent = 'Dragonfruit'
// document.getElementById('aFruit').appendChild(lilist)


// const add = document.querySelector('#aFruit')
// const liste = document.createElement('li')
// liste.textContent = 'mototbike'
// add.appendChild(liste)

// mainHeading.style.cursor = 'pointer'
// mainHeading.addEventListener('click', ()=>{
//     const text = 'MouseOver'
//     alert(text)
// })

/// NodeLists
// const lists = document.querySelectorAll('.fruit')
// lists.forEach((e,i,nl)=>{
//     e.addEventListener('click', ()=>{
//         let data = e.textContent
//         alert(data)
//     })
// })
// console.log(lists)



// const list = document.querySelectorAll('.fruit')
// list.forEach(e=>{
//     e.addEventListener('click', ()=>{
//         let show = e.textContent
//         let data = show.toUpperCase()
//         alert(data)
//     })
// })
let text = mainHeading.textContent
mainHeading.addEventListener('mouseover',()=>{
    let data = text
    let uppercasedata = data.toUpperCase()
    mainHeading.textContent = uppercasedata
})
mainHeading.addEventListener('mouseout',()=>{
    let data = text
    let lowerCaseData = data.toLowerCase()
    mainHeading.textContent = lowerCaseData
})

// const list = document.querySelectorAll('.fruit')
// list.forEach((e=>{
//     e.addEventListener('mouseover',()=>{
//         let data = e.textContent
//         let upper = data.toUpperCase()
//         e.textContent = upper
//     })
//     e.addEventListener('mouseout',()=>{
//         let data = e.textContent
//         let lower = data.toLowerCase()
//         e.textContent = lower
//     })
// }))


console.log(document.getElementById('intro').innerHTML = `This is changed using inner HTML`)