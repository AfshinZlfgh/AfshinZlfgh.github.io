function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

window_height = window.innerHeight;
window_width = window.innerWidth;
var c = document.getElementById("myCanvas");
c.height = window_height;
c.width = window_width;
var ctx = c.getContext("2d");

x1 = window_width/2;
y1 = window_height/2;
r =  10;
theta = -0.5;
theta0 = theta;
i=0;
while (i<5000) {
    i++;
x2 = x1 + r * Math.cos(theta);
y2 = y1 + r * Math.sin(theta);

ctx.moveTo(x1, y1);
ctx.lineTo(x2, y2);
ctx.stroke();
x1 = x2;
y1 = y2;
theta = theta + i*theta0;
sleep(1000);
}