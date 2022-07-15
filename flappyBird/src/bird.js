const CONSTANTS = {
    GRAVITY:  0.8,
    FLAP_SPEED:  -8,
    TERMINAL_VEL:  12,
    BIRD_WIDTH:  40,
    BIRD_HEIGHT:  30
  };

export default class Bird{

    constructor(canvasDim){
        this.velocity = 0;
        this.canvasDim = canvasDim;
        this.position = this.canvasDim.height/2 
    }

    drawBird(ctx){
        ctx.fillStyle = "yellow";
        ctx.fillRect(60, 290, CONSTANTS.BIRD_WIDTH, CONSTANTS.BIRD_HEIGHT);
    }

    animate(ctx){
        this.drawBird(ctx);
        this.bird.move();
    }

    move () {
        this.position += this.velocity;
        this.velocity += CONSTANTS.GRAVITY;
        this.flap();
    }

    flap(){
        this.velocity = CONSTANTS.FLAP_SPEED;
    }

    
}
