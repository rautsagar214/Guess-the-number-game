

// Here we keep phrases in the array and 
phrases = ["You're a Champion!","Victory is Yours!","Bravo!"]
var randomphr = Math.floor(Math.random()*phrases.length)
document.getElementById("phra").innerHTML = phrases[randomphr]
const  replay = document.getElementById("REPLY")
replay.onclick = ()=>{
    var audio=new Audio("./ASSET/button-8-88355.mp3")
audio.play()
    window.location.href="./third.html"
}
document.getElementById("correct-number").innerHTML=localStorage.getItem("correct-number")
document.getElementById("moves").innerHTML=localStorage.getItem("moves")


window.addEventListener("DOMContentLoaded",()=>{
var backGroundMusic = document.getElementById("background-music")
Audio.volume=0.5
Audio.loop=true;


})
var userName= document.getElementById("username")
userName.innerHTML=localStorage.getItem("name")