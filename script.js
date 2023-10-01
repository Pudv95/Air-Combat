import Block from "./player.js";

// initializing canvas

const canvas = document.getElementsByTagName("canvas")[0]
const ctx = canvas.getContext("2d");

canvas.width = 1100;
canvas.height = 700;

const background = new Image();
background.src = "assets/images/background.png";

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
var bulletBlock = new Block(bullet,100,100,60,50)




function draw(ctx){
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    player1.draw(ctx);
    player2.draw(ctx);
}

function main(){
    draw(ctx);
}





setInterval(main,1000/60);


