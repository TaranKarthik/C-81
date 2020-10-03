let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let color = "black";

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = color;

ctx.arc(200,200,20,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    color = document.getElementById("color").value;
    console.log(color);
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    console.log("X-"+mouse_x+" Y- "+mouse_y);
    circle(mouse_x,mouse_y);
}

function circle(mouse_x,mouse_y){
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = color;

    ctx.arc(mouse_x,mouse_y,20,0,2*Math.PI);
    ctx.stroke();
}

function clear_Area(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}