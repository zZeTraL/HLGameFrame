/************************************
*   gameListener.js
*************************************/
var root = document.documentElement;
var isLoading = false;

var backgroundVideo = document.getElementById("background-video");
var backgroundVideoLoading = document.getElementById("background-video-loading");
var menuSetting = document.getElementById("menu-setting");
var menuLogo = document.getElementById("menu-logo");
var menuButton = document.getElementById("menu-btn");
var gameSection = document.getElementById("game-section");

var playButton = document.getElementById("play");
playButton.onclick = loadGame;

function loadGame(){
    isLoading = true;
    backgroundVideo.remove();
    menuLogo.remove();
    menuButton.remove();
    root.style.setProperty("--background-video-loading-display", "flex");
    let random = Math.floor(Math.random() * 3) + 1;
    console.log(random)
    setTimeout(showGame, random*1000);
}

function showGame(){
    backgroundVideoLoading.remove();
    root.style.setProperty("--game-section", "flex");
    root.style.setProperty("--background-video-padding", 0);
    startGame();
}