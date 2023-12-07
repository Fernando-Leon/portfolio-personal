'use client'

import * as React from "react";
import { ReactP5Wrapper } from "@p5-wrapper/react";

  


export default function Animation( { size = 10, widthCanvas = 200, heightCanvas = 200  } ) {

  function sketch(p5) {

    p5.setup = () => {
      p5.createCanvas(widthCanvas, heightCanvas, p5.WEBGL);
      p5.angleMode(p5.DEGREES);
    };
  
    p5.draw = () => {
      p5.background(255, 0);
      p5.rotateX(60);
      p5.noFill(); 
      p5.stroke(255);
  
      for(var i = 0; i < size; i++) {
          p5.beginShape();
          for(var j = 0; j < 360; j += 10) {
              var rad = i * 8;
              var x = rad * p5.cos(j);
              var y = rad * p5.sin(j);
              var z = p5.sin(p5.frameCount * 2 + i * 10) * 50;
              p5.vertex(x, y, z);
          }
          p5.endShape(p5.CLOSE);
      }
    };
  }

  return (
    <div className="w-1/2 h-1/2 grid items-center justify-center">
         <ReactP5Wrapper  sketch={sketch} />
    </div>
  )
}