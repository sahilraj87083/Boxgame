let box1 = document.getElementById("Box1")
let box2 = document.getElementById("Box2")
let box3 = document.getElementById("Box3")
let box4 = document.getElementById("Box4")


box1.addEventListener("mouseenter" , function(){
    let num = Math.floor(Math.random() * 100 );
    box1.innerHTML = (`<h1>${num}</h1>`)
})
box1.addEventListener("mouseleave" , function(){
    box1.innerHTML = (`<h1>1</h1>`)
})

box1.addEventListener("dblclick" , function(){
    let R = Math.floor(Math.random()*256);
    let G = Math.floor(Math.random()*256);
    let B = Math.floor(Math.random()*256);
    
    box1.style.backgroundColor = `rgb(${R} , ${G} , ${B} )`;
})


let col = "red";
box2.addEventListener("mouseenter" , function(){
    if(col == "red"){
        box2.style.backgroundColor = col;
        col = "green";
    }else if(col == "green"){
        box2.style.backgroundColor = col;
        col = "blue";
    }else{
        box2.style.backgroundColor = col;
        col = "red";
    }
})
box2.addEventListener("mouseleave" , function(){
    box2.style.backgroundColor = "white";
})


box3.addEventListener("mouseenter" , function(){
    // (0 , 155)
    let R = Math.floor(Math.random()*256);
    let G = Math.floor(Math.random()*256);
    let B = Math.floor(Math.random()*256);
    
    box3.style.backgroundColor = `rgb(${R} , ${G} , ${B} )`;
})
box3.addEventListener("mouseleave" , function(){
    box3.style.backgroundColor = "white";
})


box4.addEventListener("click" , function(){
    let R = Math.floor(Math.random()*256);
    let G = Math.floor(Math.random()*256);
    let B = Math.floor(Math.random()*256);

    box1.style.backgroundColor = `rgb(255 , 255 , ${B} )`;
    box2.style.backgroundColor = `rgb(${R} , 255 , 255 )`;
    box3.style.backgroundColor = `rgb(255 , ${G} , 255 )`;
})
box4.addEventListener("mouseleave" , function(){
    box1.style.backgroundColor = "white";
    box2.style.backgroundColor = "white";
    box3.style.backgroundColor = "white";
})

let main = document.getElementById("main")
let crsr = document.getElementById("cursor")

main.addEventListener("mousemove" , function(details){
    crsr.style.left = details.x + "px";
    crsr.style.top = details.y + "px";
})