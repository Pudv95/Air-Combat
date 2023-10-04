import { player1, x_velocity1_aage, x_velocity1_piche, y_velocity1_aage, y_velocity1_piche, player2, x_velocity2_piche, x_velocity2_aage, y_velocity2_aage, y_velocity2_piche, speed2, speed1 } from "./script.js";

export function move() {

    //player1 Movements;
    if (player1.x < 450) player1.x += x_velocity1_aage;
    if (player1.x > 0) player1.x -= x_velocity1_piche;
    if (player1.y > 60) player1.y -= y_velocity1_aage;
    if (player1.y < 630) player1.y += y_velocity1_piche;

    //plaer2 Movements;
    if (player2.x > 550) player2.x -= x_velocity2_piche;
    if (player2.x < 1010) player2.x += x_velocity2_aage;
    if (player2.y > 60) player2.y -= y_velocity2_aage;
    if (player2.y < 620) player2.y += y_velocity2_piche;

    function handleKeyDown(event) {
        //player 2
        if (event.code == "KeyI") {
            y_velocity2_aage = speed2;
        }
        if (event.code == "KeyK") {
            y_velocity2_piche = speed2;
        }
        if (event.code == "KeyJ") {
            x_velocity2_piche = speed2;
        }
        if (event.code == "KeyL") {
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
        if (event.code == "KeyI") {
            y_velocity2_aage = 0;
        }
        if (event.code == "KeyK") {
            y_velocity2_piche = 0;
        }
        if (event.code == "KeyJ") {
            x_velocity2_piche = 0;
        }
        if (event.code == "KeyL") {
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
