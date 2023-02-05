import React from "react";
import "../style/Background.css";

export default function Background() {
  return (
    <div>
      <div
        className="
                pointer-events-none
                absolute
                side-medium
                aqua-aqua
                bean-middle-medium
                rbr-hide-tablet-on-up
            "
        style={{ inset: "-450px -250px 0px auto", filter: "blur(100px)" }}
      ></div>
      <div
        className="
                pointer-events-none
                absolute
                side-medium
                violet-violet
                bean-middle-medium
                
                
                rbr-hide-tablet-on-up
            "
        style={{ inset: "350px auto 0px -320px", filter: "blur(100px)" }}
      ></div>
      <div
        className="
                pointer-events-none
                absolute
                side-medium
                aqua-aqua
                bean-middle-medium
                
                
                rbr-hide-mobile blur-right
            "
        style={{inset: "64px -280px 0px auto", filter: "blur(100px)"}}
      ></div>
      <div
        className="
                pointer-events-none
                absolute
                side-medium
                violet-violet
                bean-middle-medium
                
                
                rbr-hide-mobile blur-left
            "
        style={{inset: "250px auto 0px -250px", filter: "blur(100px)"}}
      ></div>
    </div>
  );
}
