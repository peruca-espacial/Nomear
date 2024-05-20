function setup() {
    createCanvas(900, 600);
    background("black");
  }
  
  function draw() {
    
    stroke("darkred");
    fill("darkred");
  
    // console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }