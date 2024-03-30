document.addEventListener('keydown', (ev) => {

if(ev.key == ' ') { 

    ani2 = setInterval(function() {

        sec.style.display = "none";
        decay.style.display = "none";

        sec.innerHTML = "Seconds: " + s++;


        setCircleEvent();

        if(d == -1 || dw == 49 && dh == 49) {

            sec.style.display = "block";
            decay.style.display = "block";

            clearInterval(ani2);
            clearInterval(ani3);

        }
        
        }, 1000);

        setDecayEvent();

}


if(ev.key == 'r') {

    window.location.reload();

}

if(ev.key == "e") {

    let arr = [color.pur, color.blk, color.re, color.gre, color.yel, color.whi, color.ora];
    let n;

    n = prompt("insert a color(0 = purple, 1 = black, 2 = red, 3 = green, 4 = yellow, 5 = white, 6 = orange");

    sec.style.color = arr[n];
    decay.style.color = arr[n];

}

if(ev.key == "h") {

    if(circle.style.display == "block" && sec.style.display == "block" && decay.style.display == "block") {

    circle.style.display = "none";
    sec.style.display = "none";
    decay.style.display = "none";
    
    }   else { 

        circle.style.display = "block";
        sec.style.display = "block";
        decay.style.display = "block";
    
     }

}

if(ev.key == "t") {

    if(document.body.style.background == color.whi && document.body.style.color == color.blk && target.style.background == "black") {

    document.body.style.background = color.gra;
    document.body.style.color = color.whi;
    target.style.background = "white";
    
    } else {

        document.body.style.background = color.whi;
        document.body.style.color = color.blk;
        target.style.background = "black";

    }

}

});