import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer/Footer";
interface LayoutProps {
  children: React.ReactNode;
  footerSecondLogo?: boolean;
}
const Layout = ({ children, footerSecondLogo }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer footerSecondLogo={footerSecondLogo} />
    </>
  );
};

export default Layout;
