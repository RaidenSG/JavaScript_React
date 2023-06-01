const calAge = birthYear => 2023 - birthYear
const years = [1998, 1999, 2000 ,2010, 2020]
console.log(calAge(years[4]))

years[7] = 2000      //creats array holes
console.log(years)
