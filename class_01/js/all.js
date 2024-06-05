
function getTotalPrice(xNum, yNum){
    var hamPrice = 55;
    var drinkPrice = 35;
    var totalPrice = (hamPrice * xNum) + (drinkPrice * yNum);
    return totalPrice;
}

document.getElementById('countID').onclick = function(){
    var hamburgerNum = parseInt(document.getElementById('hamburgerID').value);
    var drinkNum = parseInt(document.getElementById('drinkID').value);

    var clientOrder = getTotalPrice(hamburgerNum, drinkNum);
    document.getElementById('totalID').textContent = clientOrder;
}