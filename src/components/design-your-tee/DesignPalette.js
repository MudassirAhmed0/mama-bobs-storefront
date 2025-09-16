import React from "react";

const DesignPalette = ({ designOptions, onAddGraphic }) => (
  <div className="design-palette grid grid-cols-3 gap-2 mb-5">
    {designOptions.map((option) => (
      <div
        key={option.src}
        className="design-option cursor-pointer p-1 border-2 border-transparent hover:border-blue-500"
        onClick={() => onAddGraphic(option.src)}
      >
        <img src={option.src} alt={option.alt} className="w-full h-auto" />
      </div>
    ))}
  </div>
);

export default DesignPalette;
