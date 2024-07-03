

function checkContent(e){
    var str = e.target.value;
    if(str==''){
        alert('請輸入數量');
    }
}

var inputHam = document.querySelector('#hamNumId');
inputHam.addEventListener('blur',checkContent,false)