function setup() {
  var width = 504;
  var height = 612;
  var canvas = createCanvas(width, height);
  canvas.parent("p5js");
  frameRate(100);
  angleMode(DEGREES);
  ellipseMode(RADIUS);
    noStroke();
}

var st0 = 0.8 * 255; // high certainty
var st1 = 0.5 * 255; // average certainty
var st2 = 0.2 * 255; // low certainty
var r = 255;
var g = 0;
var b = 67;
var delay = 0;

var i = 1;
var i2 = 1;
var i3 = 1;
var i4 = 1;

function draw() {

  // <rect id="s00:00:10" x="216.7" y="189" class="st0" width="11.3" height="20"/>
	// <rect id="s00:00:40_1_" x="239.7" y="214" class="st0" width="23" height="19"/>
	// <rect id="s00:00:50_2_" x="270" y="223.5" class="st0" width="17" height="23.5"/>
	// <rect id="s00:01:00" x="303" y="199" class="st1" width="11" height="48"/>
	// <circle id="s00:01:30-e00:01:50" class="st2" cx="375" cy="220" r="35.5"/>
  rectSpotlight(st0,"s00:00:10","e00:00:20",[216.7, 189, 11.3, 20]);
  rectSpotlight(st0,"s00:00:40","e00:00:49",[239.7, 214, 23, 19]);
  rectSpotlight(st0,"s00:00:50","e00:00:90",[270, 223.5, 17, 23.5]);
  rectSpotlight(st1,"s00:01:00","s00:01:29",[303, 199, 11, 48]);

	// <circle id="s00:01:30-e00:01:50" class="st2" cx="375" cy="220" r="35.5"/>
  ellipseSpotlight(st2,"s00:01:30","e00:01:49",[375, 220, 35.5]);

  // <polygon id="s00:01:50" class="st0" points="66.5,273.5 66.5,299 107.5,316.5 107.5,291.5 	"/>
	// <polygon id="e00:01:70" class="st0" points="46,292 46,317.5 87,335 87,310 	"/>
	// <polygon id="s00:01:70" class="st0" points="218.2,266.5 218.2,317.5 259.2,305 259.2,273 	"/>
  quadSpotlight(st0,"s00:01:50","e00:01:79",[46,292,46,317.5,87,335,87,310],[66.5,273.5,66.5,299,107.5,316.5,107.5,291.5]);
  quadSpotlight(st0,"s00:01:80","e00:02:19",[218.2,266.5,218.2,317.5,259.2,305,259.2,273]);

	// <circle id="s00:01:90" class="st1" cx="353.5" cy="298.5" r="26.5"/>
	// <circle id="e00:02:10" class="st1" cx="353.5" cy="298.5" r="21.5"/>
  ellipseSpotlight(st2,"s00:02:20","e00:02:39",[353.5,298.5,11.5],[353.5,298.5,31.5]);

  // <path id="p00:02:10-00:02:90" class="st3" d="M62.1,373.6c31.4,2.2,47.7,58.4,79.7,41.3c10.2-5.4,11.4-16.6,18.5-24.7c9.1-10.3,22.8-17.5,35.3-23.1"/>
  // <circle id="s00:02:10" class="st0" cx="62.1" cy="373.7" r="10"/>
  // <circle id="e00:02:90" class="st0" cx="195.6" cy="367.1" r="10"/>
  // ellipseSpotlightCurve(st3,"s00:02:10","e00:02:90",10,"M62.1,373.6c31.4,2.2,47.7,58.4,79.7,41.3c10.2-5.4,11.4-16.6,18.5-24.7c9.1-10.3,22.8-17.5,35.3-23.1",[55,20,25]);
  // ellipseSpotlightCurve(certainty,startTime,endTime,radius,curve,curveLengths);

  // http://www.w3.org/TR/SVG/paths.html#__svg__SVGAnimatedPathData__normalizedPathSegList
  // See also path.pathSegList and path.animatedPathSegList and path.animatedNormalizedPathSegList

  // https://github.com/jarek-foksa/path-data-polyfill.js
      // var path = document.getElementById("p00:02:10-00:02:90");
      // var normalizedPathData = path.getPathData({normalize: true});
      // path.setPathData(normalizedPathData);
      // var data = path.getAttribute('d');

  // M 62.1 373.6 C 93.5 375.8 109.80000000000001 432 141.8 414.90000000000003
  // C 152 409.50000000000006 153.20000000000002 398.3 160.3 390.20000000000005
  // C 169.4 379.90000000000003 183.10000000000002 372.70000000000005 195.60000000000002 367.1

  var curve = "M 62.1 373.6 C 93.5 375.8 109.80000000000001 432 141.8 414.90000000000003 C 152 409.50000000000006 153.20000000000002 398.3 160.3 390.20000000000005 C 169.4 379.90000000000003 183.10000000000002 372.70000000000005 195.60000000000002 367.1"

  var curveShort = curve.replace(/M\s|C\s|S\s|L\s+/g,"")
  var curveCommas = curveShort.replace(/ +/g,",");
  var curveArray = JSON.parse("[" + curveCommas + "]");

  if ( (frameCount >= timeConvert("s00:02:50")) && (frameCount < timeConvert("00:02:95")) ) {
    var loops = 45;
    var t = i / loops;
    var x = bezierPoint(curveArray[0], curveArray[2], curveArray[4], curveArray[6], t);
    var y = bezierPoint(curveArray[1], curveArray[3], curveArray[5], curveArray[7], t);
    if ( i < 5 ) {
      fill(r,g,b,(st2*2.5));
    }
    else {
      fill(r,g,b,st2);
    }
    ellipse(x, y, 10, 10);
    i++;
  }
  if ( (frameCount >= timeConvert("00:02:95")) && (frameCount < timeConvert("00:03:10")) ) {
    var loops = 15;
    var t = i2 / loops;
    var x = bezierPoint(curveArray[6], curveArray[8], curveArray[10], curveArray[12], t);
    var y = bezierPoint(curveArray[7], curveArray[9], curveArray[11], curveArray[13], t);
    fill(r,g,b,st2);
    ellipse(x, y, 10, 10);
    i2++;
  }
  if ( (frameCount >= timeConvert("s00:03:10")) && (frameCount < timeConvert("e00:03:30")) ) {
    var loops = 20;
    var t = i3 / loops;
    var x = bezierPoint(curveArray[12], curveArray[14], curveArray[16], curveArray[18], t);
    var y = bezierPoint(curveArray[13], curveArray[15], curveArray[17], curveArray[19], t);
    if ( i > loops - 5 ) {
      fill(r,g,b,(st2*2.5));
    }
    else {
      fill(r,g,b,st2);
    }
    ellipse(x, y, 10, 10);
    i3++;
  }

  // push();
  // translate(-90, 100);
  // rotate(-15);
  // if (frameCount == delay + 300) { clear(); fill(r,g,b,st2); rect(320, 400, 28, 28, 14); }
  // if (frameCount == delay + 310) { clear(); fill(r,g,b,st2); rect(320, 400, 56, 28, 14); }
  // if (frameCount == delay + 320) { clear(); fill(r,g,b,st2); rect(320, 400, 84, 28, 14); }
  // if (frameCount == delay + 330) { clear(); fill(r,g,b,st2); rect(320, 400, 112, 28, 14); }
  // if (frameCount == delay + 340) { clear(); fill(r,g,b,st2); rect(320, 400, 140, 28, 14); }
  // pop();
  // push();
  // if (frameCount == delay + 300) { clear(); fill(r,g,b,st2); rotatedRect(318.9,388.7,28,28,0.9794,-0.2018,0.2018,0.9794,-73.2504,86.741); }
  // if (frameCount == delay + 310) { clear(); fill(r,g,b,st2); rotatedRect(318.9,388.7,56,28,0.9794,-0.2018,0.2018,0.9794,-73.2504,86.741); }
  // if (frameCount == delay + 320) { clear(); fill(r,g,b,st2); rotatedRect(318.9,388.7,84,28,0.9794,-0.2018,0.2018,0.9794,-73.2504,86.741); }
  // if (frameCount == delay + 330) { clear(); fill(r,g,b,st2); rotatedRect(318.9,388.7,112,28,0.9794,-0.2018,0.2018,0.9794,-73.2504,86.741); }
  // if (frameCount == delay + 340) { clear(); fill(r,g,b,st2); rotatedRect(318.9,388.7,140,28,0.9794,-0.2018,0.2018,0.9794,-73.2504,86.741); }
  // pop();
  growRotatedSpotlight(340,370,318.9,318.9,388.7,388.7,28,140,28,28,0.9794,-0.2018,0.2018,0.9794,-73.2504,86.741);

  // <circle id="s00:04:00" class="st2" cx="88.5" cy="498.5" r="21.5"/>
	// <circle id="e00:04:80" class="st2" cx="203" cy="498.5" r="21.5"/>
  ellipseSpotlight(st2,"s00:04:10","e00:05:00",[88.5, 498.5, 21.5],[203, 498.5, 21.5]);

  // <rect id="s00:05:00" x="260" y="498.5" class="st0" width="28" height="28"/>
	// <rect id="e00:05:60" x="260" y="498.5" class="st0" width="140" height="28"/>
  //
  // added a corcer radius here (the 4th value in the arrays) which is supported in p5.js
  // it's also supported in Illustrator, but when exported as an svg,
  // rectangles with rounded corners come out as rather complicated bezier shapes
  rectSpotlight(st0,"s00:05:20","s00:05:90",[260, 498.5, 28, 28, 14],[260, 498.5, 140, 28, 14]);

}


// converts time codes formatted as 00:00:00 to a single integer in hundredths of a second

function timeConvert(timeStamp) {
  var timeStamp = timeStamp.replace(/[a-z]*/,"").split(":");
  var hundredths = (timeStamp[0] * 6000) + (timeStamp[1] * 100) + (timeStamp[2] * 1);
  return hundredths;
}

// the following functions are written as closures so that the counter variable, i,
// is independednt to the running of this particular function, and the time it is called.
//
// I had to mess with this a lot, and still not sure I fully grasp closure functions.
// it was this Stack Overflow answer that ultimately worked for me:
// http://stackoverflow.com/questions/6020297/incrementing-a-local-variable-using-javascript
//
// so, this closure function creates a local scope.
var rectSpotlight = (function () {
    var i = 1;
    // once executed it returns the actual function
    return function (certainty,startTime,endTime,startPosition,endPosition) {
      if ( (frameCount >= timeConvert(startTime)) && (frameCount <= timeConvert(endTime)) ) {
        if ( endPosition !== undefined ) {
          var loops = timeConvert(endTime) - timeConvert(startTime);
          var xDif = endPosition[0] - startPosition[0];
          var yDif = endPosition[1] - startPosition[1];
          var wDif = endPosition[2] - startPosition[2];
          var hDif = endPosition[3] - startPosition[3];
          // in p5.js rectangles can have a corner radius, by adding a fifth value to the array
          if ( (startPosition[4] !== undefined) && (endPosition[4] !== undefined) ) {
            var radiusDif = endPosition[4] - startPosition[4];
          } else {
            var radiusDif = 0
          }
          if ( i < loops ) {
            clear();
            fill(r,g,b,certainty);
            rect(startPosition[0] + ((xDif/loops) * i), startPosition[1] + ((yDif/loops) * i), startPosition[2] + ((wDif/loops) * i), startPosition[3] + ((hDif/loops) * i), startPosition[4] + ((radiusDif/loops) * i));
            i++;
          } else if ( i == loops ) {
          // on the last loop, the drawing is cleared from the canvas, and the counter is incremented one last time
            clear();
            i++;
          } else {
          // then after having been cleared, the counter is reset and ready for the next use
            i = 1;
          }
        } else if ( endPosition == undefined )  {
          var loops = timeConvert(endTime) - timeConvert(startTime);
          if ( startPosition[4] !== undefined ) {
            var radius = startPosition[4];
          } else {
            var radius = 0;
          }
          if ( i < loops ) {
            clear();
            fill(r,g,b,certainty);
            rect(startPosition[0], startPosition[1], startPosition[2], startPosition[3], 0);
            i++;
          } else if ( i == loops ) {
            clear();
            i++;
          } else {
            i = 1;
          }
        }
      }
    }
})();

// runs much the same as rectSpotlight(); except an ellipse shape, which requires different variables
var ellipseSpotlight = (function () {
    var i = 1;
    return function (certainty,startTime,endTime,startPosition,endPosition) {
      if ( (frameCount >= timeConvert(startTime)) && (frameCount <= timeConvert(endTime)) ) {
        if ( endPosition !== undefined ) {
          var loops = timeConvert(endTime) - timeConvert(startTime);
          var xDif = endPosition[0] - startPosition[0];
          var yDif = endPosition[1] - startPosition[1];
          var rDif = endPosition[2] - startPosition[2];
          if ( i < loops ) {
            clear();
            fill(r,g,b,certainty);
            ellipse(startPosition[0] + ((xDif/loops) * i), startPosition[1] + ((yDif/loops) * i), startPosition[2] + ((rDif/loops) * i), startPosition[2] + ((rDif/loops) * i));
            i++;
          } else if ( i == loops ) {
            clear();
            i++;
          } else {
            i = 1;
          }
        } else if ( endPosition == undefined )  {
          var loops = timeConvert(endTime) - timeConvert(startTime);
          if ( i < loops ) {
            clear();
            fill(r,g,b,certainty);
            ellipse(startPosition[0], startPosition[1], startPosition[2], startPosition[2]);
            i++;
          } else if ( i == loops ) {
            clear();
            i++;
          } else {
            i = 1;
          }
        }
      }
    }
})();

// runs much the same as the other Spotlights except a freeform quadrilateral shape, which requires different variables
var quadSpotlight = (function () {
    var i = 1;
    return function (certainty,startTime,endTime,startPosition,endPosition) {
      if ( (frameCount >= timeConvert(startTime)) && (frameCount <= timeConvert(endTime)) ) {
        if ( endPosition !== undefined ) {
          var loops = timeConvert(endTime) - timeConvert(startTime);
          var x1Dif = endPosition[0] - startPosition[0];
          var y1Dif = endPosition[1] - startPosition[1];
          var x2Dif = endPosition[2] - startPosition[2];
          var y2Dif = endPosition[3] - startPosition[3];
          var x3Dif = endPosition[4] - startPosition[4];
          var y3Dif = endPosition[5] - startPosition[5];
          var x4Dif = endPosition[6] - startPosition[6];
          var y4Dif = endPosition[7] - startPosition[7];
          console.log (loops, i);
          if ( i < loops ) {
            clear();
            fill(r,g,b,certainty);
            quad(startPosition[0] + ((x1Dif/loops) * i), startPosition[1] + ((y1Dif/loops) * i), startPosition[2] + ((x2Dif/loops) * i), startPosition[3] + ((y2Dif/loops) * i), startPosition[4] + ((x3Dif/loops) * i), startPosition[5] + ((y3Dif/loops) * i), startPosition[6] + ((x4Dif/loops) * i), startPosition[7] + ((y4Dif/loops) * i));
            i++;
          } else if ( i == loops ) {
            clear();
            i++;
          } else {
            i = 1;
          }
        } else if ( endPosition == undefined )  {
          var loops = timeConvert(endTime) - timeConvert(startTime);
          if ( i < loops ) {
            clear();
            fill(r,g,b,certainty);
            quad(startPosition[0], startPosition[1], startPosition[2], startPosition[3], startPosition[4], startPosition[5], startPosition[6], startPosition[7]);
            i++;
          } else if ( i == loops ) {
            clear();
            i++;
          } else {
            i = 1;
          }
        }
      }
    }
})();

var growRotatedSpotlight = (function () {
    var i = 1;
    return function (startTime,endTime,startX,endX,startY,endY,startWidth,endWidth,startHeight,endHeight,matrix1,matrix2,matrix3,matrix4,matrix5,matrix6) {
      if ((frameCount >= delay + startTime) && (frameCount <= delay + endTime)) {
        var loops = endTime - startTime;
        var xDif = endX - startX;
        var yDif = endY - startY;
        var wDif = endWidth - startWidth;
        var hDif = endHeight - startHeight;
        console.log(i,loops,xDif,yDif,wDif,hDif);
        if ( i <= loops ) {
          clear();
          fill(r,g,b,st2);
          rotatedRect(startX + ((xDif/loops) * i), startY + ((yDif/loops) * i), startWidth + ((wDif/loops) * i), startHeight + ((hDif/loops) * i), matrix1,matrix2,matrix3,matrix4,matrix5,matrix6);
          i++;
        }
        else {
          i = 1;
        }
      }
    }
})();

function rotatedRect(x,y,w,h,matrix1,matrix2,matrix3,matrix4,matrix5,matrix6) {
  	var x1 = x;
  	var y1 = y;
    var x2 = x;
    var y2 = y + h;
    var x3 = x + w;
    var y3 = y + h;
    var x4 = x + w;
    var y4 = y;

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform
    var nx1 = matrix1 * x1 + matrix3 * y1 + matrix5;
  	var ny1 = matrix2 * x1 + matrix4 * y1 + matrix6;
    var nx2 = matrix1 * x2 + matrix3 * y2 + matrix5;
    var ny2 = matrix2 * x2 + matrix4 * y2 + matrix6;
    var nx3 = matrix1 * x3 + matrix3 * y3 + matrix5;
  	var ny3 = matrix2 * x3 + matrix4 * y3 + matrix6;
    var nx4 = matrix1 * x4 + matrix3 * y4 + matrix5;
  	var ny4 = matrix2 * x4 + matrix4 * y4 + matrix6;

    quad(nx1,ny1,nx2,ny2,nx3,ny3,nx4,ny4);
}
