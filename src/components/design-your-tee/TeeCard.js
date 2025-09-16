'use client'
import React, { useState } from "react";

const TeeCard = ({ tee, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(tee)}
    >
      <div className="relative h-64 bg-gray-100">
        <img 
          src={isHovered ? tee.backImage : tee.frontImage} 
          alt={`${tee.color} T-shirt ${isHovered ? 'back' : 'front'}`}
          className="w-full h-full object-contain transition-opacity duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{tee.name}</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="text-gray-700">Color: {tee.color}</span>
          <span className="font-bold text-xl">${tee.price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default TeeCard; 