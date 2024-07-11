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
    var type = e.target.nodeName;
    if(type !== 'LI'){return};
    var num = e.target.dataset.num;
    console.log(store[num].productItem);
}

list.addEventListener('click',checkList);