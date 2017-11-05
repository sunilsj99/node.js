var rect = require("./rectangle");

function solveRect(l,b){
    console.log("Solving for length = "+l+" and breadth = "+b);
    if( l<= 0 || b<=0)
    {
        console.log("The dimensions of the rectangle are not correct");
    }
    else{
        console.log("The area of the rectange is area = "+ rect.area(l,b));
        console.log("The perimeter of the rectangle is "+ rect.perimeter(l,b));
    }
 }

 solveRect(3,4);
 solveRect(5,6);
 solveRect(0,5);
 solveRect(-3,4);