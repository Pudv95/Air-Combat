import { Player1_health, maxHealth, Player2_health, bullets1, bullets2, player1, player2, x_velocity2_aage, x_velocity2_piche, y_velocity2_aage, y_velocity2_piche, x_velocity1_aage, x_velocity1_piche, y_velocity1_aage, y_velocity1_piche, player1Shooting, player2Shooting, running } from "./script.js";

export function reset() {
    Player1_health = maxHealth;
    Player2_health = maxHealth;
    bullets1 = [];
    bullets2 = [];
    player1.x = 40; player1.y = 310;
    player2.x = 950; player2.y = 310;
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

    document.addEventListener("keydown", (event) => {
        if (event.key == "Enter") {
            running = true;
        }
    });
}
