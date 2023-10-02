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

//Score
var p1Score = 0;
var p2Score = 0;



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


//Health Bar
const maxHealth = 300;

let Player1_health = maxHealth;
let Player2_health = maxHealth;

function calculateHealthColor(health) {
    let R = 0;
    let G = 225;
    let B = 0;

    if (health > 150 && R <= 225) {
        R = Math.round((9 / 4) * (300 - health));
    } else if (0 <= health && health < 150) {
        R = 225;
        G = Math.round((3 / 2) * health);
    }

    return `rgb(${R}, ${G}, ${B})`;
}

function drawHealthBar() {
    const healthBarHeight = 20;


    ctx.fillStyle = calculateHealthColor(Player1_health);
    ctx.fillRect(50, 50, Player1_health, healthBarHeight);

    ctx.fillStyle = calculateHealthColor(Player2_health);
    ctx.fillRect(700 + maxHealth - Player2_health, 50, Player2_health, healthBarHeight);
}



// Display images on canvas
function draw(ctx){

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    ctx.font = "30px Comic Sans MS";
    ctx.fillStyle = "white";
    ctx.fillText(`${p1Score}  -  ${p2Score}` , 480, 70);
    ctx.fillText(`Player-1` , 120, 40);
    ctx.fillText(`Player-2` , 800, 40);
    drawHealthBar();
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
    if (bullet.x <= player.x + 50 && bullet.x >= player.x-20 && bullet.y <= player.y + 40 && bullet.y >= player.y) {
        // console.log("maar diya behenchod");
        if(bullet.x<520){
            Player1_health -= 10;
        }
        else{
            Player2_health -= 10;
        }
        document.getElementById("explosion_sound").volume = 0.3;
        document.getElementById("explosion_sound").currentTime = 0;
        document.getElementById("explosion_sound").play(); 
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
        document.getElementById("bullet_sound").volume = 0.3;
        document.getElementById("bullet_sound").currentTime = 0;
        document.getElementById("bullet_sound").play();
        const newBullet = new Bullet(bullet1, player1.x, player1.y+15, 50,60, 10);
        bullets1.push(newBullet);
        player1Cooldown = shootingCooldown;
    }

    if (player2Shooting && player2Cooldown == 0 && bullets2.length < maxBulletCount) {
        // console.log("chal ja bsdk!!");
        document.getElementById("bullet_sound").volume = 0.3;
        document.getElementById("bullet_sound").currentTime = 0;
        document.getElementById("bullet_sound").play(); 
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

function reset(){
    Player1_health = maxHealth;
    Player2_health = maxHealth;
    bullets1 = [];
    bullets2 = [];
    player1.x = 50;player1.y = 310;
    player2.x = 950;player2.y = 310;
    x_velocity2_aage = 0;
    x_velocity2_piche = 0;
    y_velocity2_aage = 0;
    y_velocity2_piche = 0;

    // For Jet-2
    x_velocity1_aage = 0;
    x_velocity1_piche = 0;
    y_velocity1_aage = 0;
    y_velocity1_piche = 0;

    //Firing
    player1Shooting = false;
    player2Shooting = false;

    document.addEventListener("keydown",(event)=>{
        if(event.key == "Enter"){
            running = true;
        }
    });
}

var running = true;

function main() {
    if(Player1_health == 0 || Player2_health == 0){
        if(Player1_health) p1Score++;
        else p2Score++;
        running = false;
        console.log("Here");
        ctx.font = "30px Comic Sans MS";
        ctx.fillStyle = "white";
        ctx.fillText((Player1_health)?"Player 1 won":"Player 2 Won", 450, 300);
        ctx.fillText("Press Enter To Play again", 370, 350);
        var rematch = true;
        if(rematch){
            reset();
        }
        else{
            console.log("Done");
        }
    }
    if(running){
        Fire();
        move();
        draw(ctx);
    }
}


// function play(){
    // document.getElementById("bg_music").play();
    if(running)
        setInterval(main, 1000 / 60);
// }

// document.getElementById("play").addEventListener("click",play,false);


