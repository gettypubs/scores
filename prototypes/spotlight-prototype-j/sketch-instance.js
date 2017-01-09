


var s = function( p ) { // p could be any variable name

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
  });

  p.setup = function() {
    p.createCanvas(504, 652);
    frameRate(100);
    angleMode(DEGREES);
    ellipseMode(RADIUS);
    noStroke();
  };

  p.draw = function() {
    // p.background(0);
    // p.fill(255);
    // p.rect(x,y,50,50);

    growRotatedSpotlight(30,210,175.1,25.6,255.8,255.8,9,161,9,9,0.967,0.2546,-0.2546,0.967,69.7778,-18.438);

  };



};
var myp5 = new p5(s, 'p5js');
