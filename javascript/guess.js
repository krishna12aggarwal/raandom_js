console.log("CODE BY KRISHNA");

let x, y;         
let max = 99;
let min = 1;
let q = 1;

function start() {
    q = 1;
    y = Math.floor(Math.random() * (max - min + 1)) + min;  
    document.getElementById("qw").textContent = "";
    document.getElementById("guess").textContent = "";
    document.getElementById("nu").value = "";
    document.getElementById("nu").disabled = false;
    document.getElementById("submit").disabled = false;
    console.log("YOU ARE A CHEATER! Number is:", y);
}

document.getElementById("reset").onclick = start;

function guess() {
    x = Number(document.getElementById("nu").value);

    if (!x || x < min || x > max) {
        document.getElementById("qw").textContent = `Please enter a number between ${min} and ${max}`;
        return;
    }

    if (x === y) {
        if (q === 1) {
            document.getElementById("qw").textContent = "YOU GUESSED CORRECTLY IN FIRST TRY";
        } else {
            document.getElementById("qw").textContent = "YOU GUESSED CORRECTLY"
        }
        document.getElementById("guess").textContent = "TOTAL ATTEMPTS: " + q;
        document.getElementById("nu").disabled = true;
        document.getElementById("submit").disabled = true;
    } else if (x > y) {
        document.getElementById("qw").textContent = "TOO HIGH! TRY AGAIN";
        q++;
        document.getElementById("guess").textContent = "ATTEMPTS: " + q;
    } else if (x < y) {
        document.getElementById("qw").textContent = "TOO LOW! TRY AGAIN";
        q++;
        document.getElementById("guess").textContent = "ATTEMPTS: " + q;
    }
}

document.getElementById("submit").onclick = guess;


start();
