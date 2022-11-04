
function scaleImageUp(id){
    document.getElementById(id).style.transform = "scale(1.085)";

    if(id == "cellphone1"){
        document.getElementById("cellphone1-img").style.marginTop = "0";
    }
    else if (id == "cellphone2"){
        document.getElementById("cellphone2-img").style.marginTop = "0";
    } 
    else if (id == "cellphone3"){
        document.getElementById("cellphone3-img").style.marginTop = "0";
    }
    else if (id == "cellphone4"){
        document.getElementById("cellphone4-img").style.marginTop = "0";
    }
    else {
        document.getElementById("cellphone5-img").style.marginTop = "0";
    }
}

function scrollCaroussel(element){
    var caroussel = document.querySelector('.projects-phone-carrossel')
    if(element.classList[0] == 'page-button-previous') {
        caroussel.scroll(0,0)
    } else {
        caroussel.scroll(1000,0)
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
    else if (id == "cellphone3") {
        document.getElementById("cellphone3-img").style.marginTop = "24px";
    }
    else if (id == "cellphone4") {
        document.getElementById("cellphone4-img").style.marginTop = "24px";
    }
    else {
        document.getElementById("cellphone5-img").style.marginTop = "24px";
    }
}

function onClickCellphone(id){
    if(id == "cellphone1"){
        window.open("https://github.com/RhSantos/dark_calculator")
    }
    else if (id == "cellphone2"){
        window.open("https://github.com/RhSantos/better_sleep")
    }
    else if (id == "cellphone3"){
        window.open("https://github.com/RhSantos/spotify_clone")
    }
    else if (id == "cellphone4"){
        window.open("https://github.com/RhSantos/mvvm_simple_weather_app")
    }
    else {
        window.open("https://github.com/RhSantos/mvvm_via_cep")
    }
}

function hideButton() {
    var scroll = window.scrollY
    if (scroll < 700) document.getElementById("fab").style.display = "none"
    else document.getElementById("fab").style.display = "block"
}