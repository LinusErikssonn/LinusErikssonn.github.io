
 px=100;
 py=100;
 angel=0;
 g=3;


 var canvas = document.getElementById("canvas");

 var ctx = canvas.getContext("2d");

 var W = window.innerWidth-20;

 var H = window.innerHeight+50;

 canvas.width=W;
 canvas.height=H;

 var antal =600;
 var particles =[];

for (var i = 0; i < antal; i++) {
    particles.push({
    x: Math.random()*W,
    y: Math.random()*H,
    r: Math.random()*3+1,
    d:Math.random()*antal
  });
}








function draw(){

  ctx.clearRect(0,0,W,H);
  ctx.fillStyle="rgba(255,255,255,0.8)";
  ctx.beginPath();

  for (var i = 0; i < antal; i++) {

    var p = particles[i];

    ctx.moveTo(p.x , p.y);

    ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, true);
  }

  ctx.fill();
  update();
}

function update(){


  for (var i = 0; i < antal; i++) {

    var p = particles[i];

    if (i%3==0) {
      p.y=p.y + Math.sin(angel*Math.PI/180)+g;
    }
    else {
      p.y=p.y+(p.r);
    }

    p.x=p.x+ Math.cos(angel*Math.PI/180);
    p.y=p.y+1;

    if (p.y>=H) {
      p.y=0
    }
    if (p.x>W) {
      p.x=0;
    }
    if (p.x<0) {
      p.x=W;
    }
  }

  angel++;
  //g=g+0.15;
  py=py+g;
  px+=Math.cos(angel *Math.PI/180)*0.5;
  //py+=Math.sin(angel *Math.PI/180)*0.5;



}

setInterval(draw,20);
