var x = document.getElementById("x");
var y = document.getElementById("y");

  document.addEventListener( "click", function(e) {
    x.innerHTML = "X: " + e.pageX;
    y.innerHTML = "Y: " + e.pageY;
  });