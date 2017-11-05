var rect = require("./rectangle");

function solveRect(l,b){
    console.log("Solving for length = "+l+" and breadth = "+b);
   rect(l,b, (err,rectangle) => {
       if(err){
       console.log("ERROR: ",err.message);
       }
       else{
        console.log("The area of the followign rectangle is: ",rectangle.area());
        console.log("The perimeter of the following rectangle is: ",rectangle.perimeter());
   
      } 
});
   console.log("This is called after calling rect()");
 }

 solveRect(3,4);
 solveRect(5,6);
 solveRect(0,5);
 solveRect(-3,4);