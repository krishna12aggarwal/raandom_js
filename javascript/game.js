x = 0, y = 0 , move = 10 ,t = true
//console.log("CODE BY KRISHNA");
//window.alert("CODE BY KRISHNA")
function a(x,y){
    //console.log(t);
        if(t == true){
            document.getElementById("q").style.border = "solid"
        document.getElementById("q").style.left =  `${x}px`
        document.getElementById("q").style.top =  `${y}px`
        style()
        }
        else{
           document.getElementById("w").style.left =  `${x}px`
        document.getElementById("w").style.top =  `${y}px`
        document.getElementById("w").style.border = "solid"
        style2()
        }
}
function store(event,){
    z = event.key
    
    if(z == "ArrowDown"){
        y += move
    }
    if(z == "ArrowUp"){
        y -= move
    }
    if(z == "ArrowLeft"){
        x -= move
    }
    if(z == "ArrowRight"){
        x += move
    }
   a(x,y)
}
 function style(){
    m = document.getElementById("q")
    m.textContent = "I AM MOVING"
  } 
  function style2(){
    n = document.getElementById("w")
    n.textContent = "I AM MOVING"
  } 
function stop(){
    if(t == true){
        m = document.getElementById("q")
        m.textContent = "MOVE ME"
        m.style.border = "none"
    }
    else{
        n = document.getElementById("w")
        n.textContent = "MOVE ME" 
         n.style.border = "none"
    }
}
document.addEventListener("keydown",store)
document.getElementById("w").onclick = function select(){
    t = false;
    
}
document.getElementById("q").onclick = function select(){
    t = true;
}
document.addEventListener("keyup",stop)