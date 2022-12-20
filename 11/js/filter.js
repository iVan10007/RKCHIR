var out = document.getElementById("out");
var a = prompt("Введите нижнюю границу");
var b = prompt("Введите верхнюю границу");
var input = prompt("Введите элементы через пробел");
var arr = input.split(" ");
var str = "";
for(var i=0; i<arr.length; i++){
    if(+arr[i] >= +a && +arr[i] < +b)
        str += arr[i] + " ";        
};

out.innerHTML = "Элементы больше " + a + " и меньше " + b + ": " + str;
