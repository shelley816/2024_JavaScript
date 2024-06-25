// var el = document.getElementById('titleID'); // 讀取獨一無二的 ID，每個標籤只能有一個 ID
// var el = document.querySelector('.titleClass span'); // 可抓標籤名稱, ID, Class... 只取第一筆資料
var el = document.querySelectorAll('.titleClass span'); // 跟上面不同地方在於，可以取得多筆資料

for (var i = 0; i < el.length; i++) {
    el[i].textContent = '編號' + i;
}