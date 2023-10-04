import { ctx, Player1_health, Player2_health, maxHealth } from "./script.js";

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

export function drawHealthBar() {
    const healthBarHeight = 20;

    ctx.fillStyle = calculateHealthColor(Player1_health);
    ctx.fillRect(40, 40, Player1_health, healthBarHeight);

    ctx.fillStyle = calculateHealthColor(Player2_health);
    ctx.fillRect(700 + maxHealth - Player2_health, 40, Player2_health, healthBarHeight);

}
