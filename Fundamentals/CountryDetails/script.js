const flagImg = document.querySelector('img')
const inputCountry = document.querySelector('#countries')
const fetchBtn = document.getElementById('fetch-btn')
const capital = document.getElementById('capital')
const shortName = document.getElementById('native-name')
const population = document.getElementById('population')
const area = document.getElementById('area')
const region = document.getElementById('region')
const subregion = document.getElementById('subregion')

//fetching api onclick of the button

fetchBtn.addEventListener('click', ()=>{
    const countryName = inputCountry.value
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true
    `)
    .then(res=>res.json())
    .then(data=>{
        flagImg.src = `${data[0].flags.png}`
        capital.textContent = `${data[0].capital[0]}`
        population.textContent = `${data[0].population}`
        shortName.textContent = `${data[0].altSpellings[0]}`
        area.textContent = `${data[0].area}`
        region.textContent = `${data[0].region}`
        subregion.textContent = `${data[0].subregion}`
    })
    .catch(err=>console.log('Something is wrong!!!!'))
})