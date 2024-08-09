const xhr = new XMLHttpRequest();
    // readyState:
    // 0 - 表示你已經產生一個 XMLHttpRequest，但是還沒有連結你想撈的資料
    // 1 - 偵測到你有使用 open()，但你還沒有把資料傳送過去
    // 2 - 偵測到你有用 send
    // 3 - loading
    // 4 - 你撈到資料，數據已經接收到了

xhr .open('get','https://hexschool.github.io/ajaxHomework/data.json',true);
        // 格式、讀取網址、同步與非同步
        // 格式包含 get(讀取資料)、post(傳送資料到伺服器)

xhr.send(null);
        // 空的資料，沒有要傳送資料

// true 為非同步，不會資料傳回來就讓程式繼續跑，等到回傳才會自動回傳
// false 為同步，它會等資料傳回來，才會讓程式碼繼續跑
// 如果檔案很大不能卡在這裡，大部分 framework 是使用非同步

xhr.onload = function(){
    if (xhr.status == 200) {
        console.log(xhr.responseText);
        let str = JSON.parse(xhr.responseText);
        document.querySelector('h3').textContent = str[0].name;
    } else {
        console.log('資料沒有回傳')
    }
}