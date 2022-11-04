    var mouseEvent="empty";
     var last_position_of_x, last_position_of_y;
     canvas = document.getElementById('myCanvas');
     ctx = canvas.getContext("2d");
    
   color= Pink; 
   width_of_line= 1;
    

    canvas.addEventListener("mousedown", my_mousedown);

    function my_mousedown(e)
    {
        color = document.getElementById("color").value;
        width_of_line= document.getElementById("width_of_line").value;
        
        //Additional Activity start
        
        //Additional Activity ends

        mouseEvent = "mousedown";
    }
    canvas.addEventListener("mouseup" , my_mouseup);
    function my_mouseup(e)
    {
        mouseEvent = "mouseup";

    } 

canvas.addEventListener("mouseleave" , my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
        
    }
canvas.addEventListener("mousemove" , my_mousemove);
    function my_mousemove(e)
    {
        current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.clientY - canvas.offsetTop;
        if(mouseEvent=="mousedown")
        ctx.beginpath();        
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        //If yes call "beginPath()".
        
        // Assign values to strokeStyle and lineWidth of canvas "ctx".
        

        //print the current x and y coordinate.
        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);

        //Call moveTo() with parameters last_position_of_x  and last_position_of_y.
        // The drawing begins from these points.
        

        //print the current x and y coordinate.
        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        //Call "lineTo()" function with 'current_position_of_mouse_x' and 'current_position_of_mouse_y'.
        //Creation if lines end at these points
        

        //Now we will draw the line using the stroke() function.
        
        
     } {
  // "last_position_of_x" and "last_position_of_y" is updated with current mouse position of x and y.
        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
     }


//Additional Activity
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
