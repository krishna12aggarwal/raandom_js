<<<<<<< HEAD
let x = 0;
function a(value){
    x += value;
    document.getElementById("out").textContent += value;
}
function c(){
    x = 0;
    document.getElementById("out").textContent = "";
}
function answer(){
   x = eval(x);
  // console.log(x);
   document.getElementById("out").textContent = x;
   colour()
}
function colour(){
   // max = 255 , min = 0;
    //r = Math.floor(((Math.random())*(max-min))+min)
   // g = Math.floor(((Math.random())*(max-min))+min)
   // b = Math.floor(((Math.random())*(max-min))+min)
    
  //  document.getElementById("out").style.color = "255, 0, 0"
    max = 5 , min = 1;
    l = Math.round((((Math.random())*(max-min))+min))
  //  console.log(l);
    if(l == 1){
         document.getElementById("out").style.color = "red"
    }
    if(l == 2){
        document.getElementById("out").style.color = "blue"
   }
   if(l == 3){
    document.getElementById("out").style.color = "brown"
}
if(l == 4){
    document.getElementById("out").style.color = "green"
}
if(l == 5){
    document.getElementById("out").style.color = "pink"
}
}
function key(event){
    y = event.key
    
    if(y == 1){
        a("1")
    }
    if(y == 2){
        a("2")
    }
    if(y == 3){
        a("3")
    }
    if(y == 4){
        a("4")
    }
    if(y == 5){
        a("5")
    }
    if(y == 6){
        a("6")
    }
    if(y == 7){
        a("7")
    }
    if(y == 8){
        a("8")
    }
    if(y == 9){
        a("9")
    }
    if(y == 0){
        a("0")
    }
    if(y == "+"){
        a("+")
    }
    if(y == "-"){
        a("-")
    }
    if(y == "*"){
        a("*")
    }
    if(y == "/"){
        a("/")
    }
    if(y == "Backspace"){
        c();
    }
    if(y == "=" || y == "Enter"){
        answer();
    }
    //else{
      //  window.alert("use a valid key")
    //}
    

}
document.getElementById("1").onclick = function(){
    a("1");
    q = 1
}
document.getElementById("2").onclick = function(){
    a("2");
    w =2
}
document.getElementById("3").onclick = function(){
    a("3");
    e = 3
}
document.getElementById("4").onclick = function(){
    a("4");

}
document.getElementById("5").onclick = function(){
    a("5");
}
document.getElementById("6").onclick = function(){
    a("6");
}
document.getElementById("7").onclick = function(){
    a("7");
}
document.getElementById("8").onclick = function(){
    a("8");
}
document.getElementById("9").onclick = function(){
    a("9");
}
document.getElementById("0").onclick = function(){
    a("0");
}
document.getElementById("+").onclick = function(){
    a("+");
}
document.getElementById("-").onclick = function(){
    a("-");
}
document.getElementById("*").onclick = function(){
    a("*");
}
document.getElementById("/").onclick = function(){
    a("/");
}
document.getElementById("C").onclick = function(){
    c();
}
document.getElementById("=").onclick = function(){
    answer();
}
document.getElementById(".").onclick = function(){
    a(".");
}
document.addEventListener("keydown",key)





=======
let x = 0;
function a(value){
    x += value;
    document.getElementById("out").textContent += value;
}
function c(){
    x = 0;
    document.getElementById("out").textContent = "";
}
function answer(){
   x = eval(x);
  // console.log(x);
   document.getElementById("out").textContent = x;
   colour()
}
function colour(){
   // max = 255 , min = 0;
    //r = Math.floor(((Math.random())*(max-min))+min)
   // g = Math.floor(((Math.random())*(max-min))+min)
   // b = Math.floor(((Math.random())*(max-min))+min)
    
  //  document.getElementById("out").style.color = "255, 0, 0"
    max = 5 , min = 1;
    l = Math.round((((Math.random())*(max-min))+min))
  //  console.log(l);
    if(l == 1){
         document.getElementById("out").style.color = "red"
    }
    if(l == 2){
        document.getElementById("out").style.color = "blue"
   }
   if(l == 3){
    document.getElementById("out").style.color = "brown"
}
if(l == 4){
    document.getElementById("out").style.color = "green"
}
if(l == 5){
    document.getElementById("out").style.color = "pink"
}
}
function key(event){
    y = event.key
    
    if(y == 1){
        a("1")
    }
    if(y == 2){
        a("2")
    }
    if(y == 3){
        a("3")
    }
    if(y == 4){
        a("4")
    }
    if(y == 5){
        a("5")
    }
    if(y == 6){
        a("6")
    }
    if(y == 7){
        a("7")
    }
    if(y == 8){
        a("8")
    }
    if(y == 9){
        a("9")
    }
    if(y == 0){
        a("0")
    }
    if(y == "+"){
        a("+")
    }
    if(y == "-"){
        a("-")
    }
    if(y == "*"){
        a("*")
    }
    if(y == "/"){
        a("/")
    }
    if(y == "Backspace"){
        c();
    }
    if(y == "=" || y == "Enter"){
        answer();
    }
    //else{
      //  window.alert("use a valid key")
    //}
    

}
document.getElementById("1").onclick = function(){
    a("1");
    q = 1
}
document.getElementById("2").onclick = function(){
    a("2");
    w =2
}
document.getElementById("3").onclick = function(){
    a("3");
    e = 3
}
document.getElementById("4").onclick = function(){
    a("4");

}
document.getElementById("5").onclick = function(){
    a("5");
}
document.getElementById("6").onclick = function(){
    a("6");
}
document.getElementById("7").onclick = function(){
    a("7");
}
document.getElementById("8").onclick = function(){
    a("8");
}
document.getElementById("9").onclick = function(){
    a("9");
}
document.getElementById("0").onclick = function(){
    a("0");
}
document.getElementById("+").onclick = function(){
    a("+");
}
document.getElementById("-").onclick = function(){
    a("-");
}
document.getElementById("*").onclick = function(){
    a("*");
}
document.getElementById("/").onclick = function(){
    a("/");
}
document.getElementById("C").onclick = function(){
    c();
}
document.getElementById("=").onclick = function(){
    answer();
}
document.getElementById(".").onclick = function(){
    a(".");
}
document.addEventListener("keydown",key)





>>>>>>> 0485022 (flip game has started. java script in progress)
 