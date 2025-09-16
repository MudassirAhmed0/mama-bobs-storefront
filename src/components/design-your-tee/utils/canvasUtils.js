export const addGraphicToCanvas = (canvas, src) => {
  fabric.Image.fromURL(src, (img) => {
    img.set({
      left: canvas.width / 2,
      top: canvas.height / 2,
      originX: "center",
      originY: "center",
      scaleX: 0.2,
      scaleY: 0.2,
      hasControls: true,
    });
    canvas.add(img);
    canvas.setActiveObject(img);
    canvas.requestRenderAll();
  });
};

export const deleteSelectedObject = (canvas, selectedObject) => {
  if (canvas && selectedObject) {
    canvas.remove(selectedObject);
    canvas.discardActiveObject().requestRenderAll();
  }
};

export const getCanvasPreview = (canvas) => {
  // return canvas ? canvas.toDataURL({ format: "png", quality: 1 }) : null;
};
