<<<<<<< HEAD
//window.alert("CODE BY KRISHNA")
//console.log("CODE BY KRISHNA");
let x = 0;
function o(event){
    if(event.key == "+"){
        x++;
        document.getElementById("out").textContent = x;
    }
    if(event.key == "-"){
        x--;
        document.getElementById("out").textContent = x;
    }
    if(event.key == "Enter"){
        x = 0;
        document.getElementById("out").textContent = x;
    }
}
document.getElementById("less").onclick = function(){
    x--;
    document.getElementById("out").textContent = x;
}
document.getElementById("more").onclick = function(){
    x++;
    document.getElementById("out").textContent = x;
}
document.getElementById("reset").onclick = function(){
    x = 0;
    document.getElementById("out").textContent = x;
}
document.addEventListener("keydown",o)

=======
//window.alert("CODE BY KRISHNA")
//console.log("CODE BY KRISHNA");
let x = 0;
function o(event){
    if(event.key == "+"){
        x++;
        document.getElementById("out").textContent = x;
    }
    if(event.key == "-"){
        x--;
        document.getElementById("out").textContent = x;
    }
    if(event.key == "Enter"){
        x = 0;
        document.getElementById("out").textContent = x;
    }
}
document.getElementById("less").onclick = function(){
    x--;
    document.getElementById("out").textContent = x;
}
document.getElementById("more").onclick = function(){
    x++;
    document.getElementById("out").textContent = x;
}
document.getElementById("reset").onclick = function(){
    x = 0;
    document.getElementById("out").textContent = x;
}
document.addEventListener("keydown",o)

>>>>>>> 0485022 (flip game has started. java script in progress)
