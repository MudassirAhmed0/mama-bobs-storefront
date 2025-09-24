"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { GET_COLLECTIONS_QUERY } from "@/graphql/collections";
import { useStorefrontQuery } from "@/hooks/useStorefront";
import { GetCollectionsQuery, GetProductsQuery } from "@/types/shopify-graphql";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { GET_ALL_PORDUCTS } from "@/graphql/allproducts";
import Link from "next/link";
import { formatPrice } from "../ProductCard/ProductPrice";
const AllProducts = () => {
  const router = useRouter();
  const { data, isLoading } = useStorefrontQuery<GetProductsQuery>(
    ["products"],
    {
      query: GET_ALL_PORDUCTS,
    }
  );
  console.log(data);
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Skeleton className="h-[300px] w-full" />
        <Skeleton className="h-[300px] w-full" />
        <Skeleton className="h-[300px] w-full" />
        <Skeleton className="h-[300px] w-full" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data?.products?.edges.map((item, index) => {
        return (
          <Link
            key={index}
            className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer"
            href={"/shop/product/" + item.node.handle}
          >
            {item.node.media.nodes.length > 0 && (
              <div className="relative h-64 bg-gray-100">
                <img
                  src={item.node.media.nodes[0].previewImage?.url}
                  alt="img"
                  className="w-full h-full object-contain transition-opacity duration-300"
                />
              </div>
            )}{" "}
            <div className="p-4">
              <h3 className="font-semibold text-lg">{item.node.title}</h3>
              <div className="flex justify-between items-center mt-2">
                {/* <span className="text-gray-700">Color: {tee.color}</span> */}

                <span className="font-bold text-xl">
                  {/* ${tee.price.toFixed(2)} */}
                  {formatPrice(
                    item.node.priceRange.maxVariantPrice.amount,
                    item.node.priceRange.maxVariantPrice.currencyCode
                  )}
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default AllProducts;
