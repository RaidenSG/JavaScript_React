
//Factory Function

// function postProduct(Name, Price, Description, countInStock, paymentBool){
//     return {
//         name : Name,
//         price : Price,
//         description : Description,
//         stock : countInStock,
//         paymentMessage : ()=> paymentBool? console.log('Product is purchaased successfully.') : console.log('Failed to purchase product.')
//     }
// }

// const jacket = postProduct('Adidas Jacket', 7800, 'This is a very cool jacket', 50, true)
// console.log(jacket)
// jacket.paymentMessage()


//Constructor Function

function Product(productName, productPrice, productDescription, countInStock, paymentBool){
        this.product_name = productName,
        this.produce_price = productPrice,
        this .product_description = productDescription,
        this.count_in_stock = countInStock,
        this.paymentMessage = ()=> paymentBool? console.log('Product is purchaased successfully.') : console.log('Failed to purchase product.')
}

const shirt = new Product ('Cotton Shirt', 1700, 'This is very nice cotton shirt', 40, false)
console.log(shirt)