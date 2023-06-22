let x = {
    name : 'Ram',
    age: 25,
    show: function(){
        setInterval (() => {
               console.log(`${this.name} is ${this.age} years old.`)
           },1000)
            
    }
}
x.show()