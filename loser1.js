
// // Here we keep phrases in the array and   selecting random phrase from the array .
phrases =["Bounce Back Stronger!","Better Luck Next Round.","Game Well Played."]
    const  replay = document.getElementById("REPLY")
    replay.onclick = ()=>{
        window.location.href="./third.html"
    }
    document.getElementById("correct-number").innerHTML=localStorage.getItem("correct-number")
    document.getElementById("moves").innerHTML=localStorage.getItem("moves")

var randomphr = Math.floor(Math.random()*phrases.length)
document.getElementById("phra").innerHTML=phrases[randomphr]

var user =   document.getElementById("user-name")
user.innerHTML=localStorage.getItem("name")