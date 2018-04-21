// grab the canvas element, get the context for API access and
// preset some variables
var canvas = document.querySelector( 'canvas' ),
    c = canvas.getContext( '2d' ),
    mouseX = 0,
    mouseY = 0,
    width = 300,
    height = 300,
    colour = 'black',
    mousedown = false;

// resize the canvas
canvas.width = width;
canvas.height = height;
c.beginPath();
c.rect(0,0,300,300);
c.fillStyle = "white";
c.fill();


function draw() {
    if (mousedown) {
        // set the colour
        c.fillStyle = colour;
        // start a path and paint a circle of 20 pixels at the mouse position
        c.beginPath();
        c.arc( mouseX, mouseY, 10 , 0, Math.PI*2, true );
        c.closePath();
        c.fill();
    }
}

// get the mouse position on the canvas (some browser trickery involved)
canvas.addEventListener( 'mousemove', function( event ) {
    if( event.offsetX ){
        mouseX = event.offsetX;
        mouseY = event.offsetY;
    } else {
        mouseX = event.pageX - event.target.offsetLeft;
        mouseY = event.pageY - event.target.offsetTop;
    }
    // call the draw function
    draw();
}, false );

canvas.addEventListener( 'mousedown', function( event ) {
    mousedown = true;
}, false );
canvas.addEventListener( 'mouseup', function( event ) {
    mousedown = false;
}, false );

var link = document.createElement('a');
link.innerHTML = '<button class="btn btn-success">Kiểm tra</button>';
link.addEventListener('click', function(ev) {
    link.href = canvas.toDataURL();
    saveImage(canvas.toDataURL('image/png'))
    console.log(link.href);
}, false);
document.body.appendChild(link);


function saveImage(canvasData) {
        var xmlHttpReq = false;

        if (window.XMLHttpRequest) {
            ajax = new XMLHttpRequest();
        }
        else if (window.ActiveXObject) {
            ajax = new ActiveXObject("Microsoft.XMLHTTP");
        }

        ajax.open("POST", "../controllers/save.php", false);
        ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        ajax.onreadystatechange = function() {
        console.log(ajax.responseText);
    }
    ajax.send("imgData=" + canvasData);
}


