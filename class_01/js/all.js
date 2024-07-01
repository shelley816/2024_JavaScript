
var btn = document.querySelector('.btn');
btn.onclick = function(e){
    console.log(e);
};

// 比較新的寫法
var btn2 = document.querySelector('.btn2');
btn2.addEventListener('click',function(e){
    console.log(e);
}, false);