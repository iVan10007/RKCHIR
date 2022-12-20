var wrapper = document.getElementById("wrapper")
var elements = ["яблоко", "груша", "слива", "ананас"];
var k = 0;
for(let i=0; i<elements.length; i++){
    let div = document.createElement("div");
    div.id = "item" + i;
    wrapper.append(div);
    div.innerHTML = elements[i];
}

var sort = document.getElementById("sort");
sort.addEventListener("click",(e)=>
{
    elements.sort();
    for(let i=0; i<elements.length; i++){
        let block = document.getElementById("item"+i)
        block.innerHTML = elements[i];
    }
});

var order = document.getElementById("order");
order.addEventListener("click",(e)=>
{
    let from = prompt("Введите номер элемента")-1;
    let to = prompt("С каким элементом его поменять?")-1;
    let buf = elements[from];
    elements[from] = elements[to];
    elements[to] = buf;
    for(let i=0; i<elements.length; i++){
        let block = document.getElementById("item"+i)
        block.innerHTML = elements[i];
    }
});

var del = document.getElementById("delete");
del.addEventListener("click",(e)=>
{
    elements.shift();
    let block = document.getElementById("item"+k);
    wrapper.removeChild(block);
    k++
});