var elBox = document.querySelector('.box');
elBox.addEventListener('click',function(e){
    alert('我是Box');
    e.stopPropagation();
},false)

var elBody = document.querySelector('.body');
elBody.addEventListener('click',function(){
    alert('我是Body');
},false)