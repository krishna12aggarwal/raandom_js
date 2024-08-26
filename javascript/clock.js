function clock(){
    let date = new Date();
    x = date.getHours();
    y = date.getMinutes();
    z = date.getSeconds();
    c = date.getDay();
    
    document.getElementById("clock").textContent = x +":"+y+":"+z+":"+c;
}
setInterval(clock(),1);