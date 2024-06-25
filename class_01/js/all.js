
// 改變連結
var el = document.querySelector('.titleClass a');
el.setAttribute('href','https://www.google.com/');

// 增加原本沒有的屬性
var el2 = document.querySelector('.titleClass');
el2.setAttribute('id','titleIDRed');

// 取出屬性值
var el3 = document.querySelector('.titleClass a').getAttribute('href');
console.log(el3);

// 取出標籤裡的文字內容
var el4 = document.querySelector('.titleClass a').textContent;
console.log(el4);

// 取出標籤裡的內容
var el5 = document.querySelector('.titleClass').innerHTML;
console.log(el5);