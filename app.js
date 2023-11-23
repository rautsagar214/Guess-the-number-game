const startButton = document.querySelector(".start")
const form = document.getElementById("form")
var textbox = document.querySelector(".nickname")






form.onsubmit=()=>{
localStorage.setItem("name",textbox.value);
window.location.href="./second.html"
// startButton.onclick = () =>{
//     window.location.href="./second.html"
return false
}

window.addEventListener("DOMContentLoaded",()=>{
    var backGroundMusic = document.getElementById("background-music")
    Audio.volume=0.5
    Audio.loop=true;
    

})
 
var start=document.getElementById("start")
start.onclick=()=>{
var audio=new Audio("./button-8-88355.mp3")
audio.play()
}
 

// startButton.addEventListener("click",()=>{
//     if (textbox.value==""){
//         alert("please enter your name")
//     }
//     else{localStorage.setItem("name",textbox.value)
//     window.location.href="./second.html"}
// })
// startButton.onclick = ()=>{
//     window.location.href="./second.html"
// }

// var backGroundMusic = new Audio(`Guess-the-number-game\Ukulele-and-Piano(chosic.com).mp3`);

// backGroundMusic.autoplay=true;
// backGroundMusic.loop=true;

// document.body.appendChild(backGroundMusic);

