var words = ['Growing', 'building'];
var index = 0;

function rotate() {
    "use strict";
    document.getElementById('text').innerHTML = "Our Business Is " + words[(index++)%(words.length)] + " Your Business!!";
}

setInterval(rotate, 2000);