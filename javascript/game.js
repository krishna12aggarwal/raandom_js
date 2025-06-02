let x = 0, y = 0, move = 10, t = true;

function a(x, y) {
    if (t) {
        const q = document.getElementById("q");
        q.style.position = "absolute";
        q.style.left = `${x}px`;
        q.style.top = `${y}px`;
        q.style.border = "2px solid white";
        q.textContent = "I AM MOVING";
    } else {
        const w = document.getElementById("w");
        w.style.position = "absolute";
        w.style.left = `${x}px`;
        w.style.top = `${y}px`;
        w.style.border = "2px solid white";
        w.textContent = "I AM MOVING";
    }
}

function store(event) {
    const z = event.key;
    if (z === "ArrowDown") y += move;
    if (z === "ArrowUp") y -= move;
    if (z === "ArrowLeft") x -= move;
    if (z === "ArrowRight") x += move;
    a(x, y);
}

function stop() {
    if (t) {
        const q = document.getElementById("q");
        q.textContent = "MOVE ME";
        q.style.border = "none";
    } else {
        const w = document.getElementById("w");
        w.textContent = "MOVE ME";
        w.style.border = "none";
    }
}

document.getElementById("q").onclick = function () { t = true; }
document.getElementById("w").onclick = function () { t = false; }

document.addEventListener("keydown", store);
document.addEventListener("keyup", stop);
