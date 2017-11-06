module.exports = (x,y,callback) => {
    if( x<= 0 || y<=0)
    {
        setTimeout(() => 
        callback(new Error("The dimensions of the rectangle are not correct"),
        null),
        2000);
    }
    else{
        setTimeout(() => 
        callback(null,
        {
            perimeter: () => (2*(x+y)),
            area: () => (x*y)
        }),
        2000);
    }
}





