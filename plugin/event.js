let rx;
let ry;
let d = 30;
let s = 0;


function setTargetEvent() { 

canvas.addEventListener('mouseover', function() {

rx = (Math.random() * 500) + 1;
ry = (Math.random() * 500) + 1;

canvas.style.left = rx + "px";
canvas.style.top = ry + "px";

decay.innerHTML = "Decay: " + d++;

let sound = new Audio();
sound.src = "sound/8Bit2.ogg";
sound.play();

    
})

}

function setDecayEvent() {

    ani = setInterval(function() { 

    decay.innerHTML = "Decay: " + d--;

    if(d == -1) {


        decay.innerHTML = "Game Over";
        clearInterval(ani);
        canvas.remove();

    }

}, 200);

}

function func() {

setTargetEvent();
setCursorEvent();

}

func();