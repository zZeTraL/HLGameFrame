/************************************
*   gameresponsive.js
*************************************/

// Variables
var root = document.documentElement;

var timer;
var screenWidth;
var bool = false;

function checkMobil(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        console.log("DEBUG: mobile");
        document.getElementById("menu-section").remove();
        root.style.setProperty("--loading-error", "flex");
    } else {
        console.log("DEBUG: not mobile");
    }
}

window.addEventListener("resize", function(){
    clearTimeout(timer);
    timer = this.setTimeout(function() {
        isGamePlayable();
    }, 25);
});

//TODO FIX WIOTH A NULL ELEMENT
//FIXE A SPEED CLICK CAUSE ERROR
function isGamePlayable(){
    screenWidth = window.innerWidth;
    console.log("DEBUG: " + screenWidth);
    if(screenWidth < 1200 && !isLoading){
        document.getElementById("menu-section").hidden = true;
        root.style.setProperty("--loading-error", "flex");
    } else if(!isLoading) {
        document.getElementById("menu-section").hidden = false;
        root.style.setProperty("--loading-error", "none");
    } else if(isLoading && screenWidth < 900) {
        document.getElementById("menu-section").hidden = true;
        root.style.setProperty("--loading-error", "flex");
    } else {
        document.getElementById("menu-section").hidden = false;
        root.style.setProperty("--loading-error", "none");
    }
}