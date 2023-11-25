// second page adding onclick to continue button 
const continueButton = document.getElementById("continue-button")
continueButton.onclick =()=>{
    var audio=new Audio("./button-8-88355.mp3")
audio.play()
    window.location.href= "./third.html"
}

const backButton = document.getElementById("back-button")
backButton.onclick=()=>{
    var audio=new Audio("./button-8-88355.mp3")
audio.play()
    window.location.href="./index.html"
}
window.addEventListener("DOMContentLoaded",()=>{
    var backGroundMusic = document.getElementById("background-music")
    Audio.volume=0.5
    Audio.loop=true;
    

})