// 指定 dom
var list = document.querySelector('.list');
var sendData = document.querySelector('.send')
var data = JSON.parse(localStorage.getItem('listData')) || [];

// 監聽與更新
sendData.addEventListener('click', addData);
list.addEventListener('click', toggleDone);
updateList(data);

// 加入列表，並同步更新網頁與 localstorage
function addData(e){
    e.preventDefault();
    var txt = document.querySelector('.inputItem').value;
    var todo = {
        content: txt
    };
    data.push(todo);
    updateList(data);
    localStorage.setItem('listData', JSON.stringify(data));
}

// 更新網頁內容
function updateList(items){
    str = '';
    var len = items.length;
    for (var i = 0; i < len; i++) {
        str += '<li><a href="#" data-num="' + i + '"+>刪除</a> <span>' + items[i].content + '</span></li>'
    }
    list.innerHTML = str;
}

function toggleDone(e){
    e.preventDefault();
    if(e.target.tagName !== 'A'){return};
    var num = e.target.dataset.num;
    data.splice(num, 1);
    updateList(data);
}