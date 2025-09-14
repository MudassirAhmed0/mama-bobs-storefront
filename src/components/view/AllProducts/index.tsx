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
      <div className="grid grid-cols-2 gap-6 w-full my-10">
        <Skeleton className="h-[300px] w-full" />
        <Skeleton className="h-[300px] w-full" />
        <Skeleton className="h-[300px] w-full" />
        <Skeleton className="h-[300px] w-full" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-6 w-full my-10">
      {data?.products?.edges.map(item=>{
        return<Link href={"/product/"+item.node.handle}>
          <span>{item.node.title}</span>
         {item.node.media.nodes.length > 0 && <img src={item.node.media.nodes[0].previewImage?.url} alt="img"/>}          </Link>
      })}
    </div>
  );
};

export default AllProducts;
