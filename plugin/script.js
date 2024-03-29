let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let x = 50;
let y = 50;
let dim = 50;
let decayText = document.createTextNode('Decay: 30');
let decay = document.createElement('h1');
let sec = document.createElement('h1');
let secondsText = document.createTextNode('Seconds: 0');
let ani;
let barrier = document.querySelector('div');
let bx = 200;
let by = 200;
let desc;
let i;
let p = document.querySelectorAll('p');
let cursor = document.createElement('div');
let cx = 0;
let cy = 0;
let all = document.querySelector('*');



function drawCircle() {

    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.arc(x, y, dim, 0, 2 * Math.PI);
    ctx.fill();

}


function addDecayIndicator() {

decay.append(decayText);
document.body.appendChild(decay);

}

function addSecondsIndicator() {

    sec.append(secondsText);
    document.body.appendChild(sec);
    
}

function addDesc() {

desc = ["start game", "reload page", "change color", "hide", "show", "darkmode", "defaultmode"];
cmd_line = ["space", "r", "e", "h", "j", "t", "u"];

for(i = 0; i < p.length; i++) {

    p[i].innerHTML = "press "+ cmd_line[i] + ":" + " " +desc[i] + "\n";

}
    
}

function drawCursor() {

    cursor.id = "cursor";
    document.body.appendChild(cursor);
    
}


function main() {

    drawCircle();
    addDecayIndicator();
    addSecondsIndicator();
    addDesc();
    drawCursor();

}

main();