import Block from "./block.js";

export class Bullet extends Block {
    constructor(image, x, y, width, height, speed) {
        super(image, x, y, width, height);
        this.speed = speed;
    }

    shoot() {
        this.x += this.speed;
    }
}
