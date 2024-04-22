function setup() {
  createCanvas(400, 350);
}

function draw() {
  background('#0000ff')
  
  //for whole image
  rotate(6)
  strokeWeight(3)
 
  //top leaf
  beginShape()
  fill('lime')
  curveVertex(150,50)
  curveVertex(150,100)
  // curveVertex(150,150)
  curveVertex(100,200)
  curveVertex(110,210)
  curveVertex(120,200)
  curveVertex(130,190)
  curveVertex(200,200)
  //curveVertex(150,150)
  curveVertex(150,100)
  curveVertex(150,50)
  endShape()
  
   //bottom leaf
   beginShape()
  fill('lime')
  curveVertex(150,375)
  curveVertex(150,325)
  //curveVertex(150,275)
  curveVertex(100,230)
  curveVertex(170,240)
  curveVertex(180,230)
  curveVertex(190,220)
  curveVertex(200,230)
  //curveVertex(150,275)
  curveVertex(150,325)
  curveVertex(150,375)
  endShape()
  
   //inner lines
  line(150,100,150,195)
  line(150,325,150,235)
 
  //stem
  beginShape()
  noFill()
  stroke('#ff00ff')
  curveVertex(150,300)
  curveVertex(150,325)
  curveVertex(145,350)
  curveVertex(150,375)
  curveVertex(155,400)
  endShape()
}