const playfield = document.getElementById("playfield");
const circle = document.getElementById("circle");
const score = document.getElementById("score");
const clicksound = document.getElementById("clicksound");
const theme = document.getElementById("theme");
const hp = document.getElementById("hp");
const hp_img1 = document.getElementById("hp1");
const hp_img2 = document.getElementById("hp2");
const hp_img3 = document.getElementById("hp3");
const ded = document.getElementById("ded");
const dedtext = document.getElementById("dedtext");
const retry = document.getElementById("retry");

start.onclick = () => {
    document.body.style.background = "url(./res/img/play_background.jpg)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";

    start.style.display = 'none';

    playfield.style.display = 'block';
    circle.style.display = 'block';
    score.style.display = 'block';
    hp.style.display = "block";
    hp_img1.style.display = "block";
    hp_img2.style.display = "block";
    hp_img3.style.display = "block";

    interval = setInterval(timer, 1250);
    
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;

    theme.play();
    theme.volume = 0.2;
}

let x = 0;
let y = 0;
let playfield_width = 1100;
let playfield_height = 650;
let score_alpha = 0;



function randomnumber() {
    setInterval(() => {
      x = Math.floor(Math.random() * playfield_width);
      y = Math.floor(Math.random() * playfield_height);
    }, 1);
  }

circle.onclick = () => {
randomnumber();
circle.style.top = `${y}px`;
circle.style.left = `${x}px`;

score_alpha += 200;
score.innerHTML = score_alpha;

clicksound.play();
hp.innerHTML++;
if(hp.innerHTML >= 3){
  hp.innerHTML = 3;
  hp_img3.style.display = "block";
  hp_img2.style.display = "block";
  hp_img1.style.display = "block";
}
}

function timer(){
  hp.innerHTML -= 1;
  if(hp.innerHTML == 2){
    hp_img3.style.display = "none";
  }
  if(hp.innerHTML == 1){
    hp_img2.style.display = "none";
  }
  if(hp.innerHTML == 0){
    clearInterval(interval);

    playfield.style.display = 'none';
    circle.style.display = 'none';
    score.style.display = 'none';
    hp.style.display = "none";
    hp_img1.style.display = "none";

    ded.style.display = "block";
    dedtext.style.display = "block";
    retry.style.display = "block";





  }
}

retry.onclick = () => {
  window.location.reload();
}


