const arr = [1,2,3,4]
// const a = arr[0]
// const b = arr[1]
// const c = arr[2]
// const d = arr[3]
// console.log(a,b,c,d)

const [w,x,y,z] = arr
// console.log(w,x,y,z)

const shop = {
    name: 'Kirana Shop',
    location: 'Pokhara, Kaski, Nepal',
    goods: ['Vegetables','Cusmetics','Fruits','Dairy','Organic'],
    price: ['cheap','moderate','expensive'],
    pick: function(first,second){
        return [shop.goods[first],shop.price[second]]
    },
};
console.log(shop.pick(3,2))

// const [ele1,ele2] = shop.categories
// console.log(ele1,ele2)

// [ele1,ele2] = [ele2,ele1];
// console.log(ele1,ele2);
// const [food,cost] = shop.order(3,2)
// console.log(food,cost)