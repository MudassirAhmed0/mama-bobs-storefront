import React, { ReactNode } from "react";

const ShopLayout = ({ children }: { children: ReactNode }) => {
  return <div className="container mx-auto px-6 pt-24">{children}</div>;
};

export default ShopLayout;
