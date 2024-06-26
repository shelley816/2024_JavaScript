
// innerHTML
var el = document.querySelector('#main');
var str = '<h1 class="titleIDRed">Hi~</h1>';
el.innerHTML = str+'<h2>Shelley</h2>';

// combine HTML in
var el2 = document.querySelector('#main2');
var link = 'https://tw.yahoo.com/';
var brand = 'yahoo';
el2.innerHTML = '<li><a href="'+ link +'">'+ brand +'</a></li>';

// innerHTML + for
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

var el3 = document.querySelector('#main3');
var storeLen = store.length;
var str = '';
for (let i = 0; i < storeLen; i++) {
    var content = '<li>'+ store[i].manager +'</li>';
    str += content;
}
el3.innerHTML = str;