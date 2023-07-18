const copybtn = document.getElementById('copy-btn')




copybtn.addEventListener('click', ()=>{
        copybtn.textContent = 'Linked copied!'
        setTimeout(()=>{
            copybtn.textContent= 'Copy link'
        },500)
})