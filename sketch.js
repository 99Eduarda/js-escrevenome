
createCanvas(400, 400);
}

function draw() {
  background(220);
}function setup() {
  createCanvas(400, 400);
  background("white");
}

function draw() {
}
function draw() {
  circle(200,200,50);
}
function draw() {
  fill("pink");
  circle(200,200,50);
}
let cor;

function setup() {
  createCanvas(400, 400);
  background("black");
}function setup() {
  createCanvas(400, 400);
  background("black");
  cor = "blue";
}function draw() {
  fill(cor);
  circle(200,200,50);
}
function setup() {
  createCanvas(400, 400);
  background("pink");
  cor = color(0, 255, 0);
}
function setup() {
  createCanvas(400, 400);
  background("pink");
  cor = color(random(0, 255), random(255, 255), random(0, 255));
}
function setup() {
  createCanvas(400, 400);
  background("pink");
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  posicaoHorizontal = 200;
  posicaoVertical = 200;
}
function draw() {
  
  fill(cor);
  circle(posicaoHorizontal, posicaoVertical, 50);
}
function draw() {
  
  fill(cor);
  circle(posicaoHorizontal, posicaoVertical, 50);
  
  if(mouseX < posicaoHorizontal) {
    posicaoHorizontal = posicaoHorizontal - 1;
  }
  
  if(mouseX > posicaoHorizontal) {
    posicaoHorizontal = posicaoHorizontal + 1;
  }function draw() {
  
  fill(cor);
  circle(posicaoHorizontal, posicaoVertical, 50);
  
  if(mouseX < posicaoHorizontal) {
    posicaoHorizontal--;
  }
  
  if(mouseX > posicaoHorizontal) {
    posicaoHorizontal++;
  }
  
  if(mouseY < posicaoVertical) {
    posicaoVertical--;
  }
  
  if(mouseY > posicaoVertical) {
    posicaoVertical++;
  }
  
}

}function draw() {
  
  fill(cor);
  circle(posicaoHorizontal, posicaoVertical, 50);
  
  if(mouseX < posicaoHorizontal) {
    posicaoHorizontal--;
  }
  
  if(mouseX > posicaoHorizontal) {
    posicaoHorizontal++;
  }
  
  if(mouseY < posicaoVertical) {
    posicaoVertical--;
  }
  
  if(mouseY > posicaoVertical) {
    posicaoVertical++;
  }
  
}
if(mouseIsPressed){
    cor = color(random(0, 255), random(0, 255), random(0, 255));
}
if(mouseIsPressed){
    cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
}



