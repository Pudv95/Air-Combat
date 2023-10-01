

// initializing canvas

const canvas = document.getElementsByTagName("canvas")[0]
const ctx = canvas.getContext("2d");
canvas.width = 1100;
canvas.height = 700;

const background = new Image();
background.src = "assets/images/background.png";

function main(){
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
}





setInterval(main,1000/60);


