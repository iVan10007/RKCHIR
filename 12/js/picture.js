let img = document.getElementById("img");
let width = document.documentElement.clientWidth;
let height = document.documentElement.clientHeight;
let imgWidth = document.getElementById("img").clientWidth;
let imgHeight = document.getElementById("img").clientHeight;

let l = (width - imgWidth)/2;
let t = (height-imgHeight)/2

img.style.position = "fixed";
img.style.left = l + "px";
img.style.top = t + "px";