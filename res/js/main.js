const playfield = document.getElementById("playfield");
const circle = document.getElementById("circle");
const score = document.getElementById("score");



start.onclick = () => {
    document.body.style.background = "url(/res/img/play_background.jpg)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";

    start.style.display = 'none';

    playfield.style.display = 'block';
    circle.style.display = 'block';
    score.style.display = 'block';
    

    randomnumber();
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;

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
}