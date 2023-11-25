// second page adding onclick to continue button 
// sound effect added to the button when it click
const continueButton = document.getElementById("continue-button")
var audio=new Audio("./ASSET/button-8-88355.mp3")
continueButton.onclick =()=>{
    audio.play()
    window.location.href= "./third.html"
}

// to jump on the previous page 
// to add sound effect when click on it 
const backButton = document.getElementById("back-button")
backButton.onclick=()=>{
    // var audio=new Audio("./ASSET/button-8-88355.mp3")
    audio.play()
    window.location.href="./index.html"
}

// to add a background music
window.addEventListener("DOMContentLoaded",()=>{
    var backGroundMusic = document.getElementById("background-music")
    // backGroundMusic.volume=0.5
    // backGroundMusic.loop=true;
    

})