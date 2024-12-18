<<<<<<< HEAD
function clock(){
    let date = new Date();
    x = date.getHours();
    y = date.getMinutes();
    z = date.getSeconds();
    c = date.getDay();
    
    document.getElementById("clock").textContent = x +":"+y+":"+z+":"+c;
}
=======
function clock(){
    let date = new Date();
    x = date.getHours();
    y = date.getMinutes();
    z = date.getSeconds();
    c = date.getDay();
    
    document.getElementById("clock").textContent = x +":"+y+":"+z+":"+c;
}
>>>>>>> 0485022 (flip game has started. java script in progress)
setInterval(clock(),1);