"use client";

import { Button } from "@/components/ui/button";
import { GetCollectionByHandleQuery, Product } from "@/types/shopify-graphql";
import React from "react";
import Image from "next/image";
import ProductPrice from "./ProductPrice";
import { useRouter } from "next/navigation";

type CollectionProductNode = NonNullable<
  GetCollectionByHandleQuery["collection"]
>["products"]["edges"][number]["node"];

type ProductCardProps = {
  product: Product | CollectionProductNode;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const router = useRouter();
  return (
    <div
      role="button"
      className="flex flex-col gap-2"
      onClick={() => router.push(`/shop/product/${product.handle}`)}
    >
      <div className="relative w-full h-[300px] rounded-lg overflow-hidden border border-gray-100">
        {product?.featuredImage?.url && (
          <Image
            src={product.featuredImage.url}
            alt={(product as Product).featuredImage?.altText ?? ""}
            layout="fill"
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <h1>{product.title}</h1>
      <ProductPrice priceRange={(product as Product).priceRange} />
      <Button>Add to Cart</Button>
    </div>
  );
};

export default ProductCard;
