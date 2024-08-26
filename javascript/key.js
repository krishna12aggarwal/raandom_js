function key(event){
    x = event.key
    console.log(x);
    document.getElementById("key").textContent = "YOU PRESSED :" +x;
}
function color(event){
    document.getElementById("key").style.color = "red"
}
document.addEventListener("keydown",key)
document.addEventListener("click",color)
