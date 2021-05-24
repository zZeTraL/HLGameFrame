/************************************
*   setting.js
*************************************/

// Variables
var root = document.documentElement;

var settingButton = document.getElementById("setting-button");
var settingClass = document.querySelector(".setting");
var settingClassStyle = getComputedStyle(settingClass);

var video = document.getElementById("background-video");
var volumeValue = document.getElementById("background-video-volume").value;

// Listener
settingButton.onclick = openSettingMenu;
console.log(settingClassStyle);

/**
*
* openSettingMenu allows user to open setting menu and close it 
*
* @return {VoidFunction} 
*
*/
function openSettingMenu(){
    if(settingClassStyle.display == "none"){
        root.style.setProperty('--setting-display', 'flex');
    } else {
        root.style.setProperty('--setting-display', 'none');
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
    video.volume = val/100;
    return video.volume;
}

function test1(){
    alert("CLIQUE DETECTE");
}

function test2(){
    alert("CLIQUE DETECTE");
}

function test3(){
    alert("CLIQUE DETECTE");
}