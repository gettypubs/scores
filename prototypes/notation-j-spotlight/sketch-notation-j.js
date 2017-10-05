function preload() {
  mySound = loadSound('assets/notation-j-tudor1958.mp3');
}

var r = 255;
var g = 0;
var b = 67;
var opacity = 0.02 * 255;

var s = 1/3; // scale of illustration from original Illustrator file

// The following strings of numbers are derived from an SVG file exported from
// Adobe Illustrator. In Illustrator, each shape is drawn and its layer is named
// with either a start time (s00:00:30), or an end time (e00:02:10). These
// shapes represent the starting position and ending position of the spotlight
// animation.
//
// A typical SVG output then looks like this:
//
// <rect id="s00:00:30" x="527.7" y="342" transform="matrix(0.9644 0.2643 -0.2643
//   0.9644 113.8092 -130.8658)" class="st5" width="31.1" height="31.1"/>
//
// <rect id="e00:02:10" x="60.7" y="279.2" transform="matrix(0.9644 0.2643 -0.2643
//   0.9644 89.0495 -72.498)" class="st5" width="506.6" height="31.1"/>
//
// All the resulting numbers are concatenated in the following sequence,
// and fed into the p5 sketch:
//
// startTime,startX,startY,startMatrix1,startMatrix2,startMatrix3,
// startMatrix4,startMatrix5,startMatrix6,startWidth,startHeight,endTime,
// endX,end7,endMatrix1,endMatrix2,endMatrix3,endMatrix4,endMatrix5,
// endMatrix6,endWidth,endHeight
//

var cage1 = [30,527.7,342,0.9644,0.2643,-0.2643,0.9644,113.8092,-130.8658,31.1,31.1,210,60.7,279.2,0.9644,0.2643,-0.2643,0.9644,89.0495,-72.498,506.6,31.1]
var cage2 = [232,70.6,214.2,0.998,-6.317707e-02,6.317707e-02,0.998,-14.3446,5.8834,30.6,31.1,300,69.4,177.7,0.998,-6.317707e-02,6.317707e-02,0.998,-10.885,42.256,1186.7,31.1]
var cage3 = [303,988.6,87.7,0.9907,-0.1361,0.1361,0.9907,-4.7175,137.5824,30.1,31.1,320,64.8,150.9,0.9907,-0.1361,0.1361,0.9907,-17.5962,75.5864,958.2,31.1]
var cage4 = [470,983.2,87.9,0.8746,-0.4849,0.4849,0.8746,75.5875,499.0275,38.3,31.1,650,496.4,213.8,0.8746,-0.4849,0.4849,0.8746,-13.9603,404.7019,557.6,31.1]
var cage5 = [690,1229.7,290.3,0.9971,-7.554167e-02,7.554167e-02,0.9971,-19.547,95.0111,32.9,31.1,800,526.2,316.9,0.9971,-7.554167e-02,7.554167e-02,0.9971,-22.5607,68.5538,737.4,31.1]
var cage6 = [860,528.2,339.2,0.8757,-0.4829,0.4829,0.8757,-103.6654,306.8433,31.6,31.1,970,495.6,212.7,0.8757,-0.4829,0.4829,0.8757,-14.0587,401.8779,555.5,31.1]
var cage7 = [1022,986.8,87.2,0.9707,-0.2402,0.2402,0.9707,4.6879,243.8963,32.5,31.1,1050,653.8,127.7,0.9707,-0.2402,0.2402,0.9707,-9.8595,205.6897,370.4,31.1]
var cage8 = [1096,1222.3,141.7,0.9607,-0.2775,0.2775,0.9607,5.0229,349.9102,32.7,31.1,1170,514,241.9,0.9607,-0.2775,0.2775,0.9607,-36.4259,257.5426,755.2,31.1]
var cage9 = [1355,1230.9,292.4,0.9977,6.707618e-02,-6.707618e-02,0.9977,23.4602,-82.9078,31,31.1,1510,65.2,253.2,0.9977,6.707618e-02,-6.707618e-02,0.9977,19.5237,-43.9451,1198,31.1]
var cage10 = [1556,983.1,87.9,-0.7683,-0.6401,0.6401,-0.7683,1701.5433,822.8337,33.1,31.1,1620,945.7,191.2,-0.7683,-0.6401,0.6401,-0.7683,1854.653,1084.8555,355.9,31.1]
var cage11 = [1631,1223.9,143.4,0.998,-6.362802e-02,6.362802e-02,0.998,-7.6017,79.1704,30.6,31.1,1730,68.5,180.2,0.998,-6.362802e-02,6.362802e-02,0.998,-11.1123,42.525,1187.2,31.1]
var cage12 = [1778,1221,142,-6.432571e-02,-0.9979,0.9979,-6.432571e-02,1158.8312,1401.7235,31.1,31.1,1850,1147.8,220.1,-6.432571e-02,-0.9979,0.9979,-6.432571e-02,1086.3214,1489.7858,187.5,31.1]
var cage13 = [1905,1667.3,288.6,1,-7.968381e-03,7.968381e-03,1,-2.3705,13.423,32,31.1,2060,1230.5,290.4,1,-7.968382e-03,7.968382e-03,1,-2.3913,11.6828,468.8,31.1]
var cage14 = [2084,1993.7,102.5,0.9987,-5.022907e-02,5.022907e-02,0.9987,-3.3936,101.1211,33,31.1,2090,651.5,136.3,0.9987,-5.022907e-02,5.022907e-02,0.9987,-5.9344,67.4764,1376,31.1]
var cage15 = [2275,984.6,88.9,-0.9598,-0.2806,0.2806,-0.9598,1930.8301,485.2664,31.1,31.1,2500,970.2,189.3,-0.9598,-0.2806,0.2806,-0.9598,2576.0486,778.5343,747.1,31.1]
var cage16 = [2677,1669.4,287.8,0.9988,-4.803111e-02,4.803111e-02,0.9988,-12.6251,81.3227,32.8,31.1,2730,522.5,315.4,0.9988,-4.803111e-02,4.803111e-02,0.9988,-14.6104,53.8253,1180.4,31.1]
var cage17 = [2760,1670.5,288.2,0.9989,4.710931e-02,-4.710931e-02,0.9989,16.18,-79.0932,31.1,31.1,2870,69.7,250.4,0.9989,4.710931e-02,-4.710931e-02,0.9989,13.5145,-41.4482,1632.9,31.1]
var cage18 = [2892,1229.9,293.5,-0.9705,0.241,-0.241,-0.9705,2530.0686,308.6996,32.4,31.1,2955,1218.3,198.5,-0.9705,0.241,-0.241,-0.9705,3261.29,29.1954,821.1,31.1]
var cage19 = [3011,657.6,168.1,-0.9988,4.821476e-02,-4.821476e-02,-0.9988,1356.3851,334.5913,33,31.1,3250,656.9,135.8,-0.9988,4.821476e-02,-4.821476e-02,-0.9988,2690.5112,237.8982,1371,31.1]

var tudor1 = [30,358.4,1074.5,0.3161,-0.9487,0.9487,0.3161,-779.8865,1113.9213,48.6,46.8,210,298.6,991.5,0.3161,-0.9487,0.9487,0.3161,-682.1588,1083.3793,223.7,46.8];
var tudor2 = [232,507.8,719.4,1,0,0,1,0,0,53.7,31.2,300,507.8,719.4,1,0,0,1,0,0,53.7,98.1];
var tudor3 = [303,561.2,643.1,-9.301589e-02,-0.9957,0.9957,-9.301589e-02,-38.3302,1308.4701,31.1,57.2,320,482.9,729.1,-9.301589e-02,-0.9957,0.9957,-9.301589e-02,-115.2099,1410.514,204,57.2];
var tudor4 = [470,796.2,621,-0.1853,-0.9827,0.9827,-0.1853,320.7303,1573.2061,32.5,65.2,650,632.8,818.2,-0.1853,-0.9827,0.9827,-0.1853,171.0781,1843.3779,433.7,65.2];
var tudor5 = [690,975.9,944.4,-0.9373,-0.3485,0.3485,-0.9373,1572.4839,2257.6987,26.8,86,800,971.6,969.8,-0.9373,-0.3485,0.3485,-0.9373,1695.6836,2330.5337,171.8,86];
var tudor6 = [860,1199.9,1037,-0.2124,0.9772,-0.9772,-0.2124,2518.282,106.907,32.4,62.6,970,1043.5,843,-0.2124,0.9772,-0.9772,-0.2124,2379.843,-169.5096,429.4,62.6];
var tudor7 = [1022,1340.9,632.5,1,0,0,1,0,0,55.7,34.6,1050,1340.9,632.5,1,0,0,1,0,0,55.7,179.2];
var tudor8 = [1096,1408.6,662.2,1,0,0,1,0,0,72.2,44.4,1170,1408.6,662.2,1,0,0,1,0,0,72.2,424.3];
var tudor9 = [1355,1567.5,966.9,-0.9278,0.3731,-0.3731,-0.9278,3436.3916,1354.4561,39.3,85.7,1510,1557.5,915.7,-0.9278,0.3731,-0.3731,-0.9278,3662.9106,1208.1154,314,85.7];
var tudor10 = [1556,1853.6,663.4,-0.1874,-0.9823,0.9823,-0.1874,1544.8479,2658.4927,37,53.7,1620,1789.5,740.9,-0.1874,-0.9823,0.9823,-0.1874,1486.3124,2764.9688,194.7,53.7];
var tudor11 = [1631,209.8,1192.9,-0.7868,-0.6173,0.6173,-0.7868,-339.7552,2332.5444,46.4,64.1,1730,195.1,1235.6,-0.7868,-0.6173,0.6173,-0.7868,-268.8232,2442.4998,184.8,64.1];
var tudor12 = [1778,376.6,1183.5,1,0,0,1,0,0,81.2,57.7,1850,376.6,1183.5,1,0,0,1,0,0,81.2,344];
var tudor13 = [1905,452.9,1439.8,1,0,0,1,0,0,46.8,40.3,2060,452.9,1439.8,1,0,0,1,0,0,46.8,127];
var tudor14 = [2084,566.7,1161.7,-0.8895,-0.4569,0.4569,-0.8895,562.6081,2575.6355,52.1,116.1,2090,556,1206,-0.8895,-0.4569,0.4569,-0.8895,705.3868,2698.8159,246.1,116.1];
var tudor15 = [2275,821.5,1089.8,-0.3982,-0.9173,0.9173,-0.3982,128.9837,2377.9673,46.2,113.7,2500,710.1,1259.6,-0.3982,-0.9173,0.9173,-0.3982,76.2841,2682.989,416.4,113.7];
var tudor16 = [2677,1072.4,1421.3,1,0,0,1,0,0,88.3,34.6,2730,1072.4,1421.3,1,0,0,1,0,0,88.3,154.7];
var tudor17 = [2760,1186.3,1393.9,-0.9591,0.2831,-0.2831,-0.9591,2758.373,2506.2407,23.6,117.1,2870,1183.2,1368.4,-0.9591,0.2831,-0.2831,-0.9591,2920.314,2431.855,202.4,117.1];
var tudor18 = [2892,1373.4,1470.7,-6.297801e-02,0.998,-0.998,-6.297801e-02,2979.0688,205.0911,39.7,60.6,2955,1200.1,1286.2,-6.297900e-02,0.998,-0.998,-6.297900e-02,2807.2727,-2.6946,409.5,60.6];
var tudor19 = [3011,1474,1168.5,-0.9464,0.323,-0.323,-0.9464,3312.6497,1940.6832,42.7,153.4,3250,1466.2,1121.8,-0.9464,0.323,-0.323,-0.9464,3563.7061,1805.7039,331.6,153.4];


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

  mySound.addCue(4.70, growRotatedSpotlightCage, cage4);
  mySound.addCue(4.70, growRotatedSpotlightTudor, tudor4);

  mySound.addCue(6.90, growRotatedSpotlightCage, cage5);
  mySound.addCue(6.90, growRotatedSpotlightTudor, tudor5);

  mySound.addCue(8.60, growRotatedSpotlightCage, cage6);
  mySound.addCue(8.60, growRotatedSpotlightTudor, tudor6);

  mySound.addCue(10.22, growRotatedSpotlightCage, cage7);
  mySound.addCue(10.22, growRotatedSpotlightTudor, tudor7);

  mySound.addCue(10.96, growRotatedSpotlightCage, cage8);
  mySound.addCue(10.96, growRotatedSpotlightTudor, tudor8);

  mySound.addCue(13.55, growRotatedSpotlightCage, cage9);
  mySound.addCue(13.55, growRotatedSpotlightTudor, tudor9);

  mySound.addCue(15.56, growRotatedSpotlightCage, cage10);
  mySound.addCue(15.56, growRotatedSpotlightTudor, tudor10);

  mySound.addCue(16.31, growRotatedSpotlightCage, cage11);
  mySound.addCue(16.31, growRotatedSpotlightTudor, tudor11);

  mySound.addCue(17.78, growRotatedSpotlightCage, cage12);
  mySound.addCue(17.78, growRotatedSpotlightTudor, tudor12);

  mySound.addCue(19.05, growRotatedSpotlightCage, cage13);
  mySound.addCue(19.05, growRotatedSpotlightTudor, tudor13);

  mySound.addCue(20.84, growRotatedSpotlightCage, cage14);
  mySound.addCue(20.84, growRotatedSpotlightTudor, tudor14);

  mySound.addCue(22.75, growRotatedSpotlightCage, cage15);
  mySound.addCue(22.75, growRotatedSpotlightTudor, tudor15);

  mySound.addCue(26.77, growRotatedSpotlightCage, cage16);
  mySound.addCue(26.77, growRotatedSpotlightTudor, tudor16);

  mySound.addCue(27.60, growRotatedSpotlightCage, cage17);
  mySound.addCue(27.60, growRotatedSpotlightTudor, tudor17);

  mySound.addCue(28.92, growRotatedSpotlightCage, cage18);
  mySound.addCue(28.92, growRotatedSpotlightTudor, tudor18);

  mySound.addCue(30.11, growRotatedSpotlightCage, cage19);
  mySound.addCue(30.11, growRotatedSpotlightTudor, tudor19);

  mySound.onended(resetAnimation);

}


// v[0] = startTime
// v[1] = startX
// v[2] = startY
// v[3] = startMatrix1
// v[4] = startMatrix2
// v[5] = startMatrix3
// v[6] = startMatrix4
// v[7] = startMatrix5
// v[8] = startMatrix6
// v[9] = startWidth
// v[10] = startHeight
//
// v[11] = endTime
// v[12] = endX
// v[13] = endY
// v[14] = endMatrix1
// v[15] = endMatrix2
// v[16] = endMatrix3
// v[17] = endMatrix4
// v[18] = endMatrix5
// v[19] = endMatrix6
// v[20] = endWidth
// v[21] = endHeight


var growRotatedSpotlightCage = (function () {
  var i = 1;
  var t = 0;
  return function (v) {
    var loops = v[11] - v[0];
    var xDif = v[12] - v[1];
    var yDif = v[13] - v[2];
    var wDif = v[20] - v[9];
    var hDif = v[21] - v[10];
    var matrix5Dif = v[18] - v[7];
    var matrix6Dif = v[19] - v[8];
    if ( i <= loops ) {
      var variableSet = [v[1] + ((xDif/loops) * i), v[2] + ((yDif/loops) * i), v[9] + ((wDif/loops) * i), v[10] + ((hDif/loops) * i), v[3]*s,v[4]*s,v[5]*s,v[6]*s,(v[7] + ((matrix5Dif/loops) * i))*s,(v[8] + ((matrix6Dif/loops) * i))*s];
      var time = t + (v[0] * .01);
      clear();
      fill(r,g,b,opacity);
      mySound.addCue(time, rotatedRect, variableSet);
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
    var loops = v[11] - v[0];
    var xDif = v[12] - v[1];
    var yDif = v[13] - v[2];
    var wDif = v[20] - v[9];
    var hDif = v[21] - v[10];
    var matrix5Dif = v[18] - v[7];
    var matrix6Dif = v[19] - v[8];
    if ( i <= loops ) {
      var variableSet = [v[1] + ((xDif/loops) * i), v[2] + ((yDif/loops) * i), v[9] + ((wDif/loops) * i), v[10] + ((hDif/loops) * i), v[3]*s,v[4]*s,v[5]*s,v[6]*s,(v[7] + ((matrix5Dif/loops) * i))*s,(v[8] + ((matrix6Dif/loops) * i))*s];
      var time = t + (v[0] * .01);
      clear();
      fill(r,g,b,opacity);
      mySound.addCue(time, rotatedRect, variableSet);
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

function rotatedRect(v) {
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

function resetAnimation() {
  document.getElementById("playback").innerHTML = 'Play';
  clear();
};

