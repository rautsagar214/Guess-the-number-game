const easyLevel = document.getElementById("easy")
const mediumLevel = document.getElementById("medium")
const hardLevel = document.getElementById("hard")


// to choose the level and jump on next page of the game 
// to add sound effect when click on it 
easyLevel.onclick = ()=>{
    localStorage.setItem("Level","Easy")
    var audio=new Audio("./button-8-88355.mp3")
audio.play()
    window.location.href="./four.html"
}

// to choose the level and jump on next page of the game 
// to add sound effect when click on it 
mediumLevel.onclick = ()=>{
    localStorage.setItem("Level","Medium" )
    var audio=new Audio("./button-8-88355.mp3")
audio.play()
    window.location.href="./four.html"
}

// to choose the level and jump on next page of the game 
// to add sound effect when click on it 
hardLevel.onclick = ()=>{
    localStorage.setItem("Level","Hard" )
    var audio=new Audio("./button-8-88355.mp3")
audio.play()
    window.location.href="./four.html"
}

// to jump on the previous page 
// to add sound effect when click on it
const backButton = document.getElementById("back-button")
backButton.onclick=()=>{
    var audio=new Audio("./button-8-88355.mp3")
audio.play()
    window.location.href="./second.html"
}


//  to add background music 
window.addEventListener("DOMContentLoaded",()=>{
    var backGroundMusic = document.getElementById("background-music")
    Audio.volume=0.5
    Audio.loop=true;
    

})