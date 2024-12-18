<<<<<<< HEAD
console.log("CODE BY KRISHNA");
//window.alert("CODE BY KRISHNA");

let x ,y;
let max = 99;
let min = 1;
let q = 1;
document.getElementById("reset").onclick = guess
function guess(){
   
        q = 1;
    y = Math.random()*(max - min);
    y = Math.round(y);
    document.getElementById("qw").textContent = "";
    document.getElementById("guess").textContent = "";
    document.getElementById("submit").onclick = function(){
        x = document.getElementById("nu").value;
    
       if(x==y){
        document.getElementById("qw").textContent = "YOU GUESS CORECTLY ";
        document.getElementById("guess").textContent = "TOTAL ATTEMPT "+q;
       }
       if(x>y){
        document.getElementById("qw").textContent = "TOO HIGH"
        q++;
    }
    if(x<y){
        document.getElementById("qw").textContent = "TOO LOW"
        q++;
    }
     if(x==y && q == 1){
        document.getElementById("qw").textContent = "YOU GUESS CORECTLY IN FIRST TRY ";
        document.getElementById("guess").textContent = "TOTAL ATTEMPT : 1";
     }
    }
    
    console.log("YOU ARE A CHEATER "+y)
    
    }
    

=======
console.log("CODE BY KRISHNA");
//window.alert("CODE BY KRISHNA");

let x ,y;
let max = 99;
let min = 1;
let q = 1;
document.getElementById("reset").onclick = guess
function guess(){
   
        q = 1;
    y = Math.random()*(max - min);
    y = Math.round(y);
    document.getElementById("qw").textContent = "";
    document.getElementById("guess").textContent = "";
    document.getElementById("submit").onclick = function(){
        x = document.getElementById("nu").value;
    
       if(x==y){
        document.getElementById("qw").textContent = "YOU GUESS CORECTLY ";
        document.getElementById("guess").textContent = "TOTAL ATTEMPT "+q;
       }
       if(x>y){
        document.getElementById("qw").textContent = "TOO HIGH"
        q++;
    }
    if(x<y){
        document.getElementById("qw").textContent = "TOO LOW"
        q++;
    }
     if(x==y && q == 1){
        document.getElementById("qw").textContent = "YOU GUESS CORECTLY IN FIRST TRY ";
        document.getElementById("guess").textContent = "TOTAL ATTEMPT : 1";
     }
    }
    
    console.log("YOU ARE A CHEATER "+y)
    
    }
    

>>>>>>> 0485022 (flip game has started. java script in progress)
guess()