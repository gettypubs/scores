function preload() {
  mySound = loadSound('assets/notation-j-tudor1958.mp3');
}

var r = 255;
var g = 0;
var b = 67;
var opacity = 0.03 * 255;

var s = 1/3; // scale of illustration from original Illustrator file

// (startTime,endTime,startX,endX,startY,endY,startWidth,endWidth,startHeight,endHeight,matrix1,matrix2,matrix3,matrix4,matrix5,matrix6,endMatrix5,endMatrix6)
var cage1 = [30,210,527.7,60.7,342,279.2,31.1,506.6,31.1,31.1,0.9644,0.2643,-0.2643,0.9644,113.8092,-130.8658,89.0495,-72.498];
var cage2 = [232,300,70.6,69.4,214.2,177.7,30.6,1186.7,31.1,31.1,0.998,-6.317707e-02,6.317707e-02,0.998,-14.3446,5.8834,-10.885,42.256];
var cage3 = [303,320,988.6,64.8,87.7,150.9,30.1,958.2,31.1,31.1,0.9907,-0.1361,0.1361,0.9907,-4.7175,137.5824,-17.5962,75.5864];

var tudor1 = [30,210,358.4,298.6,1074.5,991.5,48.6,223.7,46.8,46.8,0.3161,-0.9487,0.9487,0.3161,-779.8865,1113.9213,-682.1588,1083.3793];
var tudor2 = [232,300,507.8,507.8,719.4,719.4,53.7,53.7,31.2,98.1,1,0,0,1,0,0,0,0];
var tudor3 = [303,320,561.2,482.9,643.1,729.1,31.1,204,57.2,57.2,-9.301589e-02,-0.9957,0.9957,-9.301589e-02,-38.3302,1308.4701,-115.2099,1410.514];


function setup() {
  var width = 688;
  var height = 600;
  var canvas = createCanvas(width, height);
  canvas.parent("p5js");
  frameRate(100);
  noStroke();
  fill(r,g,b,opacity);
  buttonSetup();

  mySound.addCue(0.30, growRotatedSpotlightCage, cage1);
  mySound.addCue(0.30, growRotatedSpotlightTudor, tudor1);

  mySound.addCue(2.32, growRotatedSpotlightCage, cage2);
  mySound.addCue(2.32, growRotatedSpotlightTudor, tudor2);

  mySound.addCue(3.03, growRotatedSpotlightCage, cage3);
  mySound.addCue(3.03, growRotatedSpotlightTudor, tudor3);


  mySound.onended(buttonText);

}


var growRotatedSpotlightCage = (function () {
  var i = 1;
  var t = 0;
  return function (v) {
    var loops = v[1] - v[0];
    var xDif = v[3] - v[2];
    var yDif = v[5] - v[4];
    var wDif = v[7] - v[6];
    var hDif = v[9] - v[8];
    var matrix5Dif = v[16] - v[14];
    var matrix6Dif = v[17] - v[15];
    if ( i <= loops ) {
      var variableSet = [v[2] + ((xDif/loops) * i), v[4] + ((yDif/loops) * i), v[6] + ((wDif/loops) * i), v[8] + ((hDif/loops) * i), v[10]*s,v[11]*s,v[12]*s,v[13]*s,(v[14] + ((matrix5Dif/loops) * i))*s,(v[15] + ((matrix6Dif/loops) * i))*s];
      var time = t + (v[0] * .01);
      fill(r,g,b,opacity);
      mySound.addCue(time, rotatedRectSound, variableSet);
      i++;
      t += .01;
      growRotatedSpotlightCage(v);
    }
    else {
      i = 1;
      t = 0;
    }
  }
})();

var growRotatedSpotlightTudor = (function () {
  var i = 1;
  var t = 0;
  return function (v) {
    var loops = v[1] - v[0];
    var xDif = v[3] - v[2];
    var yDif = v[5] - v[4];
    var wDif = v[7] - v[6];
    var hDif = v[9] - v[8];
    var matrix5Dif = v[16] - v[14];
    var matrix6Dif = v[17] - v[15];
    if ( i <= loops ) {
      var variableSet = [v[2] + ((xDif/loops) * i), v[4] + ((yDif/loops) * i), v[6] + ((wDif/loops) * i), v[8] + ((hDif/loops) * i), v[10]*s,v[11]*s,v[12]*s,v[13]*s,(v[14] + ((matrix5Dif/loops) * i))*s,(v[15] + ((matrix6Dif/loops) * i))*s];
      var time = t + (v[0] * .01);
      fill(r,g,b,opacity);
      mySound.addCue(time, rotatedRectSound, variableSet);
      i++;
      t += .01;
      growRotatedSpotlightTudor(v);
    }
    else {
      i = 1;
      t = 0;
    }
  }
})();

function rotatedRectSound(v) {
  	var x1 = v[0];
  	var y1 = v[1];
    var x2 = v[0];
    var y2 = v[1] + v[3];
    var x3 = v[0] + v[2];
    var y3 = v[1] + v[3];
    var x4 = v[0] + v[2];
    var y4 = v[1];
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform
    var nx1 = v[4] * x1 + v[6] * y1 + v[8];
  	var ny1 = v[5] * x1 + v[7] * y1 + v[9];
    var nx2 = v[4] * x2 + v[6] * y2 + v[8];
    var ny2 = v[5] * x2 + v[7] * y2 + v[9];
    var nx3 = v[4] * x3 + v[6] * y3 + v[8];
  	var ny3 = v[5] * x3 + v[7] * y3 + v[9];
    var nx4 = v[4] * x4 + v[6] * y4 + v[8];
  	var ny4 = v[5] * x4 + v[7] * y4 + v[9];
    // clear();
    quad(nx1,ny1,nx2,ny2,nx3,ny3,nx4,ny4);
}

function buttonSetup() {
  document.getElementById("playback").addEventListener("click", playStop);
  function playStop() {
    if ( mySound.isPlaying() ) {
      mySound.stop();
      document.getElementById("playback").innerHTML = 'Play';
    } else {
      mySound.play();
      document.getElementById("playback").innerHTML = 'Stop';
    }
    clear();
  };
}

function buttonText() {
  document.getElementById("playback").innerHTML = 'Play';
};

