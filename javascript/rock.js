min =  0, max = 3 , out = document.getElementById("out"),win = 0 ,loss = 0;draw = 0;
w = document.getElementById("win")
l = document.getElementById("loss")
d = document.getElementById("draw")

function game(i){
main = Math.ceil(((Math.random()*(max - min))+min))
if(i == 1 && main == 2){
    loss++
    out.textContent = "you lost"
    l.textContent = "LOST : "+ loss
  
}
if(i == 1 && main == 3){
    win++
    out.textContent = "you win"
    w.textContent = win
    w.textContent = "WIN : "+ win

}
if(i == 2 && main == 1){
    win++
    out.textContent = "you win"
    w.textContent = win
    w.textContent = "WIN : "+ win

}
if(i == 2 && main == 3){
    loss++
    out.textContent = "you lost"
    l.textContent = loss
    l.textContent = "LOST : "+ loss

}
if(i == 3 && main == 1){
    loss++
    out.textContent = "you lost"
    l.textContent = loss
    l.textContent = "LOST : "+ loss

}
if(i == 3 && main == 2){
    win++
    out.textContent = "you win"
    w.textContent = win
    w.textContent = "WIN : "+ win

}
if(i ==  main ){
    draw++
    out.textContent = "draw"
    d.textContent = "DRAW :"+draw
}
console.log(win , loss, draw);
}

document.getElementById("rock").onclick = function(){
    game(1)
    //guess(1)
}
document.getElementById("paper").onclick = function(){
  //  i = 2
    game(2)
}
document.getElementById("sci").onclick = function(){
   // i = 3
  game(3)
}