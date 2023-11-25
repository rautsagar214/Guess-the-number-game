const startButton = document.querySelector(".start")
const form = document.getElementById("form")
var textbox = document.querySelector(".nickname")





// to jump on next page of the game 
form.onsubmit=()=>{
localStorage.setItem("name",textbox.value);
window.location.href="./second.html"
// startButton.onclick = () =>{
//     window.location.href="./second.html"
return false
}


// to add background music 
window.addEventListener("DOMContentLoaded",()=>{
    var backGroundMusic = document.getElementById("background-music")
    Audio.volume=0.5
    Audio.loop=true;
    

})
 
// to add music to the button
var start=document.getElementById("start")
start.onclick=()=>{
var audio=new Audio("./button-8-88355.mp3")
audio.play()
}
 


