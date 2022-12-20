let user = prompt("Введите логин");
if(user == "Админ")
{
    let pass = prompt("Введите пароль");
    if(pass == "Я главный")
        alert("Здравствуйте!");
    else if(pass == null || pass == "")
        alert("Отменено");
    else
    alert("Неверный пароль");
}
else
    alert("Я вас не знаю");