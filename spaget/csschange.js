var body = document.body;
var player = document.getElementById("player");

var x = y = 1;

var volume = 0;

var BGChangeTimer = window.setInterval(changeBGPos, 20);
var VolumeChangeTimer = window.setInterval(AddVolume, 100);

function changeBGPos() {
  body.setAttribute("style", "background-position:"+x+"px "+y+"px;");
  x-=2.5;
  y-=2.5;
}

function AddVolume() {
  player.volume = volume;
  volume += 0.01;
  if(volume > 1) {
    clearInterval(VolumeChangeTimer);
  }
}

