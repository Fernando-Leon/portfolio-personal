'use client'

import * as React from "react";
import { ReactP5Wrapper } from "@p5-wrapper/react";

function sketch(p5) {
  let angle = 0;

  p5.setup = () => {
    p5.createCanvas(150, 150, p5.WEBGL);
  };

  p5.draw = () => {
    p5.background(250, 0);
    p5.fill(0, 0, 250); // Relleno azul
    p5.normalMaterial();
    p5.rotateX(angle);
    p5.rotateY(angle);
    p5.rotateZ(angle);
    p5.box(50);
    angle += 0.01;
  };
}
  


export default function AnimationMatrix() {
  return (
    <div className="w-full h-full grid items-center justify-center">
         <ReactP5Wrapper  sketch={sketch} />
    </div>
  )
}