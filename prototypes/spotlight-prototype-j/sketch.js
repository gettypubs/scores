function setup() {
  var width = 504;
  var height = 652;
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

function draw() {

 // (startTime,endTime,startX,endX,startY,endY,startWidth,endWidth,startHeight,endHeight,matrix1,matrix2,matrix3,matrix4,matrix5,matrix6)


  // <rect id="s00:00:30" x="175.1" y="275.2" transform="matrix(0.967 0.2546 -0.2546 0.967 77.1291 -36.5185)" class="st0" width="9" height="9"/>
  //
  // <rect id="e00:02:10" x="25.6" y="255.8" transform="matrix(0.967 0.2546 -0.2546 0.967 69.7778 -18.438)" class="st0" width="161" height="9"/>

  growRotatedSpotlight(30,210,175.1,25.6,255.8,255.8,9,161,9,9,0.967,0.2546,-0.2546,0.967,69.7778,-18.438);

  // <rect id="s00:04:70" x="174.7" y="275.4" transform="matrix(0.8431 -0.5377 0.5377 0.8431 -122.1714 140.9846)" class="st0" width="11.7" height="9"/>
  //
  // <rect id="e00:06:50" x="163.2" y="235.9" transform="matrix(0.8431 -0.5377 0.5377 0.8431 -91.2404 168.0697)" class="st0" width="158.5" height="9"/>

  growRotatedSpotlight(470,650,163.2,163.2,235.9,235.9,9,158.5,9,9,0.8431,-0.5377,0.5377,0.8431,-91.2404,168.0697);


  // <rect id="s00:00:30_1_" x="102.9" y="445.2" transform="matrix(0.3161 -0.9487 0.9487 0.3161 -353.6486 413.3189)" class="st0" width="14" height="13.5"/>
  //
  // <rect id="e00:02:10_1_" x="85.6" y="421.2" transform="matrix(0.3161 -0.9487 0.9487 0.3161 -325.4332 404.501)" class="st0" width="64.6" height="13.5"/>

  // growRotatedSpotlight(30,210,85.6,85.6,421.2,421.2,13.5,64.6,13.5,13.5,0.3161,-0.9487,0.9487,0.3161,-325.4332,404.501);

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
