var el = document.querySelectorAll('.boxS');
var elLen = el.length;

for (var i = 0; i < elLen; i++) {
    el[i].addEventListener('mousemove',function(e){
        alert('碰到我了！')
    },false);
}