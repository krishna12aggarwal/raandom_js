x  = document.getElementById("no")
y = document.getElementById("time")


function crash(){
  for(i = 0;i<1;i--){
   
   console.log(i);
  }
  style();
}
function style(){
    x.textContent = "💀 CRASHED 💀"
   
}
function time(){
    time = new Date()
    q = "Pm"
    hour = time.getHours()
    minute = time.getMinutes()
    second = time.getSeconds()
    //mili = time.getMilliseconds()
    if(hour>12){
      q = "Pm"
      
    }
    if(hour<12){
      q = "Am"
    }
    if(hour>12){
      hour = hour-12
    }
    y.textContent = hour+":"+minute+":"+second+" "+q
   
}
setInterval(time,500)











x.onclick = crash;