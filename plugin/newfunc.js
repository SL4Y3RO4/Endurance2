let ani3;

function setCircleEvent() {

    let ani3 = setInterval(function() {

    circle.style.width = dw-- + "px";
    circle.style.height = dh-- + "px";

    if(dw == 49 && dh == 49) {

    circle.remove();
    target.remove();
    clearInterval(ani3);

    }

    }, 100);

}