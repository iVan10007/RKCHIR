var text = document.getElementById("captchaText");
var input = document.getElementById("input");
var submit = document.getElementById("submit");
first = true;
var n = Math.floor(Math.random() * 100);
var m = Math.floor(Math.random() * 100);

text.innerHTML = generateCaptcha();

function checkInput(){
    if(first)
    {
        if(input.value.length == 5)
        {

            if(input.value == text.innerHTML)
            {
                submit.classList.remove("_disabled");
                submit.removeAttribute("disabled")
            }
            else{
                generateSumCaptcha();
                first = false;
            }
        }
    }
    else{
        if(input.value == n+m)
        {
            submit.classList.remove("_disabled");
            submit.removeAttribute("disabled")
        }
    }
}

function generateCaptcha() {
    chrs = 'abdehkmnpswxzABDEFGHKMNPQRSTWXZ';
    var str = '';
    for (var i = 0; i < 5; i++) {
        var pos = Math.floor(Math.random() * chrs.length);
        str += chrs.substring(pos,pos+1);
    }
    return str;
}

function generateSumCaptcha() {
    var str = '';
    str = n + " + " + m + " = ...";
    text.innerHTML = str;
}

function send()
{
    if(isEmpty())
    {
        alert("Ввод некорректен");
        submit.classList.add("_disabled");
        submit.setAttribute("disabled","disabled")
    }
    else
        alert("Проверка пройдена");
}

function isEmpty()
{
    if(input.value == "")
        return true;
    else
        return false;
}


