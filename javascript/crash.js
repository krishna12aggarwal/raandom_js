x  = document.getElementById("no")
y = document.getElementById("time")


function crash(){
  for(i = 0;i<1;i--){
   
   console.log(i);
  }
  style();
}
function style() {
  x.textContent = "💀 CRASHED 💀";
  x.style.backgroundColor = "#550000";
  x.style.color = "#ff0000";
  x.style.fontWeight = "bold";
  x.style.fontSize = "2rem";
}

function time() {
  const time = new Date();
  let q = "AM";
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();

  if (hour >= 12) {
    q = "PM";
    if (hour > 12) hour -= 12;
  }
  if (hour === 0) hour = 12;

  // Format with leading zeros
  minute = minute < 10 ? '0' + minute : minute;
  second = second < 10 ? '0' + second : second;

  y.textContent = `${hour}:${minute}:${second} ${q}`;
}

setInterval(time, 500);

x.onclick = crash;