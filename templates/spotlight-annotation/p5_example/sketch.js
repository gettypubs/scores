function setup() {
  createCanvas(504, 612);
  frameRate(10);
}

function draw() {
  var st0 = 0.8 * 100;
  var st1 = 0.5 * 100;
  var st2 = 0.2 * 100;
  var r = 255;
  var g = 0;
  var b = 67;
  noStroke();
  if (frameCount == 1) { fill(r,g,b,st0); rect(216.7, 189, 11.3, 20); }
  if (frameCount == 4) { fill(r,g,b,st0); rect(239.7, 214, 23, 19); }
  if (frameCount == 5) { fill(r,g,b,st0); rect(270, 223.5, 17, 23.5); }
  if (frameCount == 10) { fill(r,g,b,st1); rect(303, 199, 11, 48); }
  if (frameCount == 13) { fill(r,g,b,st2); ellipse(375, 220, 71, 71); }
  if (frameCount == 15) { fill(r,g,b,st0); quad(66.5, 273.5, 66.5, 299, 107.5, 316.5, 107.5, 291.5); }
  if (frameCount == 17) { fill(r,g,b,st0); quad(218.2, 266.5, 218.2, 317.5, 259.2, 305, 259.2, 273); }
  if (frameCount == 20) { fill(r,g,b,st1); ellipse(353.5, 298.5, 43, 43); }

}

// The code as it came out of Illustrator as an SVG:
//
// <rect id="t00:00:01" x="216.7" y="189" class="st0" width="11.3" height="20"/>
// <rect id="t00:00:04" x="239.7" y="214" class="st0" width="23" height="19"/>
// <rect id="t00:00:05" x="270" y="223.5" class="st0" width="17" height="23.5"/>
// <rect id="t00:00:10" x="303" y="199" class="st1" width="11" height="48"/>
// <circle id="t00:00:13" class="st2" cx="375" cy="220" r="35.5"/>
// <polygon id="t00:00:15" class="st0" points="66.5,273.5 66.5,299 107.5,316.5 107.5,291.5 	"/>
// <polygon id="t00:00:17_1_" class="st0" points="218.2,266.5 218.2,317.5 259.2,305 259.2,273 	"/>
// <circle id="t00:00:20" class="st1" cx="353.5" cy="298.5" r="21.5"/>
//
// And THE SVG styles, which gives us the opacity settings linked to a class name, which are then set as variables in the p5 sketch:
//
// <style type="text/css">
// .st0{opacity:0.8;fill:#FF0043;}
// .st1{opacity:0.5;fill:#FF0043;}
// .st2{opacity:0.2;fill:#FF0043;}
// </style>
//
// Simple find and replace converts the SVG element to a p5 element:
//
// SVG  --> <rect id="t00:00:05"       class="st0"    x="270" y="223.5" width="17" height="23.5"/>
// p5   --> if (frameCount == 5) { fill(r,g,b,st0); rect(270,    223.5,        17,         23.5); }
