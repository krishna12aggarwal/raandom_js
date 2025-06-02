console.log("CODE BY KRISHNA");

document.getElementById("br").onclick = function () {
    const radiusInput = document.getElementById("u").value.trim();
    const radius = parseFloat(radiusInput);


    if (isNaN(radius) || radius <= 0) 
    document.getElementById("answer").textContent = "Enter a valid positive number for radius.";
    
else{

    const area = Math.PI * radius * radius;
    const formattedArea = area.toFixed(2);

    document.getElementById("answer").textContent = `AREA = ${formattedArea} cm²`;}
};
