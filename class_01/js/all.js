var list = document.querySelector('.list li');
function checkData(e){
    var num = e.target.dataset.num;
    var cat = e.target.dataset.cat;
    console.log('編號是：'+num);
    console.log('養'+cat+'隻貓');
}
list.addEventListener('click',checkData,false);