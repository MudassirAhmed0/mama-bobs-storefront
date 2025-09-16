import { useEffect, useRef } from "react";

export const useCanvasStyles = (currentCanvasType) => {
  const isFirstRenderRef = useRef(true);

  useEffect(() => {
    const applyCanvasStyles = () => {
      if (currentCanvasType === "front") {
        document.getElementById("canvasFront").parentElement.style.zIndex = "2";
        document.getElementById("canvasBack").parentElement.style.zIndex = "0";

        const lowerCanvasesFront = document
          .getElementById("canvasFront")
          ?.parentElement.querySelectorAll("canvas");

        lowerCanvasesFront?.forEach((lowerCanvasFront, index) => {
          lowerCanvasFront.style.pointerEvents = "auto";
          lowerCanvasFront.style.opacity = "1";
          if (index == 1) {
            lowerCanvasFront.style.zIndex = "10";
          }
        });

        const lowerCanvasesBack = document
          .getElementById("canvasBack")
          ?.parentElement.querySelectorAll("canvas");

        lowerCanvasesBack?.forEach((lowerCanvasBack, index) => {
          lowerCanvasBack.style.pointerEvents = "none";
          lowerCanvasBack.style.opacity = "0";
          if (index == 1) {
            lowerCanvasBack.style.zIndex = "0";
          }
        });
      } else {
        document.getElementById("canvasFront").parentElement.style.zIndex = "0";
        document.getElementById("canvasBack").parentElement.style.zIndex = "2";
        const lowerCanvasesBack = document
          .getElementById("canvasBack")
          ?.parentElement.querySelectorAll("canvas");

        lowerCanvasesBack?.forEach((lowerCanvasBack, index) => {
          lowerCanvasBack.style.pointerEvents = "auto";
          lowerCanvasBack.style.opacity = "1";
          if (index == 1) {
            console.log(lowerCanvasesBack);
            lowerCanvasBack.style.zIndex = "10";
          }
        });

        const lowerCanvasesFront = document
          .getElementById("canvasFront")
          ?.parentElement.querySelectorAll("canvas");

        lowerCanvasesFront?.forEach((lowerCanvasFront, index) => {
          lowerCanvasFront.style.pointerEvents = "none";
          lowerCanvasFront.style.opacity = "0";
          if (index == 1) {
            lowerCanvasFront.style.zIndex = "0";
          }
        });
      }
    };

    if (isFirstRenderRef.current) {
      const timeout = setTimeout(() => {
        applyCanvasStyles();
        const backCanvasContainer =
          document.getElementById("canvasBack")?.parentElement;
        backCanvasContainer.style.position = "absolute";
        backCanvasContainer.style.top = "0";
        backCanvasContainer.style.left = "0";
        isFirstRenderRef.current = false; // Mark as not first render
      }, 1000);

      return () => clearTimeout(timeout); // Cleanup timeout on unmount
    } else {
      applyCanvasStyles(); // Run immediately on subsequent renders
    }
  }, [currentCanvasType]);
};
