import Layout from "@/components/layout/Index";
import Productpage from "@/components/product/Index";
import { products } from "@/utils/products";
import React from "react";

const Product = ({ params: { slug } }) => {
  const product = products.find((product) => product.id.toString() === slug);

  return (
    // <Layout>
    <Productpage />
    // </Layout>
  );
};

export default Product;
