
function scaleImageUp(id){
    document.getElementById(id).style.transform = "scale(1.085)";

    if(id == "cellphone1"){
        document.getElementById("cellphone1-img").style.marginTop = "0";
    }
    else if (id == "cellphone2"){
        document.getElementById("cellphone2-img").style.marginTop = "0";
    }
    else {
        document.getElementById("cellphone3-img").style.marginTop = "0";
    }
}

function scaleImageDown(id){
    document.getElementById(id).style.transform = "scale(1)";

    if(id == "cellphone1"){
        document.getElementById("cellphone1-img").style.marginTop = "24px";
    }
    else if (id == "cellphone2"){
        document.getElementById("cellphone2-img").style.marginTop = "24px";
    }
    else {
        document.getElementById("cellphone3-img").style.marginTop = "24px";
    }
}

function onClickCellphone(id){
    if(id == "cellphone1"){
        window.open("https://github.com/RhSantos")
    }
    else if (id == "cellphone2"){
        window.open("https://github.com/RhSantos")
    }
    else {
        window.open("https://github.com/RhSantos/spotify_clone")
    }
}

window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { 
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { 
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

function hideButton() {
    var scroll = window.scrollY
    if (scroll < 700) document.getElementById("fab").style.display = "none"
    else document.getElementById("fab").style.display = "block"
}