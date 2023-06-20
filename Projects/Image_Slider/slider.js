//image filename array
let img_array = ['a.webp','b.webp','c.webp','d.webp']
//array lenght
let arr_length = img_array.length
//initial index value
let i = 0

//accessing elements
const sliderImg = document.getElementById('image')
const nextBtn = document.querySelector('.right')
const preBtn = document.querySelector('.left')


 nextBtn.addEventListener('click', ()=>{
            i++
            i=i%arr_length
            sliderImg.src = `images/${img_array[i]}`
})


preBtn.addEventListener('click', ()=>{
    i--
    if(i<0){
        i=arr_length-1
    }
    sliderImg.src = `images/${img_array[i]}`
})

//slide autoplay

let set = setInterval(()=>{
    i++
    i=i%arr_length
    sliderImg.src = `images/${img_array[i]}`
},2000)

// console.log(set)
//  stop = () =>{
//     clearInterval(set)
// }

//  start = () => {
//     set = setInterval(()=>{
//         i++
//         i=i%arr_length
//         sliderImg.src = `images/${img_array[i]}`
// },5000)
//}
