// display message function
const displayMsg = (msg, id, color) =>{
    document.getElementById(id).innerText = msg
    document.getElementById(id).style.color = color
}
const fName = document.getElementById('first_name')
fName.addEventListener('keyup', ()=>{
    let fNameValue = fName.value
    console.log(fNameValue)
    //checking if first name is empty
     if(fNameValue === ''){
        displayMsg('First name is required','fnamemsg', 'red')
        return false
     }
     else if (fNameValue.length < 3){
        displayMsg('First name must contain more than two letters','fnamemsg','red')
        return false
     }
     else if(!fNameValue.match(/^[A-Za-z]+$/)){
        displayMsg('First name must not contain numbers or special characters','fnamemsg','red')
        return false
     }
    else{
        displayMsg('First name is valid','fnamemsg','green')
        return true
     }
})
const lName = document.getElementById('last_name')
lName.addEventListener('keyup', ()=>{
    let lNameValue = lName.value
    // console.log(lNameValue)

    //checking if last name is empty
     if(lNameValue === ''){
        displayMsg('Last name is required','lnamemsg', 'red')
        return false
     }
     else if (lNameValue.length < 3){
        displayMsg('Last name must contain more than two letters','lnamemsg','red')
        return false
     }
     else if(!lNameValue.match(/^[A-Za-z]+$/)){
        displayMsg('First name must not contain numbers or special characters','lnamemsg','red')
        return false
     }
    else{
        displayMsg('Last name is valid','lnamemsg','green')
        return true
     }
})


//email validation
const email = document.getElementById('email')
email.addEventListener('onkey', () => {
    let emailValue = email.value
    console.log('Working')
    //checking if email is empty
    if(emailValue === ''){
        displayMsg('Email is required','emailmsg', 'red')
        return false
    }
    //   regex for email =  /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|hotmail\.com|icloud\.com)$/
    // else if(!email.match(/^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|hotmail\.com|icloud\.com)$/)){
    //     displayMsg('Email is not valid','emailmsg', 'red')
    //     return false
    // }
    else{
        displayMsg('Email is valid', 'emailmsg', 'green')
        return true
    }
})

//password validation
const pass = document.getElementById('password')
pass.addEventListener('onkey', () => {
    let passValue = pass.value
    //checking if password is empty
    if(passValue === ''){
        displayMsg('Password is required','passwordmsg', 'red')
        return false
    }
    else if(passValue <8){
        displayMsg('Password should be atleast 8 character long', 'passwordmsg', 'red')
    }
    else{
        displayMsg('Password is valid', 'passwordmsg','green')
    }
})
const display = (msg, id) =>{
    let text = document.getElementById(id)
    text.value = msg
    
}
let detail = {
    "first_name" : "Ram",
    "last_name" : "Shrestha",
    "email" : "ramShrestha12@gmail.com"
}
const store = JSON.stringify(detail)
localStorage.setItem('info', store)

const data  = localStorage.getItem('info')
const getData = JSON.parse(data)
//console.log(getData.first_name)
display(getData.first_name,'first_name')
display(getData.last_name,'last_name')
display(getData.email,'email')
