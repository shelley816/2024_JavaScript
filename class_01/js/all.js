
document.getElementById('countID').onclick = function(){
    var hamPrice = 55;
    var drinkPrice = 35;
    var hamburgerNum = parseInt(document.getElementById('hamburgerID').value) * hamPrice;
    var drinkNum = parseInt(document.getElementById('drinkID').value) * drinkPrice;
    document.getElementById('totalID').textContent = hamburgerNum + drinkNum;
    console.log(typeof(hamburgerNum + drinkNum));
}

/*
function getTotalPrice(xNum, yNum){
    var hamPrice = 55;
    var drinkPrice = 35;
    var totalPrice = (hamPrice * xNum) + (drinkPrice * yNum);
    return total;
}
*/