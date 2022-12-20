let dragged = null;
var cars = [];
var cartStart = cart.getElementsByTagName("p")[0];
let items = document.querySelectorAll('.car_block');
    items.forEach(function(item) {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragend', handleDragEnd);
});

function handleDragStart(e) {
    dragged = e.target.parentNode;
    this.style.opacity = '0.4';
}
function handleDragEnd(e) {
    this.style.opacity = '1';
    cart.classList.remove("dragover");
}
function handleDragOver(e) {
    e.preventDefault();
}

cart.addEventListener("dragenter", (event) => {
    cart.classList.add("dragover");
});

cart.addEventListener("dragleave", (event) => {
    cart.classList.remove("dragover");
});

cart.addEventListener("dragover", (event) => {
    event.preventDefault();
    cart.classList.add("dragover");
});

cart.addEventListener("drop", (event) => {
    event.preventDefault();
    let item = document.createElement("p");
    item.innerHTML = dragged.querySelector('.model').innerHTML+" ";
    item.id = dragged.querySelector('.model').innerHTML;
    let contains = document.getElementById(item.id);
    if(contains == null)
    {
        item.insertAdjacentHTML("beforeEnd", '<span id="count">1</span>');
        cartStart.after(item);
    }
    else
    {
        let count = document.getElementById("count");
        count.innerHTML++;
    }
    let price = dragged.querySelector(".price span").innerHTML;
    totalCost.innerHTML = Number(totalCost.innerHTML) + Number(price);
});
