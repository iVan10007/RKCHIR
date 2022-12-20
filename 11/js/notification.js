var notifications = document.getElementById("dropdown-content");
var button = document.getElementById("notification");
var base = document.getElementById("base");
var circle = document.getElementById("circle");
var k = 1;
var isPaused = false;

function notification()
{
    if(notifications.contains(base))
        notifications.removeChild(base);
    circle.innerHTML = k;
    k++;
    let message = document.createElement("a");
    message.innerHTML = "Уведомление";
    notifications.append(message)
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
