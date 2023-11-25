// second page adding onclick to continue button 
// sound effect added to the button when it click
const continueButton = document.getElementById("continue-button")
continueButton.onclick =()=>{
    var audio=new Audio("./button-8-88355.mp3")
audio.play()
    window.location.href= "./third.html"
}

// to jump on the previous page 
// to add sound effect when click on it 
const backButton = document.getElementById("back-button")
backButton.onclick=()=>{
    var audio=new Audio("./button-8-88355.mp3")
audio.play()
    window.location.href="./index.html"
}

// to add a background music
window.addEventListener("DOMContentLoaded",()=>{
    var backGroundMusic = document.getElementById("background-music")
    Audio.volume=0.5
    Audio.loop=true;
    

})