function preload() {
  mySound = loadSound('assets/notation-k-tudor1958.mp3');
}

var r = 255;
var g = 0;
var b = 67;
var opacity = 0.2 * 255;

var s = 1/3; // scale of illustration from original Illustrator file

var cage1 = [619.5,1146.3,773.3,1195.6,731.3,1348,574,1303.2];
var cage2 = [551.4,1473.8,660,1368.4,798.1,1396,865.5,1533.2,752.4,1643.1,616.4,1619.9];
var cage3 = [666.9,339.6,839.8,293.6,852.6,114.3,693.7,52.1,570.6,187.7];
var cage4 = [865.2,564.4,580.7,649.4,594.5,945,858.2,1053.6,1023.1,821.1];
var cage5 = [817.5,1717.2,1030.4,1462.1,785.7,1229.6,571.8,1510.1];
var cage6 = [595.9,1030.1,616.9,1291,863.2,1392,1059.3,1248,1036.5,989.9,796.4,880.6];
var cage7 = [891.3,1014.7,607.1,413.1,1020.6,216.5];
var cage8 = [918.7,552.3,1058,640,792,770];

var tudor1 = [2276.5,967.2,90.3,112.9];
var tudor2 = [2330.7,1135.8,171.6,186.6];
var tudor3 = [2365.3,542.8,195.7,134];
var tudor4 = [2476.7,789.6,371.8,222.8];
var tudor5 = [2529.4,1170.4,334.1,258.9];
var tudor6 = [2609.1,908.5,373.3,185.1];
var tudor7 = [2663.3,538.2,367.2,225.8];
var tudor8 = [3101.3,776.1,102.3,307];

var test1 = [1.5,4,175.1,25.6,255.8,255.8,9,161,9,9,0.967,0.2546,-0.2546,0.967,69.7778,-18.438];

function setup() {
  var width = 1200;
  var height = 600;
  var canvas = createCanvas(width, height);
  canvas.parent("p5js");
  frameRate(100);
  noStroke();
  fill(r,g,b,opacity);
  buttonSetup();

  console.log(frameCount);

  mySound.addCue(2.77, drawQuad, cage1);
  mySound.addCue(2.77, drawRectangle, tudor1);

  mySound.addCue(3.32, drawIrregularHexagon, cage2);
  mySound.addCue(3.32, drawRectangle, tudor2);

  mySound.addCue(4.54, drawIrregularPentagon, cage3);
  mySound.addCue(4.54, drawRectangle, tudor3);

  mySound.addCue(6.02, drawIrregularPentagon, cage4);
  mySound.addCue(6.02, drawRectangle, tudor4);

  mySound.addCue(7.17, drawQuad, cage5);
  mySound.addCue(7.17, drawRectangle, tudor5);

  mySound.addCue(7.98, drawIrregularHexagon, cage6);
  mySound.addCue(7.98, drawRectangle, tudor6);

  mySound.addCue(8.70, drawTriangle, cage7);
  mySound.addCue(8.70, drawRectangle, tudor7);

  mySound.addCue(11.61, drawTriangle, cage8);
  mySound.addCue(11.61, drawRectangle, tudor8);

  mySound.onended(buttonText);

}

function drawTriangle(v) {
  quad(v[0]*s,v[1]*s,v[2]*s,v[3]*s,v[4]*s,v[5]*s)
}

function drawRectangle(v) {
  rect(v[0]*s,v[1]*s,v[2]*s,v[3]*s)
}

function drawQuad(v) {
  quad(v[0]*s,v[1]*s,v[2]*s,v[3]*s,v[4]*s,v[5]*s,v[6]*s,v[7]*s)
}

function drawIrregularPentagon(v) {
  beginShape();
  vertex(v[0]*s, v[1]*s);
  vertex(v[2]*s, v[3]*s);
  vertex(v[4]*s, v[5]*s);
  vertex(v[6]*s, v[7]*s);
  vertex(v[8]*s, v[9]*s);
  endShape(CLOSE);
}

function drawIrregularHexagon(v) {
  beginShape();
  vertex(v[0]*s, v[1]*s);
  vertex(v[2]*s, v[3]*s);
  vertex(v[4]*s, v[5]*s);
  vertex(v[6]*s, v[7]*s);
  vertex(v[8]*s, v[9]*s);
  vertex(v[10]*s, v[11]*s);
  endShape(CLOSE);
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

// function draw() {
//
//   mySound.addCue(1.5, growRotatedSpotlight, test1);
//
// }
//
//
// var growRotatedSpotlight = (function () {
//     var i = 1;
//     return function (v) {
//       if (( mySound.currentTime() >= v[0]) && ( mySound.currentTime() <= v[1])) {
//         var loops = (v[1] * 100) - (v[0] * 100);
//         console.log( loops );
//         if ( i <= loops ) {
//           fill(r,g,b,opacity);
//           rect((100 + i),(100 + i),(100 + i),(100 + i));
//           i++;
//         }
//         else {
//           i = 1;
//         }
//         // var loops = (v[1] * 100) - (v[0] * 100);
//         // var xDif = v[3] - v[2];
//         // var yDif = v[5] - v[4];
//         // var wDif = v[7] - v[6];
//         // var hDif = v[9] - v[8];
//         // console.log(mySound.currentTime(), frameCount);
//         // if ( i <= loops ) {
//         //   clear();
//         //   fill(r,g,b,opacity);
//         //   rotatedRect(v[2] + ((xDif/loops) * i), v[4] + ((yDif/loops) * i), v[6] + ((wDif/loops) * i), v[8] + ((hDif/loops) * i), v[10],v[11],v[12],v[13],v[14],v[15]);
//         //   i++;
//         // }
//         // else {
//         //   i = 1;
//         // }
//       }
//     }
// })();
//
