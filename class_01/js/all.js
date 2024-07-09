var stories = [
    {manager:'Mary'},{manager:'Carol'}
];
var storiesStr = JSON.stringify(stories); //將 array 轉譯為 string
localStorage.setItem('managers',storiesStr); //轉成 string 才能放入 localStorage
var storiesAr = JSON.parse(storiesStr); //再將 string 轉譯為 array
console.log(storiesAr[1].manager); //轉成 array 才能取出資料