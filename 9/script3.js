var x = null;
var y = null;
var show = false;
    
document.addEventListener('mousemove', onMouseUpdate, false);
document.addEventListener('mouseenter', onMouseUpdate, false);
    
function onMouseUpdate(e) {
  x = e.pageX;
  y = e.pageY;
  onMouseMove();
}

function getMouseX() {
  return x;
}

function getMouseY() {
  return y;
}

function onClick()
{
    show = !show;
    if(window.getComputedStyle(button ,null).getPropertyValue('background-color') == 'rgba(0, 0, 0, 0)')
    {
        button.style.backgroundColor = 'indianred';
        button.style.color = 'white';
        
    }
    else{
        button.style.backgroundColor = 'transparent';
        button.style.color = '#888';
    }
}

function onMouseMove()
{
      if(!show)
        return;

      let div = document.createElement('div');
      
      div.className = "mydiv";
      div.innerHTML = "<img id='heart' src='file://C:/Users/Vanya/Desktop/Практические РКЧИР/9/img/heart.png'>";
      div.style.left = getMouseX() + 'px';
      div.style.top = getMouseY() + 'px';

      document.body.append(div);      
}
