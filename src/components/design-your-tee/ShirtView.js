import React from "react";

const ShirtView = ({ type, src, currentCanvasType, onClick }) => (
  <img
    onClick={onClick}
    data-type={type}
    src={src}
    alt={type}
    className={`p-[2.5%] m-[2.5%] w-[90%] h-[45%] object-cover cursor-pointer ${
      currentCanvasType === type ? "active border-[1px] border-[#dedede]" : ""
    }`}
  />
);

export default ShirtView;
