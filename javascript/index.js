console.log("CODE BY KRISHNA");
//window.alert("CODE BY KRISHNA")
let x;
let y;
let z;
document.getElementById("br").onclick = function(){
    x = document.getElementById("u").value;
    y = Math.PI*x*x;
    
    document.getElementById("answer").textContent = 'AREA = ' + y+ " cm";
}
