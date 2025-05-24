
let x;
while(x == null)
x = window.prompt("ENTER YOUR NAME")
 //let y = window.prompt("ENTER YOUR AGE")

//console.log(y);
x = x.toUpperCase().trim()
window.alert("WELCOME "+x)

//window.alert('CODE BY KRISHNA')

document.getElementById("dark").onclick = function(){
    document.body.style.backgroundColor = "black"
}
document.getElementById("light").onclick = function(){
    document.body.style.backgroundColor = "slategray"
}