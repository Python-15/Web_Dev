
let camera=document.getElementsByClassName("camera")[0]
let bord=document.getElementsByClassName("Board")[0]

camera.addEventListener("click", ()=>{
    window.location.assign("./camsnap/activity/index.html");
})

bord.addEventListener("click", ()=>{
    window.location.assign("./whiteboard/activity/index.html");
})