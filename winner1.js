

// Here we keep phrases in the array and   selecting random phrase from the array .
phrases = ["You're a Champion!","Victory is Yours!","Bravo!"]
var randomphr = Math.floor(Math.random()*phrases.length)
document.getElementById("phra").innerHTML = phrases[randomphr]
const  replay = document.getElementById("REPLY")

// when click on replay page will redirect to level page of the game and the click sound effect will be there.
replay.onclick = ()=>{
    var audio=new Audio("./ASSET/button-8-88355.mp3")
audio.play()
    window.location.href="./third.html"
}
document.getElementById("correct-number").innerHTML=localStorage.getItem("correct-number")
document.getElementById("moves").innerHTML=localStorage.getItem("moves")

// to play background music 
window.addEventListener("DOMContentLoaded",()=>{
var backGroundMusic = document.getElementById("background-music")
backGroundMusic.volume=0.5
backGroundMusic.loop=true;


})
var userName= document.getElementById("username")
userName.innerHTML=localStorage.getItem("name")