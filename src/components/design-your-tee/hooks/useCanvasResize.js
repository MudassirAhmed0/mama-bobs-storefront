import { useEffect } from "react";

export const useCanvasResize = (canvasRefs) => {
  useEffect(() => {
    const handleResize = () => {
      canvasRefs.forEach((canvasRef) => {
        if (canvasRef.current) {
          canvasRef.current.setDimensions({
            width: (window.innerWidth / 100) * 15.5,
            height: (window.innerWidth / 100) * 17,
          });
        }
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [canvasRefs]);
};
