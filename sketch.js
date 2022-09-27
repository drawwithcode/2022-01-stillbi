//I set my variables, it is a global variable because I put it before my function sections
let color1 = 0;
let color2 = 0;
let color3 = 0;
let color4 = 0;
let color5 = 0;

function setup() {
  // I create a canvas and define its size, this will be the size of the artwork
  createCanvas(800, 800);
  // I tell to my variables that they have to choose a randomic colour between 255 colours (0 isblack, 255 is white)
  color1 = random(255);
  color2 = random(255);
  color3 = random(255);
  color4 = random(255);
  color5 = random(255);
}

function draw() {
  // I give a colour stroke to my primitives
  stroke("black");
  // On the background I draw 4 big squares and I decide that they have to follow the fill color 5's rule (decide a randomic colour)
  fill(color5);
  rect(0, 0, 400, 400); //set position and dimentions of the squares
  rect(400, 0, 400, 400);
  rect(0, 400, 400, 400);
  rect(400, 400, 400, 400);

  // set fill color with the variable
  fill(color1);
  // draw a square using the proportion of the canvas
  rect(width / 4, height / 4, 200, 200);

  //repeat for each square
  fill(color2);
  rect((2 * width) / 4, height / 4, 200, 200);
  fill(color3);
  rect(width / 4, (2 * height) / 4, 200, 200);
  fill(color4);
  rect((2 * width) / 4, (2 * height) / 4, 200, 200);

  //add text --> size 32, I define x, y, width and height and colour
  textSize(32);
  text("Joseph Albers: Interactions of Colors", 10, 30);
  fill(250);

  //then i defined the framecounter which permits to change the colour
  if (frameCount % 80 == 0) {
    //velocity of the framecounter
    color1 = color(random(255), random(255), random(255));
    color2 = color(random(255), random(255), random(255));
    color3 = color(random(255), random(255), random(255));
    color4 = color(random(255), random(255), random(255));
    color5 = color(random(255), random(255), random(255));
  }
  //add text --> size 32, I define x, y, width and height and colour
  textSize(32);
  text("Joseph Albers: Interactions of Colors", 10, 30);
  fill(250);
}

//Joseph Albers: interaction of colours
//BIANCA ORIANI
