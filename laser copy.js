lasers = [];
laserVel = [];

function updateLasers() {
    for (var i = 0; i < lasers.length; i++) {
  
      //check bubble collisions
     
      /*
      for (var z = 0; z < waves.length; z++) {
        if (dist(lasers[i].x, lasers[i].y, waves[z].x, waves[z].y) < waveNum / 2) {
          waves[z] = createVector(random(0, width), random(0, height));
          wavesVel[z] = p5.Vector.random2D().mult(random(0.25, 2.25));
        
        }
      }
      */
      lasers[i].add(laserVel[i]);
  
      push();
      stroke(132, 112, 255);
      //point(lasers[i].x,lasers[i].y);
  
      line(lasers[i].x, lasers[i].y, lasers[i].x + laserVel[i].x * 4, lasers[i].y + laserVel[i].y * 4)
  
      pop();
    }
  }
