///function ftoc(x){
//    c = (x-32)*(5/9)
 //   return c;
   //}
   //function ctof(x){
    //f = (x*(9/5))+32
    //return f;
   //}
   mycheck1 = document.getElementById("check1")
   mycheck2 = document.getElementById("check2")
   document.getElementById("submit").onclick = function(){
    if(mycheck1.checked)  {  
     x = document.getElementById("input").value;
     c = (x-32)*(5/9)
        document.getElementById("answer").textContent = c;
    }
    if(mycheck2.checked){
        x = document.getElementById("input").value;
        f = (x*(9/5))+32
        document.getElementById("answer").textContent = f;
    }
   }