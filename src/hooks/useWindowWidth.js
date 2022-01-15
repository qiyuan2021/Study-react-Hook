import React, { useEffect } from "react";
import { useState } from "react";

export default function useWindowWidth() {
  const [width, setWidth] = React.useState(window.innerWidth);

  useEffect(() => {
    const resize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      //청소하기
    };
  }, []);

  return width;
}
