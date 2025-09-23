import React, { ReactNode } from "react";

const ShopLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container mx-auto px-4 py-8 mt-[120px] sm:mt-[25vw] lg:mt-[10vw]">
      {children}
    </div>
  );
};

export default ShopLayout;
