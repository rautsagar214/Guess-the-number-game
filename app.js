const startButton = document.querySelector(".start")
const form = document.getElementById("form")
var textbox = document.querySelector(".nickname")






// form.onsubmit=()=>{
// localStorage.setItem("name",textbox.value);
// window.location.href="./second.html"
// // startButton.onclick = () =>{
// //     window.location.href="./second.html"
// }
// }

// startButton.addEventListener("click",()=>{
//     if (textbox.value==""){
//         alert("please enter your name")
//     }
//     else{localStorage.setItem("name",textbox.value)
//     window.location.href="./second.html"}
// })
startButton.onclick = ()=>{
    window.location.href="./second.html"
}



