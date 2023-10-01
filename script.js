import Block from "./player.js";

// initializing canvas

const canvas = document.getElementsByTagName("canvas")[0]
const ctx = canvas.getContext("2d");

canvas.width = 1100;
canvas.height = 700;

const background = new Image();
background.src = "assets/images/background.png";

/* Speed */

// speed
var speed1 = 5;
var speed2 = 5;

// For Jet-1
var x_velocity2_aage = 0;
var x_velocity2_piche = 0;
var y_velocity2_aage = 0;
var y_velocity2_piche = 0;

// For Jet-2
var x_velocity1_aage = 0;
var x_velocity1_piche = 0;
var y_velocity1_aage = 0;
var y_velocity1_piche = 0;

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
var player1 = new Block(jet1, 50, 310, 80, 80);
var player2 = new Block(jet2, 950, 310, 80, 80);
var bulletBlock = new Block(bullet, -10, -10, 60, 50);



// Display images on canvas
function draw(ctx) {
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    player1.draw(ctx);
    player2.draw(ctx);
}


// Implement Movemets
function move() {

    //player1 Movements;
    if(player1.x < 450)player1.x += x_velocity1_aage;
    if(player1.x > 0) player1.x -= x_velocity1_piche;
    if(player1.y > 0)player1.y -= y_velocity1_aage;
    if(player1.y < 630) player1.y += y_velocity1_piche;

    //plaer2 Movements;
    if(player2.x > 550)player2.x -= x_velocity2_piche;
    if(player2.x < 1010)player2.x += x_velocity2_aage;
    if(player2.y > 0)player2.y -= y_velocity2_aage;
    if(player2.y < 620)player2.y += y_velocity2_piche;

    function handleKeyDown(event) {
        //player 2
        if (event.code == "ArrowUp") {
            y_velocity2_aage = speed2;
        }
        if (event.code == "ArrowDown") {
            y_velocity2_piche = speed2;
        }
        if (event.code == "ArrowLeft") {
            x_velocity2_piche = speed2;
        }
        if (event.code == "ArrowRight") {
            x_velocity2_aage = speed2;
        }

        //player 2
        if (event.code == "KeyW") {
            y_velocity1_aage = speed2;
        }
        if (event.code == "KeyS") {
            y_velocity1_piche = speed2;
        }
        if (event.code == "KeyA") {
            x_velocity1_piche = speed2;
        }
        if (event.code == "KeyD") {
            x_velocity1_aage = speed2;
        }
    }
    function handleKeyUP(event) {
        if (event.code == "ArrowUp") {
            y_velocity2_aage = 0;
        }
        if (event.code == "ArrowDown") {
            y_velocity2_piche = 0;
        }
        if (event.code == "ArrowLeft") {
            x_velocity2_piche = 0;
        }
        if (event.code == "ArrowRight") {
            x_velocity2_aage = 0;
        }
        if (event.code == "KeyW") {
            y_velocity1_aage = 0;
        }
        if (event.code == "KeyS") {
            y_velocity1_piche = 0;
        }
        if (event.code == "KeyA") {
            x_velocity1_piche = 0;
        }
        if (event.code == "KeyD") {
            x_velocity1_aage = 0;
        }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUP);
}

function main() {
    move();
    draw(ctx);
}





setInterval(main, 1000 / 60);


