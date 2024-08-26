cross_1 = false;cross_2 = false;cross_3 = false;cross_4 = false;cross_5 = false;cross_6 = false;cross_7 = false;cross_8 = false;cross_9 = false;
let difficulty; hard = false  
max = 9;min = 0
box_1 = document.getElementById("q1")
box_2 = document.getElementById("q2")
box_3 = document.getElementById("q3")
box_4 = document.getElementById("q4")
box_5 = document.getElementById("q5")
box_6 = document.getElementById("q6")
box_7 = document.getElementById("q7")
box_8 = document.getElementById("q8")
box_9 = document.getElementById("q9")
ans_1 = document.getElementById("q")
ans_2 = document.getElementById("w")
ans_3 = document.getElementById("e")
ans_4 = document.getElementById("r")
ans_5 = document.getElementById("t")
ans_6 = document.getElementById("y")
ans_7 = document.getElementById("u")
ans_8 = document.getElementById("i")
ans_9 = document.getElementById("o")
lion_1 = 0
lion_2 = 0
lion_3 = 0
lion_4 = 0
lion_5 = 0
lion_6 = 0
lion_7 = 0
lion_8 = 0
lion_9 = 0
  




function back(guess){
    if(guess == 1){
    cross_1 = true;
    lion_1 = 2
  
}
if(guess == 2){
    cross_2 = true;
    lion_2 = 2
}
if(guess == 3){
    cross_3 = true;
    lion_3 = 2
}
if(guess == 4){
    cross_4 = true;
    lion_4 = 2
}
if(guess == 5){
    cross_5 = true;
    lion_5 = 2
}
if(guess == 6){
    cross_6 = true;
    lion_6 = 2
}
if(guess == 7){
    cross_7 = true;
    lion_7 = 2
}
if(guess == 8){
    cross_8 = true;
    lion_8 = 2
}
if(guess == 9){
    cross_9 = true;
    lion_9 = 2
}


win()

}






function random(){
guess = Math.ceil(((Math.random())*(max-min))+min)
//console.log(guess);
answer(guess)
console.log(guess);

}



    function answer(guess) {
        switch(guess) {
            case 1:
                tik_1();
                
                break;
            case 2:
                tik_2();
                break;
            case 3:
                tik_3();
                break;
            case 4:
                tik_4();
                break;
            case 5:
                tik_5();
                break;    
            case 6:
                tik_6();
                break;
            case 7:
                tik_7();
                break;
            case 8:
                tik_8();
                break;
            case 9:
                tik_9();
                break;                
                    
        } 
   console.log("done");
}


function tik_1(){
    if(!cross_1){
        ans_1.textContent = "O"
        console.log("i");
    }
    else if(cross_1){
       random();
    }
    back(guess)
}
function tik_2(){
    if(!cross_2){
        ans_2.textContent = "O"
        console.log("i");
    }
    else if(cross_2){
        random();
     }
     back(guess)
}
function tik_3(){
    if(!cross_3){
        ans_3.textContent = "O"
        console.log("i");
    }
    else if(cross_3){
        random();
     }
     back(guess)
    }
function tik_4(){
    if(!cross_4){
        ans_4.textContent = "O"
        console.log("i");
    }
    else if(cross_4){
        random();
     }
     back(guess)
}
function tik_5(){
    if(!cross_5){
        ans_5.textContent = "O"
        console.log("i");
    }
    else if(cross_5){
        random();
     }
     back(guess)
    
}function tik_6(){
    if(!cross_6){
        ans_6.textContent = "O"
        console.log("i");
    }
    else if(cross_6){
        random();
     }
     back(guess)
}function tik_7(){
    if(!cross_7){
        ans_7.textContent = "O"
        console.log("i");
    }
    else if(cross_7){
        random();
     }
     back(guess)
}function tik_8(){
    if(!cross_8){
        ans_8.textContent = "O"
        console.log("i");
    }
    else if(cross_8){
        random();
     }
     back(guess)
}function tik_9(){
    if(!cross_9){
        ans_9.textContent = "O"
        console.log("i");
    }
    else if(cross_9){
        random();
     }
     back(guess)
}



function win(){
    if(lion_1 == 1 && lion_2 == 1 && lion_3 ==1){
        window.alert("you win")
    }
    if(lion_1 == 2 && lion_2 == 2 && lion_3 ==2){
        window.alert("computer win")
    }
     if(lion_1 == 1 && lion_5 == 1 && lion_9 ==1){
        window.alert("you win")
    }
    if(lion_1 == 2 && lion_5 == 2 && lion_9 ==2){
        window.alert("computer win")
    }
    if(lion_4 == 1 && lion_5 == 1 && lion_6 == 1){
        window.alert("you win")
    }
    if(lion_4 == 2 && lion_5 == 2 && lion_6 == 2){
        window.alert("computer win")
    }
    if(lion_7 == 1 && lion_8 == 1 && lion_9 == 1){
        window.alert("you win")
    }
    if(lion_7 == 2 && lion_8 == 2 && lion_9 == 2){
        window.alert("computer win")
    }
    if(lion_1 == 1 && lion_4 == 1 && lion_7 == 1){
        window.alert("you win")
    }
    if(lion_1 == 2 && lion_4 == 2 && lion_7 == 2){
        window.alert("computer win")
    }
    if(lion_2 == 1 && lion_5 == 1 && lion_8 == 1){
        window.alert("you win")
    }
    if(lion_2 == 2 && lion_5 == 2 && lion_8 == 2){
        window.alert("computer win")
    }
    if(lion_3 == 1 && lion_6 == 1 && lion_9 == 1){
        window.alert("you win")
    }
    if(lion_3 == 2 && lion_6 == 2 && lion_9 == 2){
        window.alert("computer win")
    }
    if(lion_3 == 1 && lion_5 == 1 && lion_7 == 1){
        window.alert("you win")
    }
    if(lion_3 == 2 && lion_5 == 2 && lion_7 == 2){
        window.alert("computer win")
    }
    }













































box_1.onclick = function(){
    if(!cross_1){
    cross_1 = true;
    ans_1.textContent = "X"
    lion_1 = 1
    random();
    }
}
box_2.onclick = function(){
    if(!cross_2){
    cross_2 = true;
    ans_2.textContent = "X"
    lion_2 = 1
    random();
}
}
box_3.onclick = function(){
    if(!cross_3){
    cross_3 = true;
    ans_3.textContent = "X"
    lion_3 = 1
    random();}
}
box_4.onclick = function(){
    if(!cross_4){
    cross_4 = true;
    ans_4.textContent = "X"
    lion_4 = 1
    random();
}}
box_5.onclick = function(){
    if(!cross_5){
    cross_5 = true;
    ans_5.textContent = "X"
   lion_5 = 1
    random();
}}
box_6.onclick = function(){
    if(!cross_6){
    cross_6 = true;
    ans_6.textContent = "X"
    lion_6 = 1
    random();
}}
box_7.onclick = function(){
    if(!cross_7){
    cross_7 = true ;
    ans_7.textContent = "X"
    lion_7 = 1
    random();
}}
box_8.onclick = function(){
    if(!cross_8){
    cross_8 = true;
    ans_8.textContent = "X"
    lion_8 = 1
    random();
}}
box_9.onclick = function(){
    if(!cross_9){
    cross_9 = true;
    ans_9.textContent = "X"
    lion_9 = 1
    random();
    }
}
