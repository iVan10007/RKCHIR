var text = document.getElementById("infop");
var text1 = document.getElementById("infop1");
function truncate(str, n) {
    debugger;
    if (str.length > n) {
        return str.slice(0, n - 1 ) + "…";
    }

    return str;
}

text.innerHTML = truncate(text.innerHTML, 20);
text1.innerHTML = truncate(text1.innerHTML, 20);