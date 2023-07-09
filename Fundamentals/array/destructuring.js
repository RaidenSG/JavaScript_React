// const arr = [1,2,3,4]
// // const a = arr[0]
// // const b = arr[1]
// // const c = arr[2]
// // const d = arr[3]
// // console.log(a,b,c,d)

// const [w,x,y,z] = arr
// // console.log(w,x,y,z)

const shop = {
    name: 'Kirana Shop',
    location: 'Pokhara, Kaski, Nepal',
    goods: ['Vegetables','Cusmetics','Fruits','Dairy','Organic'],
    price: ['cheap','moderate','expensive'],
    pick: (first,second)=>{
        return [shop.goods[first],shop.price[second]]
    },
};
// console.log(shop.pick(3,2))

let [a,,b] = shop.goods
console.log(a,b)



// [a,b] = [b,a];
// console.log(a,b);
// console.log(food,cost)

// const [food,cost] = shop.order(3,2)

//nested destructuring
// const nested = [2,4,[5,6]]
// const [i,,[j,k]] = nested
// console.log(i,j,k)

//default value
let default1 = [1,2]
let [x=1,y=1,z=1] = default1
console.log(x,y,z)