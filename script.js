import Block from "./player.js";

// initializing canvas

const canvas = document.getElementsByTagName("canvas")[0]
const ctx = canvas.getContext("2d");

canvas.width = 1100;
canvas.height = 700;

const background = new Image();
background.src = "assets/images/background.png";

// Speed

var x_vel1 = 0;
var y_vel1 = 0;

var x_vel2 = 0; 
var y_vel2 = 0 

/* Importing Images */

// JET-1
const jet1 = new Image();
jet1.src = "assets/images/jet1.png";
// JET-2
const jet2 = new Image();
jet2.src = "assets/images/jet2.png";
// BULLETS;
const bullet = new Image();
bullet.src = "assets/images/bullet.png";


//inital positions
var player1 = new Block(jet1,50,310,80,80);
var player2 = new Block(jet2,950,310,80,80);
var bulletBlock = new Block(bullet,-10,-10,60,50);



// Display images on canvas
function draw(ctx){
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    player1.draw(ctx);
    player2.draw(ctx);
}


// Implement Movemets
function move(){

    //player1 Movements;
    player2.x += x_vel1;
    player2.y += y_vel1;

    //plaer2 Movements;
    player1.x += x_vel2;
    player1.y += y_vel2;

    function handleKeyDown(event){
        if(event.code == "ArrowUp"){
            y_vel1 = -5;
        }
        if(event.code == "ArrowDown"){
            y_vel1 = 5;
        }
        if(event.code == "ArrowLeft"){
            x_vel1 = -5;
        }
        if(event.code == "ArrowRight"){
            x_vel1 = 5;
        }
        if(event.code == "KeyW"){
            y_vel2 = -5;
        }
        if(event.code == "KeyS"){
            y_vel2 = 5;
        }
        if(event.code == "KeyA"){
            x_vel2 = -5;
        }
        if(event.code == "KeyD"){
            x_vel2 = 5;
        }
    }
    function handleKeyUP(event){
        if(event.code == "ArrowUp"){
            y_vel1 = 0;
        }
        if(event.code == "ArrowDown"){
            y_vel1 =  0;
        }
        if(event.code == "ArrowLeft"){
            x_vel1 =  0;
        }
        if(event.code == "ArrowRight"){
            x_vel1 = 0;
        }
        if(event.code == "KeyW"){
            y_vel2 = 0;
        }
        if(event.code == "KeyS"){
            y_vel2 =  0;
        }
        if(event.code == "KeyA"){
            x_vel2 = 0;
        }
        if(event.code == "KeyD"){
            x_vel2 =  0;
        }
    }

    document.addEventListener("keydown",handleKeyDown);
    document.addEventListener("keyup",handleKeyUP);
}

function main(){
    move();
    draw(ctx);
}





setInterval(main,1000/60);


