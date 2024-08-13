const send = document.querySelector('.send');

send.addEventListener('click',login,false);

function login(){
    const emailStr = document.querySelector('.account').value;
    const passwordStr = document.querySelector('.password').value;
    let account = {};
    account.email = emailStr;
    account.password = passwordStr;

    const xhr = new XMLHttpRequest();
    xhr.open('post','https://escape-room.hexschool.io/api/user/signin',true);
    xhr.setRequestHeader('Content-type','application/json');
    let data = JSON.stringify(account);
    xhr.send(data);
    xhr.onload = function(){
        let callbackData = JSON.parse(xhr.responseText);
        let infoStr = callbackData.success;
        if (infoStr == true){
            alert(callbackData.message);
        }else{
            alert(callbackData.message);
        }
    }
}