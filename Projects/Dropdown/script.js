const optionMenu = document.querySelector('.select-menu'),
selectBtn = optionMenu.querySelector('.select-btn'),
options = optionMenu.querySelectorAll('.option'),
sBtn_text = optionMenu.querySelector('.sBtn-text');
//   optionMenu = document.querySelector('.select-menu')
console.log(options)

 options.forEach( option =>{
    console.log(option)
        option.addEventListner('click', ()=>{
            let selectedOption = option.querySelector('.option-text').innerText;
            sBtn_text.innerText = selectedOption
            console.log(selectedOption);
        })
    })


