
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
    sec.style.top = "8%";
    sec.style.left = "31%";
    sec.style.color = color.pur;
    sec.style.position = "absolute";

}

function setAreaStyle() {

    area.style.position = "relative";
    area.style.left = "75%";
    area.style.top = "35%";

}

function setBoxStyle() {

    box.style.position = "absolute";
    box.style.left = "36%";
    box.style.top = "23%";

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
setBoxStyle();
//setCursorStyle();

}

style();
