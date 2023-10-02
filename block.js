export default class Block{

    constructor(jet,x,y,width,height){
        this.jet = jet;
        this.height = height;
        this.width = width;
        this.x = x;
        this.y = y;
    }

    draw(ctx){
        ctx.drawImage(this.jet, this.x, this.y, this.height, this.width);
    }



}