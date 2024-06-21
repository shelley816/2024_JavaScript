
var store = [
    {
        manager: 'John',
        year: 8,
        staffName: ['Mary', 'Bibi', 'Fifi'],
        productItem: 76
    },{
        manager: 'Lily',
        year: 5,
        staffName: ['Bobo', 'Karen', 'Shelly'],
        productItem: 89
    },{
        manager: 'Katie',
        year: 2,
        staffName: ['Carol', 'Sam', 'Joyce'],
        productItem: 66
    }
];
// 撈出產品數大於70的店長

for ( var i = 0; i < store.length; i++ ) {
    if(store[i].productItem > 70 ) {
        console.log(store[i].manager + ' 的產品數量有 ' + store[i].productItem + ' 個');
    }
}