
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
// 撈出所有分店的產品數量並加總

var storeTotal = store.length;
var productTotal = 0;
for ( var i = 0; i < storeTotal; i++ ) {
    productTotal += store[i].productItem
}

console.log('所有分店產品數量加總共 ' + productTotal + ' 個');