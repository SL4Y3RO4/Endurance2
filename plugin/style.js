
let color = {

    blk:"black",
    pur:"purple",
    yel:"yellow",
    re:"red",
    gre:"green",
    gra:"gray",
    whi:"white",
    ora:"orange"

}


function setDecayStyle() {

    decay.style.fontFamily = "arial";
    decay.style.left = "42%";
    decay.style.color = color.pur;
    decay.style.position = "absolute";

}

function setSecondsStyle() {

    sec.style.fontFamily = "arial";
    sec.style.top = "15%";
    sec.style.left = "31%";
    sec.style.color = color.pur;
    sec.style.position = "absolute";

}

function setAreaStyle() {

    area.style.position = "absolute";
    area.style.left = "65%";
    area.style.top = "35%";

}

function setBarrierStyle() {

    barrier.style.width = bx + "px";
    barrier.style.height = by + "px";
    barrier.style.position = "absolute";
    barrier.style.left = "36%";
    barrier.style.top = "32%";

}

/*
function setCursorStyle() {

    all.addEventListener('load', function() {

    cursor.style.cursor = "url(img/blkCircle.png), auto";

    })

}
*/

function style() {

setDecayStyle();
setSecondsStyle();
setAreaStyle();
setBarrierStyle();
//setCursorStyle();

}

style();