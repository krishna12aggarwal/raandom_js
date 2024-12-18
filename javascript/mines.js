<<<<<<< HEAD
squ_1 = true,squ_2 = true,squ_3 = true,squ_4 = true,squ_5 = true,squ_6 = true,squ_7 = true,squ_8 = true,squ_9 = true,squ_10 = true,squ_11 = true,squ_12 = true,squ_13 = true,squ_14 = true,squ_15 = true,squ_16 = true
max = 16,min = 1;
r_1 = 0,r_2 = 0,r_3 = 0,r_4 = 0,r_5 = 0,r_6 = 0,r_7 = 0,r_8 = 0,r_9 = 0,r_10 = 0,r_11 = 0,r_12 = 0,r_13 = 0,r_14 = 0,r_15 = 0,r_16 = 0,




d_1 = 0,d_2 = 0,d_3 = 0,d_4 = 0,d_5 = 0,d_6 = 0,d_7 = 0,d_8 = 0,d_9 = 0,d_10 = 0,d_11 = 0,d_12 = 0,d_13 = 0,d_14 = 0,d_15 = 0,d_16 = 0,

tile_1 = document.getElementById("tile_1")
tile_2 = document.getElementById("tile_2")
tile_3 = document.getElementById("tile_3")
tile_4 = document.getElementById("tile_4")
tile_5 = document.getElementById("tile_5")
tile_6 = document.getElementById("tile_6")
tile_7 = document.getElementById("tile_7")
tile_8 = document.getElementById("tile_8")
tile_9 = document.getElementById("tile_9")
tile_10 = document.getElementById("tile_10")
tile_11 = document.getElementById("tile_11")
tile_12 = document.getElementById("tile_12")
tile_13 = document.getElementById("tile_13")
tile_14 = document.getElementById("tile_14")
tile_15 = document.getElementById("tile_15")
tile_16 = document.getElementById("tile_16")
sound = document.getElementById("win")
sound.style.display = "none"
sound2 = document.getElementById("loss")
sound2.style.display = "none"







mines = window.prompt("ENTER NUMBER OF MINES")
if(mines >=16 || mines == 0){
    mines = window.prompt("ENTER NUMBER OF MINES") 
}
else{
    api(mines)
}


  
function api(mines){
    for(i = 1;i<=mines;i++){
        x = Math.floor((Math.random())*(max-min)+min)
      //  hi(x)
        check(x)
      // console.log(x);
    }
}
    
    
//start()

function hi(){
    if(x == 1 && squ_1 == true){
        d_1 = 1
        squ_1 = false;
        console.log(
            squ_1,squ_2,squ_3,squ_4,squ_5,squ_6,squ_7,squ_8,squ_9,squ_10,squ_11,squ_12,squ_13,squ_14,squ_15,squ_16,
        );
       
  
}
if(x == 2 && squ_2 == true){
    d_2 = 1
        squ_2 = false;
        console.log(
            squ_1,squ_2,squ_3,squ_4,squ_5,squ_6,squ_7,squ_8,squ_9,squ_10,squ_11,squ_12,squ_13,squ_14,squ_15,squ_16,
        );
    
}

if(x == 3 && squ_3 == true){
    d_3 = 1
        squ_3 = false;
        console.log(
            squ_1,squ_2,squ_3,squ_4,squ_5,squ_6,squ_7,squ_8,squ_9,squ_10,squ_11,squ_12,squ_13,squ_14,squ_15,squ_16,
        );
}
if(x == 4 && squ_4 == true){
    d_4 = 1
        squ_4 = false;
        console.log(
            squ_1,squ_2,squ_3,squ_4,squ_5,squ_6,squ_7,squ_8,squ_9,squ_10,squ_11,squ_12,squ_13,squ_14,squ_15,squ_16,
        );
}
if(x == 5 && squ_5 == true){
    d_5 = 1
    squ_5 = false;
    console.log(
        squ_1,squ_2,squ_3,squ_4,squ_5,squ_6,squ_7,squ_8,squ_9,squ_10,squ_11,squ_12,squ_13,squ_14,squ_15,squ_16,
    );
}
if(x == 6 && squ_6 == true){
    d_6 = 1
        squ_6 = false;
        console.log(
            squ_1,squ_2,squ_3,squ_4,squ_5,squ_6,squ_7,squ_8,squ_9,squ_10,squ_11,squ_12,squ_13,squ_14,squ_15,squ_16,
        );
}
if(x == 7 && squ_7 == true){
    d_7 = 1
        squ_7 = false;
        console.log(
            squ_1,squ_2,squ_3,squ_4,squ_5,squ_6,squ_7,squ_8,squ_9,squ_10,squ_11,squ_12,squ_13,squ_14,squ_15,squ_16,
        );
}
if(x == 8 && squ_8 == true){
    d_8 = 1
        squ_8 = false;
        console.log(
            squ_1,squ_2,squ_3,squ_4,squ_5,squ_6,squ_7,squ_8,squ_9,squ_10,squ_11,squ_12,squ_13,squ_14,squ_15,squ_16,
        );
}
if(x == 9 && squ_9 == true){
    d_9 = 1
        squ_9 = false;
        console.log(
            squ_1,squ_2,squ_3,squ_4,squ_5,squ_6,squ_7,squ_8,squ_9,squ_10,squ_11,squ_12,squ_13,squ_14,squ_15,squ_16,
        );
}
if(x == 10 && squ_10 == true){
    d_10 = 1
        squ_10 = false;
        console.log(
            squ_1,squ_2,squ_3,squ_4,squ_5,squ_6,squ_7,squ_8,squ_9,squ_10,squ_11,squ_12,squ_13,squ_14,squ_15,squ_16,
        );
}
if(x == 11 && squ_11 == true){
    d_11 = 1
        squ_11 = false;
        console.log(
            squ_1,squ_2,squ_3,squ_4,squ_5,squ_6,squ_7,squ_8,squ_9,squ_10,squ_11,squ_12,squ_13,squ_14,squ_15,squ_16,
        );
}
if(x == 12 && squ_12 == true){
    d_12 = 1
        squ_12 = false;
        console.log(
            squ_1,squ_2,squ_3,squ_4,squ_5,squ_6,squ_7,squ_8,squ_9,squ_10,squ_11,squ_12,squ_13,squ_14,squ_15,squ_16,
        );
}
if(x == 13 && squ_13 == true){
    d_13 = 1
        squ_13 = false;
        console.log(
            squ_1,squ_2,squ_3,squ_4,squ_5,squ_6,squ_7,squ_8,squ_9,squ_10,squ_11,squ_12,squ_13,squ_14,squ_15,squ_16,
        );
}
if(x == 14 && squ_14 == true){
    d_14 = 1
        squ_14 = false;
        console.log(
            squ_1,squ_2,squ_3,squ_4,squ_5,squ_6,squ_7,squ_8,squ_9,squ_10,squ_11,squ_12,squ_13,squ_14,squ_15,squ_16,
        );
}
if(x == 15 && squ_15 == true){
    d_15 = 1
        squ_15 = false;
        console.log(
            squ_1,squ_2,squ_3,squ_4,squ_5,squ_6,squ_7,squ_8,squ_9,squ_10,squ_11,squ_12,squ_13,squ_14,squ_15,squ_16,
        );
}
if(x == 16 && squ_16 == true){
    d_16 = 1
        squ_16 = false;
        console.log(
            squ_1,squ_2,squ_3,squ_4,squ_5,squ_6,squ_7,squ_8,squ_9,squ_10,squ_11,squ_12,squ_13,squ_14,squ_15,squ_16,
        );
}
//console.log(x);

}
function check(x){
    if(x == 1){
        r_1 += 1
        if(r_1 == 1){
            hi(x)
        }
        if(r_1!= 1 && squ_1 == false){
               x  = x +1
            hi2(x)
            console.log("repeation");
        }
    }
    if(x == 2){
        r_2 += 1
        if(r_2 == 1){
            hi(x)
        }
        if(r_2!=1 && squ_2 == false){
            x  = x +1
            hi2(x)
            console.log("repeation");
        }
    }
    if(x == 3){
        r_3 += 1
        if(r_3 == 1){
            hi(x)
        }
        if(r_3!=1 && squ_3 == false){
               x  = x +1
            hi2(x)
            console.log("repeation");
        }
    }
    if(x == 4){
        r_4 += 1
        if(r_4 == 1){
            hi(x)
        }
        if(r_4!=1 && squ_4 == false){
               x  = x +1
            hi2(x)
            console.log("repeation");
        }
    }
    if(x == 5){
        r_5 += 1
        if(r_5 == 1 ){
            hi(x)
        }
        if(r_5 !=1 && squ_5 == false){
               x  = x +1
            hi2(x)
            console.log("repeation");
        }
    }
    if(x == 6){
        r_6 += 1
        if(r_6 == 1){
            hi(x)
        }
        if(r_6!=1 && squ_6 == false){
               x  = x +1
            hi2(x)
            console.log("repeation");
        }
    }
    if(x == 7){
        r_7 += 1
        if(r_7 == 1){
            hi(x)
        }
        if(r_7!=1 && squ_7 == false){
               x  = x +1
            hi2(x)
            console.log("repeation");
        }
    }
    if(x == 8){
        r_8 += 1
        if(r_8 == 1){
            hi(x)
        }
        if(r_8!=1 && squ_8 == false){
            x =9
            hi2(x)
            console.log("repeation");
        }
    }
    if(x == 9){
        r_9 += 1
        if(r_9 == 1){
            hi(x)
        }
        if(r_9!=1 && squ_9 == false){
               x  = x +1
            hi2(x)
            console.log("repeation");
        }
    }
    if(x == 10){
        r_10 += 1
        if(r_1 == 1){
            hi(x)
        }
        if(r_10 != 1 && squ_10 == false){
               x  = x +1
            hi2(x)
            console.log("repeation");
        }
    }
    if(x == 11){
        r_11 += 1
        if(r_11 == 1){
            hi(x)
        }
        if(r_11!=1 && squ_11 == false){
               x  = x +1
            hi2(x)
            console.log("repeation");
        }
    }
    if(x == 12){
        r_12 += 1
        if(r_12 == 1){
            hi(x)
        }
        if(r_12!=1 && squ_12 == false){
               x  = x +1
            hi2(x)

            console.log("repeation");
        }
    }
    if(x == 13){
        r_13 += 1
        if(r_13 == 1){
            hi(x)
        }
        if(r_13!=1 && squ_13 == false){
               x  = x +1
            hi2(x)
            console.log("repeation");
        }
    }
    if(x == 14){
        r_14 = 15
        if(r_14 == 1){
            hi(x)
        }
        if(r_14!=1 && squ_14 == false){
            x += 1
            hi2(x)
            console.log("repeation");
        }
    }
    if(x == 15){
        r_15 += 1
        if(r_15 == 1){
            hi(x)
        }
        if(r_15!=1 && squ_15 == false){
            x += 1
            hi2(x)
            console.log("repeation");
        }
        if(x == 16){
            r_16 += 1
            if(r_16 == 1){
                hi(x)
            }
            if(r_16!=1 && squ_16 == false){
                   x  = x -1
                hi2(x)
                console.log("repeation");
            }
        }
    }






function hi2(x){
    console.log(x);
    if(x == 1 && squ_1 == true && d_1 == 0){
        squ_1 = false
        console.log("done");
    }
    if(x == 1 && squ_1 == false && d_1 == 1 ){
        hi2(2)
    }
    if(x == 2 && squ_2 == true && d_2 == 0){
        squ_2 = false
        
        console.log("done");
    }
    if(x == 2 && squ_2 == false && d_2 == 1){
        hi2(3)
    }
    if(x == 3 && squ_3 == true && d_3 == 0){
        squ_3 = false
        
        console.log("done");
    }
    if(x == 3 && squ_3 == false && d_3 == 1){
        hi2(4)
    }
    if(x == 4 && squ_4 == true && d_4 == 0){
        squ_4 = false
        
        console.log("done");
    }
    if(x == 4 && squ_4 == false && d_4 == 1){
        hi2(5)
    }
    if(x == 5 && squ_5 == true && d_5 == 0){
        squ_5= false
        
        console.log("done");
    }
    if(x == 5 && squ_5 == false && d_5 == 1){
        hi2(6)
    }
    if(x == 6 && squ_6 == true && d_6 == 0){
        squ_6 = false   
    
        console.log("done");
    }
    if(x == 6 && squ_6 == false && d_6 == 1){
        hi2(7)
        
       
    }
    if(x == 8 && squ_8 == true && d_8 == 0){
        squ_8 = false
        
        console.log("done");
    }
    if(x == 8 && squ_8 == false && d_8 == 1){
        hi2(9)
        
       
    }
    if(x == 7 && squ_7 == true && d_7 == 0){
        squ_7 = false
        
        console.log("done");
    }
    if(x == 7 && squ_7 == false && d_7 == 1){
        hi(8)
        
       
    }
    if(x == 9 && squ_9 == true && d_9 == 0){
        squ_9 = false
        
        console.log("done");
    }
    if(x == 9 && squ_9 == false && d_9 == 1){
        hi2(10)
        
        
    }
    if(x == 11 && squ_11 == true && d_11 == 0){
        squ_11 = false
        
        console.log("done");
    }
    if(x == 11 && squ_11 == false && d_11 == 1){
        hi2(12)
    }
    if(x == 10 && squ_10 == true && d_10 == 0){
        squ_10 = false
        
        console.log("done");
    }
    if(x == 10 && squ_10 == false && d_10 == 1){
        hi2(11)
    }
    if(x == 12 && squ_12 == true && d_12 == 0){
        squ_12 = false
        
        console.log("done");
    }
    if(x == 12 && squ_12 == false && d_12 == 1){
        hi2(13)
    }
    if(x == 13 && squ_13 == true && d_13 == 0){
        squ_13 = false
        
        console.log("done");
    }
    if(x == 13 && squ_13 == false && d_13 == 1){
        hi2(14)
    }
    if(x == 14 && squ_14 == true && d_14 == 0){
        squ_14 = false
        
        console.log("done");
    }
    if(x == 14 && squ_14 == false && d_14 == 1){
        hi2(15)
    }
    if(x == 15 && squ_15 == true && d_15 == 0){
        squ_15 = false
        
        console.log("done");
    }
    if(x == 15 && squ_15 == false && d_15 == 1){
        hi2(16)
    }
    if(x == 16 && squ_16 == true && d_16 == 0){
       squ_16 = false
       
       console.log("done");
    }
    if(x == 16 && squ_16 == false && d_16 == 1){
        hi2(1)
    }
    console.log("yo"+
        squ_1,squ_2,squ_3,squ_4,squ_5,squ_6,squ_7,squ_8,squ_9,squ_10,squ_11,squ_12,squ_13,squ_14,squ_15,squ_16,
    );
}





}















//document.body.style.backgroundColor



//document.body.style.fontSize


tile_1.onclick = function(){
    if(squ_1 == true){
        winn(tile_1)
    }
    if(squ_1 == false){
        loss(tile_1)
    }
}
tile_2.onclick = function(){
    if(squ_2 == true){
        winn(tile_2)
    }
    if(squ_2 == false){
        loss(tile_2)
    }
}

tile_3.onclick = function(){
    if(squ_3 == true){
        winn(tile_3)
    }
    if(squ_1 == false){
        loss(tile_3)
    }
}
tile_4.onclick = function(){
    if(squ_4 == true){
        winn(tile_4)
    }
    if(squ_4 == false){
        loss(tile_4)
    }
}

tile_5.onclick = function(){
    if(squ_5 == true){
        winn(tile_5)
    }
    if(squ_5 == false){
        loss(tile_5)
    }
}

tile_6.onclick = function(){
    if(squ_6 == true){
        winn(tile_6)
    }
    if(squ_6 == false){
        loss(tile_6)
    }
}
tile_7.onclick = function(){
    if(squ_7 == true){
        winn(tile_7)
    }
    if(squ_7 == false){
        loss(tile_7)
    }
}

tile_8.onclick = function(){
    if(squ_8 == true){
        winn(tile_8)
    }
    if(squ_8 == false){
        loss(tile_8)
    }
}

tile_9.onclick = function(){
    if(squ_9 == true){
        winn(tile_9)
    }
    if(squ_9 == false){
        loss(tile_9)
    }
}

tile_10.onclick = function(){
    if(squ_10 == true){
        winn(tile_10)
    }
    if(squ_10 == false){
        loss(tile_10)
    }
}

tile_11.onclick = function(){
    if(squ_11 == true){
        winn(tile_11)
    }
    if(squ_1 == false){
        loss(tile_11)
    }
}

tile_12.onclick = function(){
    if(squ_12 == true){
        winn(tile_12)
    }
    if(squ_12 == false){
        loss(tile_12)
    }
}

tile_13.onclick = function(){
    if(squ_13 == true){
        winn(tile_13)
    }
    if(squ_13 == false){
        loss(tile_13)
    }
}

tile_14.onclick = function(){
    if(squ_14 == true){
        winn(tile_14)
    }
    if(squ_14 == false){
        loss(tile_14)
    }
}

tile_15.onclick = function(){
    if(squ_15 == true){
        winn(tile_15)
    }
    if(squ_15 == false){
        loss(tile_15)
    }
}

tile_16.onclick = function(){
    if(squ_16 == true){
        winn(tile_16)
    }
    if(squ_16 == false){
        loss(tile_16)
    }
}


























function winn(l){
    l.style.backgroundColor = "green"
        l.textContent = "💎"
        l.style.fontSize = "40px"
        sound.play()
}
function loss(o){
    o.style.backgroundColor = "red"
    o.textContent = "💀"
    o.style.fontSize = "40px"
    sound2.play()
=======
squ_1 = true,squ_2 = true,squ_3 = true,squ_4 = true,squ_5 = true,squ_6 = true,squ_7 = true,squ_8 = true,squ_9 = true,squ_10 = true,squ_11 = true,squ_12 = true,squ_13 = true,squ_14 = true,squ_15 = true,squ_16 = true
max = 16,min = 1;
r_1 = 0,r_2 = 0,r_3 = 0,r_4 = 0,r_5 = 0,r_6 = 0,r_7 = 0,r_8 = 0,r_9 = 0,r_10 = 0,r_11 = 0,r_12 = 0,r_13 = 0,r_14 = 0,r_15 = 0,r_16 = 0,




d_1 = 0,d_2 = 0,d_3 = 0,d_4 = 0,d_5 = 0,d_6 = 0,d_7 = 0,d_8 = 0,d_9 = 0,d_10 = 0,d_11 = 0,d_12 = 0,d_13 = 0,d_14 = 0,d_15 = 0,d_16 = 0,

tile_1 = document.getElementById("tile_1")
tile_2 = document.getElementById("tile_2")
tile_3 = document.getElementById("tile_3")
tile_4 = document.getElementById("tile_4")
tile_5 = document.getElementById("tile_5")
tile_6 = document.getElementById("tile_6")
tile_7 = document.getElementById("tile_7")
tile_8 = document.getElementById("tile_8")
tile_9 = document.getElementById("tile_9")
tile_10 = document.getElementById("tile_10")
tile_11 = document.getElementById("tile_11")
tile_12 = document.getElementById("tile_12")
tile_13 = document.getElementById("tile_13")
tile_14 = document.getElementById("tile_14")
tile_15 = document.getElementById("tile_15")
tile_16 = document.getElementById("tile_16")
sound = document.getElementById("win")
sound.style.display = "none"
sound2 = document.getElementById("loss")
sound2.style.display = "none"







mines = window.prompt("ENTER NUMBER OF MINES")
if(mines >=16 || mines == 0){
    mines = window.prompt("ENTER NUMBER OF MINES") 
}
else{
    api(mines)
}


  
function api(mines){
    for(i = 1;i<=mines;i++){
        x = Math.floor((Math.random())*(max-min)+min)
      //  hi(x)
        check(x)
      // console.log(x);
    }
}
    
    
//start()

function hi(){
    if(x == 1 && squ_1 == true){
        d_1 = 1
        squ_1 = false;
        console.log(
            squ_1,squ_2,squ_3,squ_4,squ_5,squ_6,squ_7,squ_8,squ_9,squ_10,squ_11,squ_12,squ_13,squ_14,squ_15,squ_16,
        );
       
  
}
if(x == 2 && squ_2 == true){
    d_2 = 1
        squ_2 = false;
        console.log(
            squ_1,squ_2,squ_3,squ_4,squ_5,squ_6,squ_7,squ_8,squ_9,squ_10,squ_11,squ_12,squ_13,squ_14,squ_15,squ_16,
        );
    
}

if(x == 3 && squ_3 == true){
    d_3 = 1
        squ_3 = false;
        console.log(
            squ_1,squ_2,squ_3,squ_4,squ_5,squ_6,squ_7,squ_8,squ_9,squ_10,squ_11,squ_12,squ_13,squ_14,squ_15,squ_16,
        );
}
if(x == 4 && squ_4 == true){
    d_4 = 1
        squ_4 = false;
        console.log(
            squ_1,squ_2,squ_3,squ_4,squ_5,squ_6,squ_7,squ_8,squ_9,squ_10,squ_11,squ_12,squ_13,squ_14,squ_15,squ_16,
        );
}
if(x == 5 && squ_5 == true){
    d_5 = 1
    squ_5 = false;
    console.log(
        squ_1,squ_2,squ_3,squ_4,squ_5,squ_6,squ_7,squ_8,squ_9,squ_10,squ_11,squ_12,squ_13,squ_14,squ_15,squ_16,
    );
}
if(x == 6 && squ_6 == true){
    d_6 = 1
        squ_6 = false;
        console.log(
            squ_1,squ_2,squ_3,squ_4,squ_5,squ_6,squ_7,squ_8,squ_9,squ_10,squ_11,squ_12,squ_13,squ_14,squ_15,squ_16,
        );
}
if(x == 7 && squ_7 == true){
    d_7 = 1
        squ_7 = false;
        console.log(
            squ_1,squ_2,squ_3,squ_4,squ_5,squ_6,squ_7,squ_8,squ_9,squ_10,squ_11,squ_12,squ_13,squ_14,squ_15,squ_16,
        );
}
if(x == 8 && squ_8 == true){
    d_8 = 1
        squ_8 = false;
        console.log(
            squ_1,squ_2,squ_3,squ_4,squ_5,squ_6,squ_7,squ_8,squ_9,squ_10,squ_11,squ_12,squ_13,squ_14,squ_15,squ_16,
        );
}
if(x == 9 && squ_9 == true){
    d_9 = 1
        squ_9 = false;
        console.log(
            squ_1,squ_2,squ_3,squ_4,squ_5,squ_6,squ_7,squ_8,squ_9,squ_10,squ_11,squ_12,squ_13,squ_14,squ_15,squ_16,
        );
}
if(x == 10 && squ_10 == true){
    d_10 = 1
        squ_10 = false;
        console.log(
            squ_1,squ_2,squ_3,squ_4,squ_5,squ_6,squ_7,squ_8,squ_9,squ_10,squ_11,squ_12,squ_13,squ_14,squ_15,squ_16,
        );
}
if(x == 11 && squ_11 == true){
    d_11 = 1
        squ_11 = false;
        console.log(
            squ_1,squ_2,squ_3,squ_4,squ_5,squ_6,squ_7,squ_8,squ_9,squ_10,squ_11,squ_12,squ_13,squ_14,squ_15,squ_16,
        );
}
if(x == 12 && squ_12 == true){
    d_12 = 1
        squ_12 = false;
        console.log(
            squ_1,squ_2,squ_3,squ_4,squ_5,squ_6,squ_7,squ_8,squ_9,squ_10,squ_11,squ_12,squ_13,squ_14,squ_15,squ_16,
        );
}
if(x == 13 && squ_13 == true){
    d_13 = 1
        squ_13 = false;
        console.log(
            squ_1,squ_2,squ_3,squ_4,squ_5,squ_6,squ_7,squ_8,squ_9,squ_10,squ_11,squ_12,squ_13,squ_14,squ_15,squ_16,
        );
}
if(x == 14 && squ_14 == true){
    d_14 = 1
        squ_14 = false;
        console.log(
            squ_1,squ_2,squ_3,squ_4,squ_5,squ_6,squ_7,squ_8,squ_9,squ_10,squ_11,squ_12,squ_13,squ_14,squ_15,squ_16,
        );
}
if(x == 15 && squ_15 == true){
    d_15 = 1
        squ_15 = false;
        console.log(
            squ_1,squ_2,squ_3,squ_4,squ_5,squ_6,squ_7,squ_8,squ_9,squ_10,squ_11,squ_12,squ_13,squ_14,squ_15,squ_16,
        );
}
if(x == 16 && squ_16 == true){
    d_16 = 1
        squ_16 = false;
        console.log(
            squ_1,squ_2,squ_3,squ_4,squ_5,squ_6,squ_7,squ_8,squ_9,squ_10,squ_11,squ_12,squ_13,squ_14,squ_15,squ_16,
        );
}
//console.log(x);

}
function check(x){
    if(x == 1){
        r_1 += 1
        if(r_1 == 1){
            hi(x)
        }
        if(r_1!= 1 && squ_1 == false){
               x  = x +1
            hi2(x)
            console.log("repeation");
        }
    }
    if(x == 2){
        r_2 += 1
        if(r_2 == 1){
            hi(x)
        }
        if(r_2!=1 && squ_2 == false){
            x  = x +1
            hi2(x)
            console.log("repeation");
        }
    }
    if(x == 3){
        r_3 += 1
        if(r_3 == 1){
            hi(x)
        }
        if(r_3!=1 && squ_3 == false){
               x  = x +1
            hi2(x)
            console.log("repeation");
        }
    }
    if(x == 4){
        r_4 += 1
        if(r_4 == 1){
            hi(x)
        }
        if(r_4!=1 && squ_4 == false){
               x  = x +1
            hi2(x)
            console.log("repeation");
        }
    }
    if(x == 5){
        r_5 += 1
        if(r_5 == 1 ){
            hi(x)
        }
        if(r_5 !=1 && squ_5 == false){
               x  = x +1
            hi2(x)
            console.log("repeation");
        }
    }
    if(x == 6){
        r_6 += 1
        if(r_6 == 1){
            hi(x)
        }
        if(r_6!=1 && squ_6 == false){
               x  = x +1
            hi2(x)
            console.log("repeation");
        }
    }
    if(x == 7){
        r_7 += 1
        if(r_7 == 1){
            hi(x)
        }
        if(r_7!=1 && squ_7 == false){
               x  = x +1
            hi2(x)
            console.log("repeation");
        }
    }
    if(x == 8){
        r_8 += 1
        if(r_8 == 1){
            hi(x)
        }
        if(r_8!=1 && squ_8 == false){
            x =9
            hi2(x)
            console.log("repeation");
        }
    }
    if(x == 9){
        r_9 += 1
        if(r_9 == 1){
            hi(x)
        }
        if(r_9!=1 && squ_9 == false){
               x  = x +1
            hi2(x)
            console.log("repeation");
        }
    }
    if(x == 10){
        r_10 += 1
        if(r_1 == 1){
            hi(x)
        }
        if(r_10 != 1 && squ_10 == false){
               x  = x +1
            hi2(x)
            console.log("repeation");
        }
    }
    if(x == 11){
        r_11 += 1
        if(r_11 == 1){
            hi(x)
        }
        if(r_11!=1 && squ_11 == false){
               x  = x +1
            hi2(x)
            console.log("repeation");
        }
    }
    if(x == 12){
        r_12 += 1
        if(r_12 == 1){
            hi(x)
        }
        if(r_12!=1 && squ_12 == false){
               x  = x +1
            hi2(x)

            console.log("repeation");
        }
    }
    if(x == 13){
        r_13 += 1
        if(r_13 == 1){
            hi(x)
        }
        if(r_13!=1 && squ_13 == false){
               x  = x +1
            hi2(x)
            console.log("repeation");
        }
    }
    if(x == 14){
        r_14 = 15
        if(r_14 == 1){
            hi(x)
        }
        if(r_14!=1 && squ_14 == false){
            x += 1
            hi2(x)
            console.log("repeation");
        }
    }
    if(x == 15){
        r_15 += 1
        if(r_15 == 1){
            hi(x)
        }
        if(r_15!=1 && squ_15 == false){
            x += 1
            hi2(x)
            console.log("repeation");
        }
        if(x == 16){
            r_16 += 1
            if(r_16 == 1){
                hi(x)
            }
            if(r_16!=1 && squ_16 == false){
                   x  = x -1
                hi2(x)
                console.log("repeation");
            }
        }
    }






function hi2(x){
    console.log(x);
    if(x == 1 && squ_1 == true && d_1 == 0){
        squ_1 = false
        console.log("done");
    }
    if(x == 1 && squ_1 == false && d_1 == 1 ){
        hi2(2)
    }
    if(x == 2 && squ_2 == true && d_2 == 0){
        squ_2 = false
        
        console.log("done");
    }
    if(x == 2 && squ_2 == false && d_2 == 1){
        hi2(3)
    }
    if(x == 3 && squ_3 == true && d_3 == 0){
        squ_3 = false
        
        console.log("done");
    }
    if(x == 3 && squ_3 == false && d_3 == 1){
        hi2(4)
    }
    if(x == 4 && squ_4 == true && d_4 == 0){
        squ_4 = false
        
        console.log("done");
    }
    if(x == 4 && squ_4 == false && d_4 == 1){
        hi2(5)
    }
    if(x == 5 && squ_5 == true && d_5 == 0){
        squ_5= false
        
        console.log("done");
    }
    if(x == 5 && squ_5 == false && d_5 == 1){
        hi2(6)
    }
    if(x == 6 && squ_6 == true && d_6 == 0){
        squ_6 = false   
    
        console.log("done");
    }
    if(x == 6 && squ_6 == false && d_6 == 1){
        hi2(7)
        
       
    }
    if(x == 8 && squ_8 == true && d_8 == 0){
        squ_8 = false
        
        console.log("done");
    }
    if(x == 8 && squ_8 == false && d_8 == 1){
        hi2(9)
        
       
    }
    if(x == 7 && squ_7 == true && d_7 == 0){
        squ_7 = false
        
        console.log("done");
    }
    if(x == 7 && squ_7 == false && d_7 == 1){
        hi(8)
        
       
    }
    if(x == 9 && squ_9 == true && d_9 == 0){
        squ_9 = false
        
        console.log("done");
    }
    if(x == 9 && squ_9 == false && d_9 == 1){
        hi2(10)
        
        
    }
    if(x == 11 && squ_11 == true && d_11 == 0){
        squ_11 = false
        
        console.log("done");
    }
    if(x == 11 && squ_11 == false && d_11 == 1){
        hi2(12)
    }
    if(x == 10 && squ_10 == true && d_10 == 0){
        squ_10 = false
        
        console.log("done");
    }
    if(x == 10 && squ_10 == false && d_10 == 1){
        hi2(11)
    }
    if(x == 12 && squ_12 == true && d_12 == 0){
        squ_12 = false
        
        console.log("done");
    }
    if(x == 12 && squ_12 == false && d_12 == 1){
        hi2(13)
    }
    if(x == 13 && squ_13 == true && d_13 == 0){
        squ_13 = false
        
        console.log("done");
    }
    if(x == 13 && squ_13 == false && d_13 == 1){
        hi2(14)
    }
    if(x == 14 && squ_14 == true && d_14 == 0){
        squ_14 = false
        
        console.log("done");
    }
    if(x == 14 && squ_14 == false && d_14 == 1){
        hi2(15)
    }
    if(x == 15 && squ_15 == true && d_15 == 0){
        squ_15 = false
        
        console.log("done");
    }
    if(x == 15 && squ_15 == false && d_15 == 1){
        hi2(16)
    }
    if(x == 16 && squ_16 == true && d_16 == 0){
       squ_16 = false
       
       console.log("done");
    }
    if(x == 16 && squ_16 == false && d_16 == 1){
        hi2(1)
    }
    console.log("yo"+
        squ_1,squ_2,squ_3,squ_4,squ_5,squ_6,squ_7,squ_8,squ_9,squ_10,squ_11,squ_12,squ_13,squ_14,squ_15,squ_16,
    );
}





}















//document.body.style.backgroundColor



//document.body.style.fontSize


tile_1.onclick = function(){
    if(squ_1 == true){
        winn(tile_1)
    }
    if(squ_1 == false){
        loss(tile_1)
    }
}
tile_2.onclick = function(){
    if(squ_2 == true){
        winn(tile_2)
    }
    if(squ_2 == false){
        loss(tile_2)
    }
}

tile_3.onclick = function(){
    if(squ_3 == true){
        winn(tile_3)
    }
    if(squ_1 == false){
        loss(tile_3)
    }
}
tile_4.onclick = function(){
    if(squ_4 == true){
        winn(tile_4)
    }
    if(squ_4 == false){
        loss(tile_4)
    }
}

tile_5.onclick = function(){
    if(squ_5 == true){
        winn(tile_5)
    }
    if(squ_5 == false){
        loss(tile_5)
    }
}

tile_6.onclick = function(){
    if(squ_6 == true){
        winn(tile_6)
    }
    if(squ_6 == false){
        loss(tile_6)
    }
}
tile_7.onclick = function(){
    if(squ_7 == true){
        winn(tile_7)
    }
    if(squ_7 == false){
        loss(tile_7)
    }
}

tile_8.onclick = function(){
    if(squ_8 == true){
        winn(tile_8)
    }
    if(squ_8 == false){
        loss(tile_8)
    }
}

tile_9.onclick = function(){
    if(squ_9 == true){
        winn(tile_9)
    }
    if(squ_9 == false){
        loss(tile_9)
    }
}

tile_10.onclick = function(){
    if(squ_10 == true){
        winn(tile_10)
    }
    if(squ_10 == false){
        loss(tile_10)
    }
}

tile_11.onclick = function(){
    if(squ_11 == true){
        winn(tile_11)
    }
    if(squ_1 == false){
        loss(tile_11)
    }
}

tile_12.onclick = function(){
    if(squ_12 == true){
        winn(tile_12)
    }
    if(squ_12 == false){
        loss(tile_12)
    }
}

tile_13.onclick = function(){
    if(squ_13 == true){
        winn(tile_13)
    }
    if(squ_13 == false){
        loss(tile_13)
    }
}

tile_14.onclick = function(){
    if(squ_14 == true){
        winn(tile_14)
    }
    if(squ_14 == false){
        loss(tile_14)
    }
}

tile_15.onclick = function(){
    if(squ_15 == true){
        winn(tile_15)
    }
    if(squ_15 == false){
        loss(tile_15)
    }
}

tile_16.onclick = function(){
    if(squ_16 == true){
        winn(tile_16)
    }
    if(squ_16 == false){
        loss(tile_16)
    }
}


























function winn(l){
    l.style.backgroundColor = "green"
        l.textContent = "💎"
        l.style.fontSize = "40px"
        sound.play()
}
function loss(o){
    o.style.backgroundColor = "red"
    o.textContent = "💀"
    o.style.fontSize = "40px"
    sound2.play()
>>>>>>> 0485022 (flip game has started. java script in progress)
}