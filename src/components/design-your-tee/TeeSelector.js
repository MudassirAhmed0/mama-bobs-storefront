"use client";
import React, { useState } from "react";
import TeeCard from "./TeeCard";
import ApparelDesignTool from "./ApparelDesignTool";

// Actual tee data with real images from public/images/design-assets/tees
// const teeData = [
//   {
//     id: 1,
//     name: "Classic Cotton Tee",
//     color: "White",
//     price: 25.99,
//     frontImage: "/images/design-assets/tees/white-front.png",
//     backImage: "/images/design-assets/tees/white-back.png",
//   },
//   {
//     id: 2,
//     name: "Premium Cotton Tee",
//     color: "Black",
//     price: 29.99,
//     frontImage: "/images/design-assets/tees/black-front.png",
//     backImage: "/images/design-assets/tees/black-back.png",
//   },
//   {
//     id: 3,
//     name: "Soft Cotton Tee",
//     color: "Navy Blue",
//     price: 27.99,
//     frontImage: "/images/design-assets/tees/navy-blue-front.png",
//     backImage: "/images/design-assets/tees/navy-blue-back.png",
//   },
//   {
//     id: 4,
//     name: "Comfort Fit Tee",
//     color: "Sky Blue",
//     price: 26.99,
//     frontImage: "/images/design-assets/tees/sky-blue-front.png",
//     backImage: "/images/design-assets/tees/navy-blue-back.png", // Using navy back as fallback since sky-blue-back.png is not in the list
//   },
//   {
//     id: 5,
//     name: "Summer Tee",
//     color: "Yellow",
//     price: 24.99,
//     frontImage: "/images/design-assets/tees/yellow-front.png",
//     backImage: "/images/design-assets/tees/yellow-back.png",
//   },
//   {
//     id: 6,
//     name: "Pastel Cotton Tee",
//     color: "Baby Pink",
//     price: 28.99,
//     frontImage: "/images/design-assets/tees/bab-pink-front.png",
//     backImage: "/images/design-assets/tees/baby-pink-back.png",
//   },
// ];

const teeData = [
  {
    id: 1,
    name: "Classic Cotton Tee",
    color: "Navy Blue",
    price: 25.99,
    frontImage: "/images/design-assets/newtees/1.png",
    backImage: "/images/design-assets/newtees/navyblue.png",
  },
  {
    id: 2,
    name: "Classic Cotton Tee",
    color: "White",
    price: 25.99,
    frontImage: "/images/design-assets/newtees/2.png",
    backImage: "/images/design-assets/newtees/white.png",
  },
  {
    id: 3,
    name: "Classic Cotton Tee",
    color: "Green",
    price: 25.99,
    frontImage: "/images/design-assets/newtees/3.png",
    backImage: "/images/design-assets/newtees/green.png",
  },
  {
    id: 4,
    name: "Classic Cotton Tee",
    color: "Green",
    price: 25.99,
    frontImage: "/images/design-assets/newtees/4.png",
    backImage: "/images/design-assets/newtees/green.png",
  },
  {
    id: 5,
    name: "Classic Cotton Tee",
    color: "Green",
    price: 25.99,
    frontImage: "/images/design-assets/newtees/5.png",
    backImage: "/images/design-assets/newtees/green.png",
  },
  {
    id: 6,
    name: "Classic Cotton Tee",
    color: "Green",
    price: 25.99,
    frontImage: "/images/design-assets/newtees/6.png",
    backImage: "/images/design-assets/newtees/green.png",
  },
  {
    id: 7,
    name: "Classic Cotton Tee",
    color: "White",
    price: 25.99,
    frontImage: "/images/design-assets/newtees/7.png",
    backImage: "/images/design-assets/newtees/white.png",
  },
  {
    id: 8,
    name: "Classic Cotton Tee",
    color: "Black",
    price: 25.99,
    frontImage: "/images/design-assets/newtees/8.png",
    backImage: "/images/design-assets/newtees/black.png",
  },
  {
    id: 9,
    name: "Classic Cotton Tee",
    color: "Sky Blue",
    price: 25.99,
    frontImage: "/images/design-assets/newtees/9.png",
    backImage: "/images/design-assets/newtees/skyblue.png",
  },
  {
    id: 10,
    name: "Classic Cotton Tee",
    color: "Sky Blue",
    price: 25.99,
    frontImage: "/images/design-assets/newtees/10.png",
    backImage: "/images/design-assets/newtees/skyblue.png",
  },
  {
    id: 11,
    name: "Classic Cotton Tee",
    color: "Black",
    price: 25.99,
    frontImage: "/images/design-assets/newtees/11.png",
    backImage: "/images/design-assets/newtees/black.png",
  },
  {
    id: 12,
    name: "Classic Cotton Tee",
    color: "White",
    price: 25.99,
    frontImage: "/images/design-assets/newtees/12.png",
    backImage: "/images/design-assets/newtees/white.png",
  },
  {
    id: 13,
    name: "Classic Cotton Tee",
    color: "Sky Blue",
    price: 25.99,
    frontImage: "/images/design-assets/newtees/13.png",
    backImage: "/images/design-assets/newtees/skyblue.png",
  },
  {
    id: 14,
    name: "Classic Cotton Tee",
    color: "White",
    price: 25.99,
    frontImage: "/images/design-assets/newtees/14.png",
    backImage: "/images/design-assets/newtees/white.png",
  },
  {
    id: 15,
    name: "Classic Cotton Tee",
    color: "Navy Blue",
    price: 25.99,
    frontImage: "/images/design-assets/newtees/15.png",
    backImage: "/images/design-assets/newtees/navyblue.png",
  },
  {
    id: 16,
    name: "Classic Cotton Tee",
    color: "Black",
    price: 25.99,
    frontImage: "/images/design-assets/newtees/16.png",
    backImage: "/images/design-assets/newtees/black.png",
  },
  {
    id: 17,
    name: "Classic Cotton Tee",
    color: "White",
    price: 25.99,
    frontImage: "/images/design-assets/newtees/17.png",
    backImage: "/images/design-assets/newtees/white.png",
  },
  {
    id: 18,
    name: "Classic Cotton Tee",
    color: "White",
    price: 25.99,
    frontImage: "/images/design-assets/newtees/18.png",
    backImage: "/images/design-assets/newtees/white.png",
  },
  {
    id: 19,
    name: "Classic Cotton Tee",
    color: "Pink",
    price: 25.99,
    frontImage: "/images/design-assets/newtees/19.png",
    backImage: "/images/design-assets/newtees/pink.png",
  },
  {
    id: 20,
    name: "Classic Cotton Tee",
    color: "White",
    price: 25.99,
    frontImage: "/images/design-assets/newtees/20.png",
    backImage: "/images/design-assets/newtees/white.png",
  },
  {
    id: 21,
    name: "Classic Cotton Tee",
    color: "Sky Blue",
    price: 25.99,
    frontImage: "/images/design-assets/newtees/21.png",
    backImage: "/images/design-assets/newtees/skyblue.png",
  },
  {
    id: 22,
    name: "Classic Cotton Tee",
    color: "White",
    price: 25.99,
    frontImage: "/images/design-assets/newtees/22.png",
    backImage: "/images/design-assets/newtees/white.png",
  },
  {
    id: 23,
    name: "Classic Cotton Tee",
    color: "White",
    price: 25.99,
    frontImage: "/images/design-assets/newtees/23.png",
    backImage: "/images/design-assets/newtees/white.png",
  },
  {
    id: 24,
    name: "Classic Cotton Tee",
    color: "Pink",
    price: 25.99,
    frontImage: "/images/design-assets/newtees/24.png",
    backImage: "/images/design-assets/newtees/pink.png",
  },
];

const TeeSelector = () => {
  const [selectedTee, setSelectedTee] = useState(null);

  const handleSelectTee = (tee) => {
    setSelectedTee(tee);
    console.log("Selected tee:", tee);
  };

  return (
    <div className="mt-[10vw]">
      {!selectedTee ? (
        <div className="container mx-auto px-4 py-8">
          {/* <h1 className="text-3xl font-bold text-center mb-8">Choose Your Shirt You Want to Design</h1> */}
          <h1 className="text-7xl font-bold text-center mb-8">
            Coming to a wardrobe near you
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teeData.map((tee) => (
              <TeeCard key={tee.id} tee={tee} onSelect={handleSelectTee} />
            ))}
          </div>
        </div>
      ) : (
        <ApparelDesignTool selectedTee={selectedTee} />
      )}
    </div>
  );
};

export default TeeSelector;
