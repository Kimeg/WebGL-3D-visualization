let angle = 0;
let amp = 200;
let w = 20;
let y;
let N=30;
let M;
function setup() {
  createCanvas(400, 400, WEBGL);
  M = dist(0, 0, 200, 200);
}

function draw() {
  angle -= 0.1;
  ortho(-400, 400, 400, -400, 0, 1000);
  background(0);
  rectMode(CENTER);
  
  rotateX(PI/8);
  rotateY(-PI/4);
  //rotateY(angle);
  
  for (let i=0; i<width; i+=w){
    for (let j=0; j<height; j+=w){
      push();
      let d = dist(i, j, width/2, height/2);
      let s = map(d, 0, M, -PI, PI);
      let a = angle + s
      y = Math.floor(map(cos(a),-1,1,amp/4,amp));
      //console.log(angle);
      //rect(w*i-w*N/2, 0, w, h);
      translate(i-width/2,0,j-height/2);
      //rotateX(-PI/8);
      normalMaterial();
      box(w,y,w);
      pop();
    }
  }
}