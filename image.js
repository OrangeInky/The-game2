var canvas = document.getElementById('background');
var ctx = canvas.getContext("2d");

function drawbackground() {
    ctx.fillStyle = "orange";
    ctx.Rect(0, 0, 1000, 1000);
}

drawbackground();

alert("joe matchMedia");