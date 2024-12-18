<<<<<<< HEAD
let i = 1;
console.log("yo");

const display0 = document.getElementById("q1");
const w = document.getElementById("qw");
const e = document.getElementById("q2");


  display0.style.display = "flex";
  w.style.display = "none";
  e.style.display = "none";


function no() {
  setInterval(bro, 5000);
}

function bro() {
  i++;
  if (i > 3) {
    i = 1;
  }
  more(i);
}

function display() {
  display0.style.display = "flex";
  w.style.display = "none";
  e.style.display = "none";
  console.log("display1 function has been executed");
}

function display2() {
  display0.style.display = "none";
  w.style.display = "flex";
  e.style.display = "none";
  console.log("display2 function has been executed");
}

function display3() {
  display0.style.display = "none";
  w.style.display = "none";
  e.style.display = "flex";
  console.log("display3 function has been executed");
}

function more(i) {
  if (i === 1) {
    display();
    console.log("display1 function has been used");
  } else if (i === 2) {
    display2();
    console.log("display2 function has been used");
  } else if (i === 3) {
    display3();
    console.log("display3 function has been used");
  }
}


  no();
  console.log("no function is executed");

=======
let i = 1;
console.log("yo");

const display0 = document.getElementById("q1");
const w = document.getElementById("qw");
const e = document.getElementById("q2");


  display0.style.display = "flex";
  w.style.display = "none";
  e.style.display = "none";


function no() {
  setInterval(bro, 5000);
}

function bro() {
  i++;
  if (i > 3) {
    i = 1;
  }
  more(i);
}

function display() {
  display0.style.display = "flex";
  w.style.display = "none";
  e.style.display = "none";
  console.log("display1 function has been executed");
}

function display2() {
  display0.style.display = "none";
  w.style.display = "flex";
  e.style.display = "none";
  console.log("display2 function has been executed");
}

function display3() {
  display0.style.display = "none";
  w.style.display = "none";
  e.style.display = "flex";
  console.log("display3 function has been executed");
}

function more(i) {
  if (i === 1) {
    display();
    console.log("display1 function has been used");
  } else if (i === 2) {
    display2();
    console.log("display2 function has been used");
  } else if (i === 3) {
    display3();
    console.log("display3 function has been used");
  }
}


  no();
  console.log("no function is executed");

>>>>>>> 0485022 (flip game has started. java script in progress)
