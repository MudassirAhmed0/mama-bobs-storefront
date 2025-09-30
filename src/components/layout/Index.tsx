import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer/Footer";
interface LayoutProps {
  children: React.ReactNode;
  footerSecondLogo?: boolean;
  variant2?: boolean;
}
const Layout = ({
  children,
  footerSecondLogo = false,
  variant2,
}: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer footerSecondLogo={variant2} />
    </>
  );
};

export default Layout;
