//The problem is that you are given random numbers between 0,1 and we have to estimate the value of pi
// Note: The max the value of n the higher accuracy in estimation.
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(200,200,400);
  translate(200,200);
  const n = prompt("Enter the number of value to be generated: ");
  var x,y,total=0,inside=0;
  //quadrent 1
  for(let i=0;i<n;i++)
  {
    stroke('BLUE');
    strokeWeight(3);
    x=random();
    y=random();
    if((pow(x,2)+pow(y,2))<1)
    {
      inside++;
      stroke('BLUE');
      point(-x*200,-y*200);
    }
    else
    {
      stroke('RED');
      point(-x*200,-y*200);
    }
    total++;
  }
  //quadrant 2
  for(let i=0;i<n;i++)
  {
    stroke('BLUE');
    strokeWeight(3);
    x=random();
    y=random();
    if((pow(x,2)+pow(y,2))<1)
    {
      inside++;
      stroke('BLUE');
      point(x*200,-y*200);
    }
    else
    {
      stroke('RED');
      point(x*200,-y*200);
    }
    total++;
  }
  //quadrant 3
  for(let i=0;i<n;i++)
  {
    stroke('BLUE');
    strokeWeight(3);
    x=random();
    y=random();
    if((pow(x,2)+pow(y,2))<1)
    {
      inside++;
      stroke('BLUE');
      point(x*200,y*200);
    }
    else
    {
      stroke('RED');
      point(x*200,y*200);
    }
    total++;
  }
  //quadrant 4
  for(let i=0;i<n;i++)
  {
    stroke('BLUE');
    strokeWeight(3);
    x=random();
    y=random();
    if((pow(x,2)+pow(y,2))<1)
    {
      inside++;
      stroke('BLUE');
      point(-x*200,y*200);
    }
    else
    {
      stroke('RED');
      point(-x*200,y*200);
    }
    total++;
  }
  console.log("The estimated value of pi is: ",4*(inside/total));
  noloop();
}
