var computerNumber;
var greaterHintNumber=1
var smallerHintNumber=1
var lives;
var moves = 0;
var audio
if(
    localStorage.getItem("Level")=="Easy"
){
    document.getElementById("range").innerHTML = "1 to 10"
    lives=5
     computerNumber = generateRandomNumber(1,10)
     localStorage.setItem("correct-number",computerNumber)

    console.log(computerNumber)
}
else if (
    localStorage.getItem("Level")=="Medium"
){
    document.getElementById("range").innerHTML = "1 to 50"
    lives=8
    computerNumber = generateRandomNumber(1,50)
    localStorage.setItem("correct-number",computerNumber)

    console.log(computerNumber)
}
else if(
    localStorage.getItem("Level")=="Hard"
){
    document.getElementById("range").innerHTML = "1 to 100"
    lives=10
    computerNumber=generateRandomNumber(1,100)
    localStorage.setItem("correct-number",computerNumber)

    console.log(computerNumber)
}

document.getElementById("lives").innerHTML=lives
    const backButton = document.getElementById("back-button")
backButton.onclick=()=>{
    var audio=new Audio("./button-8-88355.mp3")
audio.play()
    window.location.href="./third.html"
}

const Check = document.getElementById("check") 
    Check.onclick=()=>{
        var audio=new Audio("./button-8-88355.mp3")
audio.play()
        moves++
    if ( 
        output.innerHTML==computerNumber
        
    ){
        console.log("correct")
        localStorage.setItem("moves" , moves)
        window.location.href="./winner1.html"
    }
    else if (output.innerHTML<computerNumber){
        var audio=new Audio("./surprised-child-voice-sound-113127.mp3")
        audio.play()
        document.getElementById(`greaterHint${greaterHintNumber}`).innerHTML=output.innerHTML
       greaterHintNumber++
       lives--
     document.getElementById("lives").innerHTML=lives
     if (lives==0){
        localStorage.setItem("moves" , moves)

        location.href="./loser1.html"
     }
    }
    else if (output.innerHTML>computerNumber){
        var audio=new Audio("./surprised-child-voice-sound-113127.mp3")
        audio.play()
        document.getElementById(`smallerHint${smallerHintNumber}`).innerHTML=output.innerHTML
       smallerHintNumber++
       lives--
     document.getElementById("lives").innerHTML=lives
     if (lives==0){
        localStorage.setItem("moves" , moves)

        window.location.href="./winner1.html"
     }
     
    }
    output.innerHTML=""

    }


    const Row = document.querySelector("row")

    var  one = document.getElementById("1")
     one.onclick=()=>{
        var audio=new Audio("./button-8-88355.mp3")
audio.play()
        output.innerHTML+= one.innerHTML
     }



    var  two = document.getElementById("2")
    two.onclick=()=>{
        var audio=new Audio("./button-8-88355.mp3")
audio.play()
        output.innerHTML+=two.innerHTML
    }
    var  three = document.getElementById("3")
       three.onclick=()=>{
        var audio=new Audio("./button-8-88355.mp3")
audio.play()
        output.innerHTML+=three.innerHTML
       }
    var  four = document.getElementById("4")
    four.onclick=()=>{
        var audio=new Audio("./button-8-88355.mp3")
audio.play()
        output.innerHTML+=four.innerHTML
    }
    var  five = document.getElementById("5")
    five.onclick=()=>{
        var audio=new Audio("./button-8-88355.mp3")
audio.play()
        output.innerHTML+=five.innerHTML
    }
    var  six = document.getElementById("6")
    six.onclick=()=>{
        var audio=new Audio("./button-8-88355.mp3")
audio.play()
        output.innerHTML+=six.innerHTML
    }
    var  seven = document.getElementById("7")
    seven.onclick=()=>{
        var audio=new Audio("./button-8-88355.mp3")
audio.play()
        output.innerHTML+=seven.innerHTML
    }
    var  eight = document.getElementById("8")
    eight.onclick=()=>{
        var audio=new Audio("./button-8-88355.mp3")
audio.play()
        output.innerHTML+=eight.innerHTML
    }

    var  nine = document.getElementById("9")
    nine.onclick=()=>{
        var audio=new Audio("./button-8-88355.mp3")
audio.play()
        output.innerHTML+=nine.innerHTML
    }

    var  zero = document.getElementById("0")
    zero.onclick=()=>{
        var audio=new Audio("./button-8-88355.mp3")
audio.play()
        output.innerHTML+=zero.innerHTML
    }

    var  clear = document.getElementById("clear")
    clear.onclick=()=>{
        var audio=new Audio("./button-8-88355.mp3")
audio.play()
        output.innerHTML = ""
    }
    
    const output = document.getElementById("randomNumber")


function generateRandomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}
window.addEventListener("DOMContentLoaded",()=>{
    var backGroundMusic = document.getElementById("background-music")
    Audio.volume=0.5
    Audio.loop=true;
    

})
