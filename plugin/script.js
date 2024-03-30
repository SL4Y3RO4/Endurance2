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
let target = document.getElementById('target');
let circle = document.getElementById('circle');
let area = document.getElementById('area');
let dw = 0;
let dh = 0;
let draw;
let drawW = 0;
let drawH = 0;



function drawCircle() {

    draw = setInterval(function() {

    circle.style.position = "absolute";
    circle.style.border = "3px solid black";
    circle.style.width = drawW++ + "px";
    circle.style.height = drawH++ + "px";
    circle.style.borderRadius = "115px";

    if(drawH == 201 && drawW == 201) {

        clearInterval(draw);
    }

    
    }, 1);

}

function drawTarget() {

    target.style.position = "absolute";
    target.style.background = "black";
    target.style.width = "90px";
    target.style.height = "90px";
    target.style.borderRadius = "45px";
    target.style.left = "96px";
    target.style.top = "87px";
    target.style.transform = "translate(-50%, -50%)";
  
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

desc = ["start game", "reload page", "change color", "hide", "darkmode"];
cmd_line = ["space", "r", "e", "h", "t"];

for(i = 0; i < p.length; i++) {

    p[i].innerHTML = "press "+ cmd_line[i] + ":" + " " +desc[i] + "\n";

}
    
}

/*
function drawCursor() {

    cursor.id = "cursor";
    document.body.appendChild(cursor);
    
}
*/

function main() {

    drawCircle();
    drawTarget();
    addDecayIndicator();
    addSecondsIndicator();
    addDesc();
    //drawCursor();

}

main();