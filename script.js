import Block from "./block.js";
import { Bullet } from "./bullet.js";

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

//Firing
var player1Shooting = false;
var player2Shooting = false;

export var bullets1 = [];
export var bullets2 = [];
const shootingCooldown = 8;
let player1Cooldown = 0;
let player2Cooldown = 0;
const maxBulletCount = 5;


/* Importing Images */

// JET-1
const jet1 = new Image();
jet1.src = "assets/images/jet1.png";
// JET-2
const jet2 = new Image();
jet2.src = "assets/images/jet2.png";
// BULLETS;
const bullet2 = new Image();
bullet2.src = "assets/images/bullet1.png";
const bullet1 = new Image();
bullet1.src = "assets/images/bullet2.png";


//inital positions
export var player1 = new Block(jet1, 50, 310, 80, 80);
export var player2 = new Block(jet2, 950, 310, 80, 80);



// Display images on canvas
function draw(ctx){

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    player1.draw(ctx);
    player2.draw(ctx);

    for (let bullet1 of bullets1) {
        bullet1.draw(ctx);
    }

    for (let bullet1 of bullets2) {
        bullet1.draw(ctx);
    }

}

document.addEventListener('keydown', function (event) {
    if (event.code == "ControlLeft") {
        player1Shooting = true;
    }
});

document.addEventListener('keyup', function (event) {
    if (event.code == "ControlLeft") {
        player1Shooting = false;
    }
});
document.addEventListener('keydown', function (event) {
    if (event.code == "ControlRight") { 
        player2Shooting = true;
    }
});

document.addEventListener('keyup', function (event) {
    if (event.code == "ControlRight") {
        player2Shooting = false;
    }
});

function move() {

    //player1 Movements;
    if (player1.x < 450) player1.x += x_velocity1_aage;
    if (player1.x > 0) player1.x -= x_velocity1_piche;
    if (player1.y > 0) player1.y -= y_velocity1_aage;
    if (player1.y < 630) player1.y += y_velocity1_piche;

    //plaer2 Movements;
    if (player2.x > 550) player2.x -= x_velocity2_piche;
    if (player2.x < 1010) player2.x += x_velocity2_aage;
    if (player2.y > 0) player2.y -= y_velocity2_aage;
    if (player2.y < 620) player2.y += y_velocity2_piche;

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
            y_velocity1_aage = speed1;
        }
        if (event.code == "KeyS") {
            y_velocity1_piche = speed1;
        }
        if (event.code == "KeyA") {
            x_velocity1_piche = speed1;
        }
        if (event.code == "KeyD") {
            x_velocity1_aage = speed1;
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

function collide(bullet, player) {
    if (bullet.x <= player.x + 50 && bullet.x >= player.x-20 && bullet.y <= player.y + 80 && bullet.y >= player.y) {
        // console.log("maar diya behenchod");
        return false;
    }

    return bullet.x < canvas.width && bullet.x > 0;
}

function Fire(){
    

    if (player1Cooldown > 0) {
        player1Cooldown--;
    }

    if (player2Cooldown > 0) {
        player2Cooldown--;
    }

    if (player1Shooting && player1Cooldown == 0 && bullets1.length< maxBulletCount) {
        // console.log("chal ja bsdk!!");
        const newBullet = new Bullet(bullet1, player1.x, player1.y+15, 50,60, 10);
        bullets1.push(newBullet);
        player1Cooldown = shootingCooldown;
    }

    if (player2Shooting && player2Cooldown == 0 && bullets2.length < maxBulletCount) {
        // console.log("chal ja bsdk!!");
        const newBullet = new Bullet(bullet2, player2.x, player2.y + 15, 50, 60, -10);
        bullets2.push(newBullet);
        player2Cooldown = shootingCooldown;
    }

    for (let bullet of bullets1) {
        bullet.shoot();
    }

    for (let bullet of bullets2) {
        bullet.shoot();
    }

    bullets1 = bullets1.filter((bullet) => collide(bullet,player2));
    bullets2 = bullets2.filter((bullet) => collide(bullet,player1));
    
}



function main() {
    Fire();
    move();
    draw(ctx);
}





setInterval(main, 1000 / 60);


