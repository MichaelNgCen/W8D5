// var Level = require("./level.js")
import Level from "./level.js"
import Bird from "./bird.js"
export default class FlappyBird {
  constructor(canvas){
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.restart()
  }
  animate(ctx){
    // return this.level.drawBackground(ctx);
    
    this.level.animate(ctx)
    this.bird.animate(ctx)
    if (this.running) {
    requestAnimationFrame(animate);
    }
    
  }
  
  restart() {
    let that = this.level = new Level(this.dimensions);
    this.bird = new Bird(this.dimensions);
    this.animate(this.ctx); 
    this.running = false
  }

  play(){
    this.running = true;
    this.animate(this.ctx);
  }
  click(){
    this.bird.flap();
  }
  
}


