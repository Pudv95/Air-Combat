import { Bullet } from "./bullet.js";
import { Player1_health, Player2_health, canvas, player1Cooldown, player2Cooldown, player1Shooting, bullets1, maxBulletCount, bullet1, player1, shootingCooldown, player2Shooting, bullets2, bullet2, player2 } from "./script.js";

function collide(bullet, player) {
    if (bullet.x <= player.x + 40 && bullet.x >= player.x - 20 && bullet.y <= player.y + 40 && bullet.y >= player.y) {
        // console.log("maar diya behenchod");
        if (bullet.x < 520) {
            Player1_health -= 10;
        }
        else {
            Player2_health -= 10;
        }
        document.getElementById("explosion_sound").volume = 0.3;
        document.getElementById("explosion_sound").currentTime = 0;
        document.getElementById("explosion_sound").play();
        return false;
    }

    return bullet.x < canvas.width && bullet.x > 0;
}
export function Fire() {


    if (player1Cooldown > 0) {
        player1Cooldown--;
    }

    if (player2Cooldown > 0) {
        player2Cooldown--;
    }

    if (player1Shooting && player1Cooldown == 0 && bullets1.length < maxBulletCount) {
        // console.log("chal ja bsdk!!");
        document.getElementById("bullet_sound").volume = 0.3;
        document.getElementById("bullet_sound").currentTime = 0;
        document.getElementById("bullet_sound").play();
        const newBullet = new Bullet(bullet1, player1.x, player1.y + 15, 40, 60, 10);
        bullets1.push(newBullet);
        player1Cooldown = shootingCooldown;
    }

    if (player2Shooting && player2Cooldown == 0 && bullets2.length < maxBulletCount) {
        // console.log("chal ja bsdk!!");
        document.getElementById("bullet_sound").volume = 0.3;
        document.getElementById("bullet_sound").currentTime = 0;
        document.getElementById("bullet_sound").play();
        const newBullet = new Bullet(bullet2, player2.x, player2.y + 15, 40, 60, -10);
        bullets2.push(newBullet);
        player2Cooldown = shootingCooldown;
    }

    for (let bullet of bullets1) {
        bullet.shoot();
    }

    for (let bullet of bullets2) {
        bullet.shoot();
    }

    bullets1 = bullets1.filter((bullet) => collide(bullet, player2));
    bullets2 = bullets2.filter((bullet) => collide(bullet, player1));

}
