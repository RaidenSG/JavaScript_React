// // HEre's array having objects as its elements

// const data = [
//     {id : 1, name: 'Ram'},
//     {id : 2, name: 'Shyam'},
//     {id : 3, name: 'Hari'},
//     {id : 4, name: 'Harry'},
//     {id : 5, name: 'Gita'},
//     {id : 6, name: 'Sita'},
//     {id : 7, name: 'Sita'},
// ]

// // => WAP to create array of objects having odd id.



// const getData = data.filter(e => e.id%2 !== 0)
// // let arr1= getData.pop();
// let arr2= getData.push();
// console.log(arr2)
// // console.log(arr1)
// // console.log(getData)
// // console.log(getData.reverse())


// console.log(getData)
// console.log(getData.reverse())

const product = [
    {id: 1, productName: 'Yellow Shirt', productPrice: 400},
    {id: 2, productName: 'Red Shirt', productPrice: 1900},
    {id: 3, productName: 'Blue Shirt', productPrice: 600},
    {id: 4, productName: 'Purple Shirt', productPrice: 550},
    {id: 5, productName: 'Black Shirt', productPrice: 300},
    {id: 6, productName: 'White Shirt', productPrice: 800},
    {id: 7, productName: 'Orange Shirt', productPrice: 750},
]

// WAP to create an array of objects having productPrice that ranges from 200 to 600

const output = product.filter(e => e.productPrice>=200 && e.productPrice<=600)

console.log(output)