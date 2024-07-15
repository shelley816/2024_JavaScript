var inputCon = [];
var clickBtn = document.querySelector('.clickBtn');

function getInputData(){
    //取得輸入框文字
    var str = document.querySelector('.inputItem').value;
    updateList();
    
    //塞入陣列
    inputCon.push(str);
    //將陣列轉成字串
    var inputConStr = JSON.stringify(inputCon);
    //將轉成字串的陣列放到localStorage
    localStorage.setItem('listItem',inputConStr);
    //將localStorage的字串轉成陣列
    var inputConaAr = JSON.parse(localStorage.listItem);
    

    console.log(inputConaAr);
}



clickBtn.addEventListener('click',getInputData,false);