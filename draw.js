import { canvas, background, maxHealth, p1Score, p2Score, player1, player2, bullets1, bullets2 } from "./script.js";
import { drawHealthBar } from "./calculateHealthColor.js";

// Display images on canvas
export function draw(ctx) {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";
    ctx.fillRect(35, 35, maxHealth + 10, 20 + 10);
    ctx.clearRect(40, 40, maxHealth, 20);
    ctx.fillRect(695, 35, maxHealth + 10, 20 + 10);
    ctx.clearRect(700, 40, maxHealth, 20);
    ctx.font = "30px Comic Sans MS";
    ctx.fillStyle = "white";
    ctx.fillText(`${p1Score}  -  ${p2Score}`, 480, 60);
    ctx.fillText(`Player-1`, 120, 30);
    ctx.fillText(`Player-2`, 800, 30);
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
