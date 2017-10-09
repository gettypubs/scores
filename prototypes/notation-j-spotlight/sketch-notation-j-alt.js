// This p5 sketch is structured in "instance mode", which allows multiple
// sketches to run on the same page. A critical feature for the comparative
// Cage and Tudor animations. Instance mode is detailed some more here:
//
// https://github.com/processing/p5.js/wiki/p5.js-overview#instantiation--namespace

// Color and opacity of the spotlights for both sketches
var r = 255;
var g = 0;
var b = 67;
var opacity = 0.2 * 255;

// The Cage sketch
var c = function( p ) {

  // Coordindates extracted Illustrator -> SVG export
  var cage1 = [30, 511.4, 322.8, 0.9644, 0.2643, -0.2643, 0.9644, 107.1899, -127.2275, 30.1, 24, 210, 58.8, 261.9, 0.9644, 0.2643, -0.2643, 0.9644, 83.1974, -70.6683, 490.9, 24];
  var cage2 = [232, 68.4, 198.9, 0.998, -6.317707e-02, 6.317707e-02, 0.998, -13.1607, 5.6778, 29.7, 24, 300, 67.3, 163.6, 0.998, -6.317707e-02, 6.317707e-02, 0.998, -9.8084, 40.9234, 1149.9, 24];
  var cage3 = [303, 958, 76.4, 0.9907, -0.1361, 0.1361, 0.9907, -2.9782, 133.2107, 29.1, 24, 320, 62.8, 137.6, 0.9907, -0.1361, 0.1361, 0.9907, -15.4578, 73.1357, 928.5, 24];
  var cage4 = [470, 952.7, 76.5, 0.8746, -0.4849, 0.4849, 0.8746, 78.9209, 482.0979, 37.1, 24, 650, 481, 198.5, 0.8746, -0.4849, 0.4849, 0.8746, -7.8523, 390.6949, 540.3, 24];
  var cage5 = [690, 1191.6, 272.7, 0.9971, -7.554167e-02, 7.554167e-02, 0.9971, -18.0572, 92.0339, 31.9, 24, 800, 509.9, 298.5, 0.9971, -7.554167e-02, 7.554167e-02, 0.9971, -20.9776, 66.3963, 714.6, 24];
  var cage6 = [860, 511.8, 320, 0.8757, -0.4829, 0.4829, 0.8757, -94.8011, 295.8814, 30.7, 24, 970, 480.3, 197.5, 0.8757, -0.4829, 0.4829, 0.8757, -7.9709, 387.9714, 538.3, 24];
  var cage7 = [1022, 956.2, 75.8, 0.9707, -0.2402, 0.2402, 0.9707, 7.3534, 235.997, 31.5, 24, 1050, 633.5, 115.2, 0.9707, -0.2402, 0.2402, 0.9707, -6.7432, 198.9743, 359, 24];
  var cage8 = [1096, 1184.4, 128.6, 0.9607, -0.2775, 0.2775, 0.9607, 8.1151, 338.609, 31.7, 24, 1170, 498.1, 225.8, 0.9607, -0.2775, 0.2775, 0.9607, -32.0494, 249.1035, 731.8, 24];
  var cage9 = [1355, 1192.7, 274.7, 0.9977, 6.707618e-02, -6.707618e-02, 0.9977, 21.9482, -80.3654, 30.1, 24, 1510, 63.2, 236.7, 0.9977, 6.707618e-02, -6.707618e-02, 0.9977, 18.1337, -42.6099, 1160.9, 24];
  var cage10 = [1556, 952.7, 76.5, -0.7683, -0.6401, 0.6401, -0.7683, 1656.3157, 776.6447, 32.1, 24, 1620, 916.4, 176.6, -0.7683, -0.6401, 0.6401, -0.7683, 1804.6812, 1030.5477, 344.9, 24];
  var cage11 = [1631, 1186, 130.3, 0.998, -6.362802e-02, 6.362802e-02, 0.998, -6.6215, 76.6937, 29.7, 24, 1730, 66.4, 166, 0.998, -6.362802e-02, 6.362802e-02, 0.998, -10.0233, 41.1838, 1150.4, 24];
  var cage12 = [1778, 1183.2, 129, -6.432571e-02, -0.9979, 0.9979, -6.432571e-02, 1134.6056, 1345.8368, 30.1, 24, 1850, 1112.3, 204.6, -6.432571e-02, -0.9979, 0.9979, -6.432571e-02, 1064.3425, 1431.1704, 181.7, 24];
  var cage13 = [1905, 1615.6, 271.1, 1, -7.968381e-03, 7.968381e-03, 1, -2.2038, 13.0067, 31, 24, 2060, 1192.4, 272.8, 1, -7.968382e-03, 7.968382e-03, 1, -2.224, 11.3204, 454.3, 24];
  var cage14 = [2084, 1932, 90.7, 0.9987, -5.022844e-02, 5.022844e-02, 0.9987, -2.7006, 97.9719, 32, 24, 2090, 631.4, 123.4, 0.9987, -5.022907e-02, 5.022907e-02, 0.9987, -5.1626, 65.371, 1333.4, 24];
  var cage15 = [2275, 954.1, 77.5, -0.9598, -0.2806, 0.2806, -0.9598, 1874.2906, 447.2946, 30.1, 24, 2500, 940.2, 174.8, -0.9598, -0.2806, 0.2806, -0.9598, 2499.5159, 731.4751, 723.9, 24];
  var cage16 = [2677, 1617.7, 270.3, 0.9988, -4.803111e-02, 4.803111e-02, 0.9988, -11.6718, 78.7895, 31.8, 24, 2730, 506.3, 297, 0.9988, -4.803111e-02, 4.803111e-02, 0.9988, -13.5956, 52.1441, 1143.8, 24];
  var cage17 = [2760, 1618.8, 270.6, 0.9989, 4.710931e-02, -4.710931e-02, 0.9989, 15.1274, -76.6556, 30.1, 24, 2870, 67.5, 234, 0.9989, 4.710931e-02, -4.710931e-02, 0.9989, 12.5444, -40.177, 1582.3, 24];
  var cage18 = [2892, 1191.8, 275.8, -0.9705, 0.241, -0.241, -0.9705, 2448.8572, 276.0725, 31.4, 24, 2955, 1180.6, 183.7, -0.9705, 0.241, -0.241, -0.9705, 3157.4216, 5.2288, 795.7, 24];
  var cage19 = [3011, 637.3, 154.3, -0.9988, 4.821476e-02, -4.821476e-02, -0.9988, 1313.797, 300.831, 32, 24, 3250, 636.5, 123, -0.9988, 4.821476e-02, -4.821476e-02, -0.9988, 2606.5847, 207.134, 1328.6, 24];

  // Pre-load the sound clip
  // The sound clip is only being loaded once, here, for both sketches. And
  // even though it's contained here in the Cage sketch, the addCue() function
  // can still be called from the Tudor sketch. It didn't seem to work to make
  // the sound clip load globally, though that would make more sense, and
  // worth looking at again.
  p.preload = function() {
    mySound = p.loadSound('assets/notation-j-tudor1958.mp3');
  };

  p.setup = function() {

    // Canvas created at the size of the original Illustrator file
    p.createCanvas(2000,500);
    p.frameRate(100);
    p.noStroke();
    p.fill(r,g,b,opacity);

    // buttonSetup is only called once, here in the Cage sketch, in
    // conjunection with the loaded sound above.
    buttonSetup();

    // Cues added for each of the coordinates sets above. Would be better to
    // create this list simply by looping through the given coordinates
    mySound.addCue(0.30, growRotatedSpotlight, cage1);
    mySound.addCue(2.32, growRotatedSpotlight, cage2);
    mySound.addCue(3.03, growRotatedSpotlight, cage3);
    mySound.addCue(4.70, growRotatedSpotlight, cage4);
    mySound.addCue(6.90, growRotatedSpotlight, cage5);
    mySound.addCue(8.60, growRotatedSpotlight, cage6);
    mySound.addCue(10.22, growRotatedSpotlight, cage7);
    mySound.addCue(10.96, growRotatedSpotlight, cage8);
    mySound.addCue(13.55, growRotatedSpotlight, cage9);
    mySound.addCue(15.56, growRotatedSpotlight, cage10);
    mySound.addCue(16.31, growRotatedSpotlight, cage11);
    mySound.addCue(17.78, growRotatedSpotlight, cage12);
    mySound.addCue(19.05, growRotatedSpotlight, cage13);
    mySound.addCue(20.84, growRotatedSpotlight, cage14);
    mySound.addCue(22.75, growRotatedSpotlight, cage15);
    mySound.addCue(26.77, growRotatedSpotlight, cage16);
    mySound.addCue(27.60, growRotatedSpotlight, cage17);
    mySound.addCue(28.92, growRotatedSpotlight, cage18);
    mySound.addCue(30.11, growRotatedSpotlight, cage19);

    mySound.onended(resetAnimation);
  };

  function growRotatedSpotlight(v) {
    t = 0;
    // how many tween states should be created
    var loops = v[11] - v[0];
    // what overall distance and size should change over those tween states
    var xDif = v[12] - v[1];
    var yDif = v[13] - v[2];
    var wDif = v[20] - v[9];
    var hDif = v[21] - v[10];
    // matrix values 1 through 4 are consistent between start and end shapes
    // but matrix 5 and 6 do change and so need to be computed
    var matrix5Dif = v[18] - v[7];
    var matrix6Dif = v[19] - v[8];
    // determine the coordinates for each tween state, add a time cue for it
    // and feed the coordiantes to the rotatedSpotlight function for execution
    for (var i = 0; i < loops; i++) {
      var variableSet = [v[1] + ((xDif/loops) * i), v[2] + ((yDif/loops) * i), v[9] + ((wDif/loops) * i), v[10] + ((hDif/loops) * i), v[3],v[4],v[5],v[6],(v[7] + ((matrix5Dif/loops) * i)),(v[8] + ((matrix6Dif/loops) * i))];
      var time = t + (v[0] * .01);
      p.fill(r,g,b,opacity);
      mySound.addCue(time, rotatedSpotlight, variableSet);
      t += .01;
    }
  };

  function rotatedSpotlight(v) {
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
    p.clear();
    p.quad(nx1,ny1,nx2,ny2,nx3,ny3,nx4,ny4);
  }

};

// A duplication of the Cage code above, but with coordinates set for Tudor
// and output on a separate `div`.
var t = function( p ) {

  var tudor1 = [30, 347.3, 549.7, 0.3161, -0.9487, 0.9487, 0.3161, -289.3945, 743.2653, 47.1, 45.3, 210, 289.3, 469.2, 0.3161, -0.9487, 0.9487, 0.3161, -194.6948, 713.6696, 216.7, 45.3];
  var tudor2 = [232, 492.1, 205.5, 1, 0, 0, 1, 0, 0, 52, 30.2, 300, 492.1, 205.5, 1, 0, 0, 1, 0, 0, 52, 95.1];
  var tudor3 = [303, 543.8, 131.6, -9.301587e-02, -0.9957, 0.9957, -9.301587e-02, 452.2638, 730.6685, 30.2, 55.4, 320, 467.9, 215, -9.301587e-02, -0.9957, 0.9957, -9.301587e-02, 377.7662, 829.5505, 197.6, 55.4];
  var tudor4 = [470, 771.6, 110.3, -0.1853, -0.9827, 0.9827, -0.1853, 793.8179, 941.8441, 31.5, 63.2, 650, 613.2, 301.3, -0.1853, -0.9827, 0.9827, -0.1853, 648.8027, 1203.6447, 420.3, 63.2];
  var tudor5 = [690, 945.6, 423.6, -0.9373, -0.3485, 0.3485, -0.9373, 1695.0492, 1235.4795, 26, 83.4, 800, 941.5, 448.2, -0.9373, -0.3485, 0.3485, -0.9373, 1814.4315, 1306.0574, 166.4, 83.4];
  var tudor6 = [860, 1162.7, 513.3, -0.2124, 0.9772, -0.9772, -0.2124, 1959.9329, -492.3574, 31.4, 60.7, 970, 1011.2, 325.3, -0.2124, 0.9772, -0.9772, -0.2124, 1825.7833, -760.2092, 416.1, 60.7];
  var tudor7 = [1022, 1299.3, 121.4, 1, 0, 0, 1, 0, 0, 54, 33.6, 1050, 1299.3, 121.4, 1, 0, 0, 1, 0, 0, 54, 173.6];
  var tudor8 = [1096, 1365, 150.1, 1, 0, 0, 1, 0, 0, 69.9, 43.1, 1170, 1365, 150.1, 1, 0, 0, 1, 0, 0, 69.9, 411.1];
  var tudor9 = [1355, 1518.9, 445.4, -0.9278, 0.3731, -0.3731, -0.9278, 3146.5012, 364.9143, 38.1, 83.1, 1510, 1509.3, 395.8, -0.9278, 0.3731, -0.3731, -0.9278, 3366.0015, 223.108, 304.3, 83.1];
  var tudor10 = [1556, 1796.1, 151.3, -0.1874, -0.9823, 0.9823, -0.1874, 1979.8107, 1992.4745, 35.9, 52, 1620, 1734, 226.4, -0.1874, -0.9823, 0.9823, -0.1874, 1923.0889, 2095.6514, 188.7, 52];
  var tudor11 = [1631, 203.3, 664.4, -0.7868, -0.6173, 0.6173, -0.7868, -25.8237, 1382.0093, 44.9, 62.2, 1730, 189, 705.8, -0.7868, -0.6173, 0.6173, -0.7868, 42.9104, 1488.5575, 179.1, 62.2];
  var tudor12 = [1778, 364.9, 655.3, 1, 0, 0, 1, 0, 0, 78.7, 55.9, 1850, 364.9, 655.3, 1, 0, 0, 1, 0, 0, 78.7, 333.4];
  var tudor13 = [1905, 438.8, 903.6, 1, 0, 0, 1, 0, 0, 45.3, 39.1, 2060, 438.8, 903.6, 1, 0, 0, 1, 0, 0, 45.3, 123.1];
  var tudor14 = [2084, 549.1, 634.2, -0.8895, -0.4569, 0.4569, -0.8895, 769.7823, 1567.0721, 50.5, 112.5, 2090, 538.7, 677.1, -0.8895, -0.4569, 0.4569, -0.8895, 908.137, 1686.4357, 238.5, 112.5];
  var tudor15 = [2275, 796, 564.5, -0.3982, -0.9173, 0.9173, -0.3982, 575.8769, 1617.0254, 44.7, 110.2, 2500, 688.1, 729.1, -0.3982, -0.9173, 0.9173, -0.3982, 524.8098, 1912.5953, 403.5, 110.2];
  var tudor16 = [2677, 1039.2, 885.7, 1, 0, 0, 1, 0, 0, 85.6, 33.6, 2730, 1039.2, 885.7, 1, 0, 0, 1, 0, 0, 85.6, 149.9];
  var tudor17 = [2760, 1149.5, 859.2, -0.9591, 0.2831, -0.2831, -0.9591, 2533.7319, 1465.6232, 22.9, 113.5, 2870, 1146.6, 834.4, -0.9591, 0.2831, -0.2831, -0.9591, 2690.6548, 1393.5422, 196.1, 113.5];
  var tudor18 = [2892, 1330.8, 933.6, -6.297800e-02, 0.998, -0.998, -6.297800e-02, 2396.1997, -323.757, 38.5, 58.7, 2955, 1162.9, 754.8, -6.297899e-02, 0.998, -0.998, -6.297899e-02, 2229.7268, -525.1049, 396.8, 58.7];
  var tudor19 = [3011, 1977.2, 577, -0.9543, 0.2988, -0.2988, -0.9543, 4086.7297, 689.7031, 26.8, 160.5, 3250, 1970.2, 528.7, -0.9465, 0.3228, -0.3228, -0.9465, 4349.6431, 495.4161, 327.2, 159.3];

  p.setup = function() {
    p.createCanvas(2000,1260);
    p.frameRate(100);
    p.noStroke();
    p.fill(r,g,b,opacity);
    mySound.addCue(0.30, growRotatedSpotlight, tudor1);
    mySound.addCue(2.32, growRotatedSpotlight, tudor2);
    mySound.addCue(3.03, growRotatedSpotlight, tudor3);
    mySound.addCue(4.70, growRotatedSpotlight, tudor4);
    mySound.addCue(6.90, growRotatedSpotlight, tudor5);
    mySound.addCue(8.60, growRotatedSpotlight, tudor6);
    mySound.addCue(10.22, growRotatedSpotlight, tudor7);
    mySound.addCue(10.96, growRotatedSpotlight, tudor8);
    mySound.addCue(13.55, growRotatedSpotlight, tudor9);
    mySound.addCue(15.56, growRotatedSpotlight, tudor10);
    mySound.addCue(16.31, growRotatedSpotlight, tudor11);
    mySound.addCue(17.78, growRotatedSpotlight, tudor12);
    mySound.addCue(19.05, growRotatedSpotlight, tudor13);
    mySound.addCue(20.84, growRotatedSpotlight, tudor14);
    mySound.addCue(22.75, growRotatedSpotlight, tudor15);
    mySound.addCue(26.77, growRotatedSpotlight, tudor16);
    mySound.addCue(27.60, growRotatedSpotlight, tudor17);
    mySound.addCue(28.92, growRotatedSpotlight, tudor18);
    mySound.addCue(30.11, growRotatedSpotlight, tudor19);
  };

  function growRotatedSpotlight(v) {
    t = 0;
    var loops = v[11] - v[0];
    var xDif = v[12] - v[1];
    var yDif = v[13] - v[2];
    var wDif = v[20] - v[9];
    var hDif = v[21] - v[10];
    var matrix5Dif = v[18] - v[7];
    var matrix6Dif = v[19] - v[8];
    for (var i = 0; i < loops; i++) {
      var variableSet = [v[1] + ((xDif/loops) * i), v[2] + ((yDif/loops) * i), v[9] + ((wDif/loops) * i), v[10] + ((hDif/loops) * i), v[3],v[4],v[5],v[6],(v[7] + ((matrix5Dif/loops) * i)),(v[8] + ((matrix6Dif/loops) * i))];
      var time = t + (v[0] * .01);
      p.fill(r,g,b,opacity);
      mySound.addCue(time, rotatedSpotlight, variableSet);
      t += .01;
    }
  };
  function rotatedSpotlight(v) {
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
    p.clear();
    p.quad(nx1,ny1,nx2,ny2,nx3,ny3,nx4,ny4);
  }
};


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
  };
}

function resetAnimation() {
  document.getElementById("playback").innerHTML = 'Play';
  clear();
};

// In instance mode, these attach the created sketches to their elements.
// Defined here as having the IDs `cage` and `tudor`
var myp5 = new p5(c, 'cage');
var myp5 = new p5(t, 'tudor');

