var notifications = document.getElementById("dropdown-content");
var button = document.getElementById("notification");
var base = document.getElementById("base");
var circle = document.getElementById("circle");
var k = 0;
var isPaused = false;

circle.innerHTML = k;

function notification()
{
    if(notifications.contains(base))
        notifications.removeChild(base);
    let message = document.createElement("div");
    message.innerHTML = "Уведомление";
    message.style.display = "flex"
    message.style.alignItems = "center";
    let close = document.createElement("div");
    close.id = "close";
    close.innerHTML = "X";
    message.append(close);
    notifications.append(message);
    debugger;
    k++;
    circle.innerHTML = k;
}


function pauseDecorator(func)
{
    return function()
    {
        setInterval(function()
        {
            if(!isPaused)
                func();
        }, 3000);

        button.addEventListener("click",(e)=>
            {
                isPaused = true;
                setTimeout(function(){
                    isPaused = false;
                }, 10000);
            }
        );
    }
}

notification = pauseDecorator(notification);

notification();

notifications.addEventListener("click",function(e){
    let target = e.target;
    if(target.id == "close")
    {
        let message = target.parentElement;
        notifications.removeChild(message);
        debugger;
        k--;
        if(k==0)
            notifications.append(base);
        circle.innerHTML = k;
    }
})
