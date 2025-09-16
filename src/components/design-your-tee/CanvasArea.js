import { Trash } from "lucide-react";
import React from "react";

const CanvasArea = ({
  canvasImage,
  previewImage,
  selectedObject,
  currentCanvasType,
  canvasFrontRef,
  canvasBackRef,
  onDelete,
}) => (
  <div className="min-w-[45vw] w-[45vw] h-[50vw] border-[1px] border-[#efefef] bg-white relative">
    {selectedObject && (
      <button
        onClick={onDelete}
        className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full"
      >
        <Trash size={16} />
      </button>
    )}

    <img
      src={canvasImage}
      alt="Tshirt"
      className="w-full h-full object-contain"
    />

    <div id="canvas-container" className="absolute top-[15vw] left-[15.5vw]">
      {previewImage ? (
        <img src={previewImage} alt="Preview" className="w-full h-full" />
      ) : (
        <>
          <canvas
            id="canvasFront"
            ref={canvasFrontRef}
            className={`absolute ${
              currentCanvasType === "front" ? "z-10" : "z-0"
            }`}
          />
          <canvas
            id="canvasBack"
            ref={canvasBackRef}
            className={`absolute ${
              currentCanvasType === "back" ? "z-10" : "z-0"
            }`}
          />
          <span className="absolute inset-0 border-[#efefef] border pointer-events-none z-[11]" />
        </>
      )}
    </div>
  </div>
);

export default CanvasArea;
