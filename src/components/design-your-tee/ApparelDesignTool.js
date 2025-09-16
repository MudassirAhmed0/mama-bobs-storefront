"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  addGraphicToCanvas,
  deleteSelectedObject,
  getCanvasPreview,
} from "./utils/canvasUtils";
import ShirtView from "./ShirtView";
import CanvasArea from "./CanvasArea";
import DesignPalette from "./DesignPalette";
import { useCanvasResize } from "./hooks/useCanvasResize";
import { useCanvasStyles } from "./hooks/useCanvasStyles";
import { useFabricScript } from "./hooks/useFabricScript";

const designOptions = [
  {
    type: "graphic",
    src: "/images/design-assets/designs/1.png",
    alt: "Design 1",
  },
  {
    type: "graphic",
    src: "/images/design-assets/designs/2.png",
    alt: "Design 2",
  },
  {
    type: "graphic",
    src: "/images/design-assets/designs/3.png",
    alt: "Design 3",
  },
  {
    type: "graphic",
    src: "/images/design-assets/designs/4.png",
    alt: "Design 4",
  },
  {
    type: "graphic",
    src: "/images/design-assets/designs/5.png",
    alt: "Design 5",
  },
  {
    type: "graphic",
    src: "/images/design-assets/designs/6.png",
    alt: "Design 6",
  },
  {
    type: "graphic",
    src: "/images/design-assets/designs/7.png",
    alt: "Design 7",
  },
  {
    type: "graphic",
    src: "/images/design-assets/designs/8.png",
    alt: "Design 8",
  },
];

// Default tee images for fallback
const DEFAULT_FRONT_IMAGE = "/images/design-assets/tees/white-front.png";
const DEFAULT_BACK_IMAGE = "/images/design-assets/tees/white-back.png";

const ApparelDesignTool = ({ selectedTee }) => {
  // Log the selected tee when component mounts
  useEffect(() => {
    console.log("Selected tee in ApparelDesignTool:", selectedTee);
  }, [selectedTee]);

  const [canvasImage, setCanvasImage] = useState(
    selectedTee ? selectedTee.frontImage : DEFAULT_FRONT_IMAGE
  );
  const [price, setPrice] = useState(selectedTee ? selectedTee.price : 50);
  const [preview, setPreview] = useState(false);
  const [selectedObject, setSelectedObject] = useState(null);
  const [currentCanvasType, setCurrentCanvasType] = useState("front");

  const canvasFrontRef = useRef(null);
  const canvasBackRef = useRef(null);

  const [frontPreview, setFrontPreview] = useState(null);
  const [backPreview, setBackPreview] = useState(null);

  const initCanvases = useCallback(() => {
    const initCanvas = (canvasRef) => {
      const canvas = new fabric.Canvas(canvasRef.current, {
        width: (window.innerWidth / 100) * 14.5,
        height: (window.innerWidth / 100) * 17,
      });
      const handleCanvasChange = () => {
        calculatePrice();
      };
      canvas.on("selection:created", (e) => e.target && setSelectedObject(e.target));
      canvas.on("selection:updated", (e) => e.target && setSelectedObject(e.target));
      canvas.on("selection:cleared", () => setSelectedObject(null));
      canvas.on('object:added', handleCanvasChange);
      canvas.on('object:modified', handleCanvasChange);
      canvas.on('object:removed', handleCanvasChange);
      canvasRef.current = canvas;
    };

    initCanvas(canvasFrontRef);
    initCanvas(canvasBackRef);
  }, []);

  // Load Fabric.js script once and initialize canvases
  useFabricScript(initCanvases);

  // Clean up canvases and event listeners when component unmounts
  useEffect(() => {
    return () => {
      // Dispose of Fabric.js canvases
      if (canvasFrontRef.current && typeof canvasFrontRef.current.dispose === 'function') {
        canvasFrontRef.current.dispose();
      }
      if (canvasBackRef.current && typeof canvasBackRef.current.dispose === 'function') {
        canvasBackRef.current.dispose();
      }
    };
  }, []);

  // Other hooks
  useCanvasResize([canvasFrontRef, canvasBackRef]);
  useCanvasStyles(currentCanvasType);

  const calculatePrice = useCallback(() => {
    let frontAddition = 0;
    let backAddition = 0;

    // Calculate front addition
    const frontCanvas = canvasFrontRef.current;
    if (frontCanvas) {
      const objects = frontCanvas.getObjects();
      if (objects.length > 0) {
        const canvasWidth = frontCanvas.width;
        const canvasHeight = frontCanvas.height;
        const canvasArea = canvasWidth * canvasHeight;
        const totalArea = objects.reduce((sum, obj) => {
          return sum + obj.getScaledWidth() * obj.getScaledHeight();
        }, 0);
        const percentage = (totalArea / canvasArea) * 100;
        frontAddition = percentage >= 50 ? 50 : 25;
      }
    }

    // Calculate back addition
    const backCanvas = canvasBackRef.current;
    if (backCanvas) {
      const objects = backCanvas.getObjects();
      if (objects.length > 0) {
        const canvasWidth = backCanvas.width;
        const canvasHeight = backCanvas.height;
        const canvasArea = canvasWidth * canvasHeight;
        const totalArea = objects.reduce((sum, obj) => {
          return sum + obj.getScaledWidth() * obj.getScaledHeight();
        }, 0);
        const percentage = (totalArea / canvasArea) * 100;
        backAddition = percentage >= 50 ? 50 : 25;
      }
    }

    const newPrice = 50 + frontAddition + backAddition;
    setPrice(newPrice);
  }, []);

  // Recalculate price on window resize
  useEffect(() => {
    window.addEventListener('resize', calculatePrice);
    return () => {
      window.removeEventListener('resize', calculatePrice);
    };
  }, [calculatePrice]);

  // Event Handlers
  const handleActiveShirt = (e) => {
    const type = e.target.dataset.type;
    setCanvasImage(e.target.src);
    setCurrentCanvasType(type);
    setSelectedObject(null);
  };

  const handleAddGraphic = (src) => {
    const canvas =
      currentCanvasType === "front"
        ? canvasFrontRef.current
        : canvasBackRef.current;
    addGraphicToCanvas(canvas, src);
  };

  const handlePreview = () => {
      setFrontPreview(canvasFrontRef.current.toDataURL({
        format: 'png', // or 'jpeg' 
        quality: 1,    // (for JPEG) 0 to 1
      }));
      setBackPreview(canvasBackRef.current.toDataURL({
        format: 'png', // or 'jpeg'
        quality: 1,    // (for JPEG) 0 to 1
      }));
    
    setPreview(true);
 
  };

  const handleDelete = () => {
    const canvas =
      currentCanvasType === "front"
        ? canvasFrontRef.current
        : canvasBackRef.current;
    deleteSelectedObject(canvas, selectedObject);
    setSelectedObject(null);
  };

  return (
    <>
      <div className="flex justify-between w-[95%] mx-auto ">
        {/* Shirt Views */}
        <div className="min-w-[17vw] w-[17vw] h-[50vw] border-[1px] border-[#efefef] flex flex-col items-center">
          <ShirtView
            type="front"
            src={selectedTee ? selectedTee.frontImage : DEFAULT_FRONT_IMAGE}
            currentCanvasType={currentCanvasType}
            onClick={handleActiveShirt}
          />
          <ShirtView
            type="back"
            src={selectedTee ? selectedTee.backImage : DEFAULT_BACK_IMAGE}
            currentCanvasType={currentCanvasType}
            onClick={handleActiveShirt}
          />
        </div>

        {/* Canvas Area */}
        <CanvasArea
          canvasImage={canvasImage}
          preview={preview}
          selectedObject={selectedObject}
          currentCanvasType={currentCanvasType}
          canvasFrontRef={canvasFrontRef}
          canvasBackRef={canvasBackRef}
          onDelete={handleDelete}
        />

        {/* Design Controls */}
        <div className="min-w-[30vw] w-[30vw] p-4 bg-[#f5f5f5]">
          <DesignPalette
            designOptions={designOptions}
            onAddGraphic={handleAddGraphic}
          />
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Price: ${price}</h2>
            {selectedTee && (
              <div className="text-sm text-gray-600">
                <p>Base Tee: {selectedTee.name}</p>
                <p>Color: {selectedTee.color}</p>
              </div>
            )}
          </div>
          <div className="flex gap-4">
            <button
              onClick={handlePreview}
              className="bg-[#a16207] hover:bg-[#ca8a04] text-white rounded w-full py-3 transition-colors"
            >
              Preview
            </button>
            <button className="bg-[#a16207] hover:bg-[#ca8a04] text-white rounded w-full py-3 transition-colors">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    
   {preview &&    <div className="flex justify-center items-center w-full h-full fixed top-0 left-0 bg-black bg-opacity-50 z-50">
      {/* close button on top right  */}
      <button
        onClick={() => setPreview(false)}
        className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full"
      >
        Close Preview
      </button>
      <div className="min-w-[45vw] w-[45vw] h-[50vw] border-[1px] border-[#efefef] bg-white relative">
    

    <img
      src={selectedTee ? selectedTee.frontImage : DEFAULT_FRONT_IMAGE}
      alt="Tshirt"
      className="w-full h-full object-contain"
    />

<div   className="absolute top-[15vw] left-[15.5vw] w-[14.5vw] h-[17vw]  ">
     <img src={frontPreview} className="size-full"/>
     
     </div>
  </div>
      <div className="min-w-[45vw] w-[45vw] h-[50vw] border-[1px] border-[#efefef] bg-white relative">
    

    <img
      src={selectedTee ? selectedTee.backImage : DEFAULT_BACK_IMAGE}
      alt="Tshirt"
      className="w-full h-full object-contain"
    />

    <div className="absolute top-[11vw] left-[14.5vw] w-[15.5vw] h-[17vw]  ">
     <img src={backPreview} className="size-full"/>
    </div>
    </div>
    </div>}
    </>
  );
};

export default ApparelDesignTool;
