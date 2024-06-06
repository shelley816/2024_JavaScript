
var store = {
    manager: 'John',
    productsSort: ['classic', 'casual', 'special'],
    classicItem: 20,
    casualItem: 35,
    specialItem: 10,
    recommend: function(){
        console.log(store.productsSort[0] + '是經典系列，' + store.productsSort[1] + '則是比較休閒的款式。')
    },
    totalItem: function(){
        var num = store.classicItem + store.casualItem + store.specialItem;
        console.log('總共有' + num + '個商品。')
    }
}

store.recommend();
store.totalItem();