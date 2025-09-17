import React, { ReactNode } from "react";

const ShopLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container mx-auto px-4 py-8 mt-[120px] sm:mt-[25vw] lg:mt-[10vw]">
      {" "}
      <h1 className="text64 font-bold text-center mb-8">
        Coming to a wardrobe near you
      </h1>
      {children}
    </div>
  );
};

export default ShopLayout;
