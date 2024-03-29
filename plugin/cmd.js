document.addEventListener('keydown', (ev) => {

if(ev.key == ' ') { 

    ani2 = setInterval(function() {

        sec.innerHTML = "Seconds: " + s++;

        if(d == -1) {

            clearInterval(ani2);
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


    sec.style.display = "none";
    decay.style.display = "none";
       
}

if(ev.key == "j"){

    sec.style.display = "block";
    decay.style.display = "block";

}

if(ev.key == "t") {

    document.body.style.background = color.gra;
    document.body.style.color = color.whi;

}

if(ev.key == "u") {

    document.body.style.background = color.whi;
    document.body.style.color = color.blk;

}




});