
// dot vs bracket notation

const postProduct = {
        firstName : 'Ram',
        lastName : 'Shrestha',
        
        paymentMessage : (paymentBool)=> paymentBool? console.log('Product is purchaased successfully.') : console.log('Failed to purchase product.')
    
}

// console.log(postProduct.firstName)
// console.log(postProduct.lastName)

same = 'Name'
console.log(postProduct['first' + same])
console.log(postProduct['last' + same])