document.onkeyup = function() {
    const keyCode = window.event ? window.event.keyCode : event.which;
    changeColor(keyCode);
}

function changeColor(keyCode) {
    if (keyCode == 82) { // red
        document.getElementById('tests').style.background = "red";
    } else if (keyCode == 89) { // yellow
        document.getElementById('tests').style.background = "yellow";
    } else if (keyCode == 87) { // white
        document.getElementById('tests').style.background = "white";
    } else if (keyCode == someOtherKeyCode) {
        // Other color change
    }
}