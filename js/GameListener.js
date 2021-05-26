/************************************
*   gameListener.js
*************************************/

/*
*   VARIABLES
*/
var root = document.documentElement;
var isLoading = false;

var backgroundVideoContainer = document.querySelector(".background-video-container");
var backgroundVideo = document.getElementById("background-video");
var backgroundVideoLoading = document.getElementById("background-video-loading");

var menuSection = document.getElementById("menu-section");
var menuSetting = document.getElementById("menu-setting");
var menuSettingButton = document.getElementById("setting-button");
var menuLogo = document.getElementById("menu-logo");
var menuButton = document.getElementById("menu-btn");

var mobile = document.getElementById("error");

var gameSection = document.getElementById("game-section");

var playButton = document.getElementById("play");

//=================================================================================================//

playButton.onclick = loadGame;

function loadGame(){
    isLoading = true;
    backgroundVideo.remove();
    menuLogo.remove();
    menuButton.remove();
    root.style.setProperty("--background-video-loading-display", "flex");
    let random = Math.floor(Math.random() * 3) + 1;
    setTimeout(showGame, random*1000);
}

function showGame(){
    backgroundVideoLoading.remove();
    gameSection.setAttribute("class", "game-section");
    //root.style.setProperty("--game-section", "flex");
    root.style.setProperty("--background-video-padding", 0);
    backgroundVideoContainer.classList.add("pad-25", "background-change");
    menuSettingButton.classList.remove("padr-15");
    startGame();
}