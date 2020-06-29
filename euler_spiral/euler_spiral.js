
window_height = window.innerHeight;
window_width = window.innerWidth;
var c = document.getElementById("myCanvas");
c.height = window_height;
c.width = window_width;
console.log(window_height)
var ctx = c.getContext("2d");

x1 = window_width/2;
y1 = window_height/2;
r =  1 + Math.random()*6;

theta = 0.05+Math.random()*0.3;

console.log("theta: "+ theta);
console.log("r: "+ r);
theta0 = theta;
i=0;
var color=[10,10,10];
var flipflop=[true,true,true];

function update_color(min,max,z,step)
{
    if(flipflop[z] == true)
        {
            color[z] += step
            if(color[z]>max)
            flipflop[z]=false
        }else
        {
            color[z] -= step 
            if(color[z]<min)
            flipflop[z]=true
        }
}

function refresh_colors(min,max)
{
    for(z = 0; z < 3; z++)
{
    if(z==0)
    {
        update_color(min,max,z,0.3)
    }else if(z==1)
    {
        update_color(min,max,z,0.5)
    }else
    {
        update_color(min,max,z,0.7)
    }
}

}
function draw_spiral()
{
    i++;
x2 = x1 + r * Math.cos(theta);
y2 = y1 + r * Math.sin(theta);
ctx.beginPath();
ctx.moveTo(x1, y1);
ctx.lineTo(x2, y2);



refresh_colors(0,200);
ctx.strokeStyle = 'rgb(' + Math.floor(color[0]) + ',' + Math.floor(color[1]) + ',' + Math.floor(color[2]) + ')';

ctx.stroke();
x1 = x2;
y1 = y2;
theta = theta + i*theta0;

setTimeout(draw_spiral,Math.pow((Math.cos(i*theta0)+1),1.4)*2);

}
draw_spiral();