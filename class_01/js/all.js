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

var list = document.querySelector('.list');
function updateList(){
    var storeLen = store.length;
    var str = '';
    for (var i = 0; i < storeLen; i++) {
        str += "<li data-num='"+i+"'>"+store[i].manager+"</li>";
        list.innerHTML = str;
    }
}
updateList();

function checkList(e){
    var num = e.target.dataset.num;
    if(e.target.nodeName !== 'LI'){return};
    store.splice(num,1);
    updateList();
}

list.addEventListener('click',checkList);