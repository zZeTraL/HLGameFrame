/************************************
*   setting.js
*************************************/

// Variables
var root = document.documentElement;

var settingButton = document.getElementById("setting-button");
var settingMenu = document.getElementById("setting-menu");

var video = document.getElementsByClassName("vid-vol");

var volumeValue = document.getElementById("background-video-volume").value;

// Listener
settingButton.onclick = openSettingMenu;

/**
*
* openSettingMenu allows user to open setting menu and close it 
*
* @return {VoidFunction} 
*
*/
function openSettingMenu(){
    /*if(settingClassStyle.display == "none"){
        root.style.setProperty('--setting-display', 'flex');
    } else {
        root.style.setProperty('--setting-display', 'none');
    }*/
    console.log(settingMenu.getAttribute("class"));
    if(settingMenu.getAttribute("class") == "display-none"){
        settingMenu.setAttribute("class", "setting");
    } else {
        settingMenu.setAttribute("class", "display-none");
    }
}

/**
*
* updateVolume allows user to adjust volume like he wants
*
* @return {Number} 
*
*/
function updateVolume(val){
    for (let i = 0; i < video.length; i++) {
        video[i].volume = val/100;
    }
}

function setVolume(val){
    for (let i = 0; i < video.length; i++) {
        video[i].volume = val;
    }
}

function muteVideo(){
    for (let i = 0; i < video.length; i++) {
        video[i].muted = true;
    }
}

function unmuteVido(){
    for (let i = 0; i < video.length; i++) {
        video[i].muted = false;
    }
}