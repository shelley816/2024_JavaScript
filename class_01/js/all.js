var account = {
    email: 'sskkeel@gmail.com',
    password: '4568912'
}
var xhr = new XMLHttpRequest();
xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signup',true);
xhr.setRequestHeader("Content-type","application/json");
// 不能直接傳送物件，要把物件轉成字串
var data = JSON.stringify(account);
xhr.send(data);