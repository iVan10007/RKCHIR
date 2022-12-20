function Cart(startingValue) {
    this.value = startingValue;
    this.add = function() {
        this.value += +prompt('Сколько нужно добавить?', 0);
    };
};

var cart = new Cart(0);
var div = document.getElementById("cart");
div.innerHTML = cart.value;
div.addEventListener("click",(e)=>
{
    cart.add();
    div.innerHTML = cart.value;
});
