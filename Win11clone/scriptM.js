
let camera=document.getElementsByClassName("camera")[0]
let bord=document.getElementsByClassName("Board")[0]
let excel=document.getElementsByClassName("Excle")[0]

camera.addEventListener("click", ()=>{
    window.location.assign("./camsnap/activity/index.html");
})

bord.addEventListener("click", ()=>{
    window.location.assign("./whiteboard/activity/index.html");
})
excel.addEventListener("click", ()=>{
    window.location.assign("./Excel_sheet/index.html");
})