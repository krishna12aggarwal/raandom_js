ball = document.getElementById("ball")
max = 9,min = 1

console.log("7")

function yo(){
    guess = Math.floor((Math.random())*(max-min)+1)
    ballz(guess)
    
}


function ballz(guess){
    if(guess == 1){
        move_1()
    }
    if(guess == 2){
        move_2()
    } if(guess == 3){
        move_3()
    } if(guess == 4){
        move_4()
    } if(guess == 5){
        move_5()
    } if(guess == 6){
        move_6()
    } if(guess == 7){
        move_7()
    } if(guess == 8){
        move_8()
    } if(guess == 9){
        move_9()
    }
}
function move_1(){
    console.log("i am 1");
    
}
function move_2(){
    console.log("i am 2");
    
}
function move_3(){
    console.log("i am 3");
    
}
function move_4(){
    console.log("i am 4");
    
}
function move_5(){
    console.log("i am 5");
    
}
function move_6(){
    console.log("i am 6");
    
}
function move_7(){
    console.log("i am 7");
    
}
function move_8(){
    console.log("i am 8");
    
}
function move_9(){
    console.log("i am 9");
    
}
















document.addEventListener("keydown",yo)