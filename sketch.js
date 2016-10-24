var ypos = 80;
var xpos = 80;
var xstep = 60;

//var alt_ypos = 250;
//var alt_xpos = 80;
//var alt_xstep = 60;
function setup() {
  createCanvas(400,400);
  background(220);
}

function draw() {
  background(220);
  
  fill(0);
  noStroke();
  for (var i=0; i<5; i++){
    for (var j=0; j<5; j++){
  
      mouse_dist = dist(xpos+(xstep*i),ypos+(xstep*j), mouseX, mouseY);
      if(mouse_dist <50){
        fill(255);
      }else{fill(0);}
      ellipse(xpos+(xstep*i), ypos+(xstep*j), 50, 50);
    
    }
  }
    /* fill(255); 
      var how_far_over = i%5;
      var how_far_over = int(i/5);
      ellipse(xpos+how_far_over*xstep, 80+ how_far_over*xstep, 40, 40);
 
  }
}

/*  ellipse(alt_xpos, alt_ypos, mouseY/5,40);
  alt_xpos += alt_xstep;
  if(alt_xpos>320){
    alt_xpos = 80;
  }*/
  
  
}