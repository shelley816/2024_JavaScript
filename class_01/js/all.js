
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
// 找出分店產品大於70即停止迴圈

var storeTotal = store.length;
for ( var i = 0; i < storeTotal; i++ ) {
    if(store[i].productItem > 70){
        console.log(store[i].manager + ' 的店產品大於 70');
        store[i].productItem -= 70;
        console.log(store[i].manager + ' 剩餘 ' + store[i].productItem + ' 個')
        break; //只是符合 if 條件就停止
    };
}
