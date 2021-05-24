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

function isGamePlayable(){
    screenWidth = window.innerWidth;
    console.log("DEBUG: " + screenWidth);
    if(screenWidth < 1250 && !bool){
        document.getElementById("menu-section").remove();
        root.style.setProperty("--loading-error", "flex");
        bool = true;
    }
}