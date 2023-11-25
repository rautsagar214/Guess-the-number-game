const easyLevel = document.getElementById("easy")
const mediumLevel = document.getElementById("medium")
const hardLevel = document.getElementById("hard")

easyLevel.onclick = ()=>{
    localStorage.setItem("Level","Easy")
    var audio=new Audio("./button-8-88355.mp3")
audio.play()
    window.location.href="./four.html"
}

mediumLevel.onclick = ()=>{
    localStorage.setItem("Level","Medium" )
    var audio=new Audio("./button-8-88355.mp3")
audio.play()
    window.location.href="./four.html"
}

hardLevel.onclick = ()=>{
    localStorage.setItem("Level","Hard" )
    var audio=new Audio("./button-8-88355.mp3")
audio.play()
    window.location.href="./four.html"
}
const backButton = document.getElementById("back-button")
backButton.onclick=()=>{
    var audio=new Audio("./button-8-88355.mp3")
audio.play()
    window.location.href="./second.html"
}

window.addEventListener("DOMContentLoaded",()=>{
    var backGroundMusic = document.getElementById("background-music")
    Audio.volume=0.5
    Audio.loop=true;
    

})