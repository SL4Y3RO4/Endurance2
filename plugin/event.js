let rx;
let ry;
let d = 30;
let s = 0;


function setTargetEvent() { 

target.addEventListener('mouseover', function() {

rx = (Math.random() * 300) + 1;
ry = (Math.random() * 300) + 1;

circle.style.left = rx + "px";
circle.style.top = ry + "px";

area.style.left = rx + "px";
area.style.top = ry + "px";

dw = 200;
dh = 200;

circle.style.width = dw  + "px";
circle.style.height = dh + "px";
circle.style.borderRadius = "115px";

decay.innerHTML = "Decay: " + d++;

let sound = new Audio();
sound.src = "sound/8Bit2.ogg";
sound.play();

    
})

}

function setDecayEvent() {

    ani = setInterval(function() { 

    decay.innerHTML = "Decay: " + d--;

    if(d == -1 || dw == 49 && dh == 49) {


        decay.innerHTML = "Game Over";
        clearInterval(ani);
        clearInterval(ani3);
        target.remove();
        circle.remove();

    }

}, 200);

}

function func() {

setTargetEvent();
//setCursorEvent();

}

func();