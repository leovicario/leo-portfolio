export function spCode()  {
  // Put your Shader Park Code here
  // rotateY(mouse.x * PI / 2 + time*.5);
  // rotateX(mouse.y * PI / 2);
  // metal(.5);
  // shine(.4);
  // color(getRayDirection()+.2);
  // rotateY(getRayDirection().y*4+time)
  // boxFrame(vec3(.4), .02);
  // expand(.1);
  // blend(nsin(time)*.6)
  // sphere(.2);
  // sphere(.2);
  
  // rotateY(PI / 200 * time);
  // rotateX(mouse.y * PI / 2);

  let s = getSpace();
  let scale = 1.3
  let amplitude = 9;
  let speed = 0.005 * time;
  let n = noise(s * amplitude + speed) * scale;
  
  // color(0.8,0.3,0.7)
  color(0.5,0.9,0.1)
  metal(4);
  shine(n*.5+.5);
  sphere(n);
  


  // displace(mouse.x);
  // sphere(0.2)
  // let scale = input(3., 0.0, 10.);
  // let s = getSpace();
  // let n = noise(s*scale+vec3(0, 0, time*0.1) + noise(s*scale+vec3(0, 0, time*0.1)));
  // setStepSize(.84);
  
  // color(vec3(n)*.5+.5+normal*.852+ vec3(0, .3, 2));
  // shine(.8);
  sphere(.2+.1*n);
  
  
};