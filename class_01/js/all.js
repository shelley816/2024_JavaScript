
// createElement
var str = document.createElement('span');
str.innerHTML = '1234';

document.querySelector('#main2').appendChild(str);

// createElement + for
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

var el2 = document.querySelector('.list');
var storeLen = store.length;
for (let i = 0; i < storeLen; i++) {
    var str = document.createElement('li');
    str.textContent = store[i].manager;
    el2.appendChild(str);
}