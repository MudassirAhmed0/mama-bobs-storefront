import React from "react";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const Product = async ({ params }: PageProps) => {
  const { slug } = await params;
  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold">Feature product</h1>
      <p className="text-gray-600">Product slug: {slug}</p>
      <p className="mt-2 text-sm text-gray-500">
        This page is a placeholder. Hook it up to your product data or reuse the
        existing shop product page component.
      </p>
    </div>
  );
};

export default Product;
