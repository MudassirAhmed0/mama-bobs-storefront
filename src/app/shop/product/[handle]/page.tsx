"use client";
import { FaWhatsapp } from "react-icons/fa";

import React, { FC, useState } from "react";
import { useParams } from "next/navigation";
import { GET_PRODUCT_BY_HANDLE_QUERY } from "@/graphql/products";
import { useStorefrontQuery } from "@/hooks/useStorefront";
import {
  GetProductByHandleQuery,
  ImageEdge,
  ProductOption,
  ProductPriceRange,
  ProductVariant,
} from "@/types/shopify-graphql";
import ProductCarousel from "@/components/view/ProductCarousel";
import { Skeleton } from "@/components/ui/skeleton";
import ProductPrice from "@/components/view/ProductCard/ProductPrice";
import { Button } from "@/components/ui/button";
import ProductOptions from "@/components/view/ProductOptions";
import { useCartActions } from "@/lib/atoms/cart";
import Accordion from "./Accordion";
import SizeChartPopup from "./SizeChartPopup";

const Product = () => {
  const params = useParams();
  const { addItem } = useCartActions();
  const [isOpen, setIsOpen] = useState(false);
  // States
  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, string>
  >({});
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>();

  const handleSelectOptions = (options: Record<string, string>) => {
    const variant = data?.product?.variants?.edges.find((variant) => {
      return Object.keys(options).every((key) => {
        return variant.node.selectedOptions.some(
          (option) => option.name === key && option.value === options[key]
        );
      });
    });
    setSelectedVariant(variant?.node as ProductVariant);
    setSelectedOptions(options);
  };

  const { data, isLoading } = useStorefrontQuery<GetProductByHandleQuery>(
    ["product", params.handle],
    {
      query: GET_PRODUCT_BY_HANDLE_QUERY,
      variables: { handle: params.handle },
    }
  );
  console.log(data);
  if (isLoading)
    return (
      <div className="my-10 grid grid-cols-2 md:grid-cols-3 gap-4">
        <Skeleton className="h-[300px] col-span-2 w-full" />
        <Skeleton className="h-[300px] w-full" />
      </div>
    );

  const handleAddtoCart = () => {
    if (selectedVariant) {
      addItem(selectedVariant.id, 1);
    }
  };
  const Accordions = [
    {
      title: "Shipping",
      content: `
        <h4>Delivery Policy</h4>
        <p>We offer delivery all across Pakistan within <b>3 to 5 working days</b>. Once your order is confirmed, it will be processed and shipped promptly. You will receive a tracking number as soon as your parcel is dispatched.</p>
        <h4>Note</h4>
        <p>Delivery times may vary slightly due to weather or public holidays.</p>
        <p>Thank you for shopping with us!</p>
      `,
    },
    {
      title: "Returns",
      content: `
  <h4>Return & Refund Policy</h4>
  <p>
    You can return the product within <strong>7 days</strong> of delivery. A full refund will be provided after we receive the item, as long as:
  </p>
  <ul>
    <li>The item should unused, <strong>undamaged</strong>, and in its <strong>original condition</strong>.</li>
  </ul>
  <p>
    To initiate a return, please <strong>contact us before sending the item back</strong>.
  </p>
  <p>Thank you for understanding!</p>

      `,
    },
  ];
  return (
    <div className="flex items-start flex-wrap justify-between">
      <ProductCarousel images={data?.product?.images?.edges as ImageEdge[]} />
      <div className="flex flex-col gap-y-8 w-full lg:w-[40%]">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-2xl font-bold">{data?.product?.title}</h1>
          <p className="text-sm text-gray-500">{data?.product?.description}</p>
          <ProductOptions
            selectedOptions={selectedOptions}
            setSelectedOptions={handleSelectOptions}
            options={data?.product?.options as ProductOption[]}
          />
          <ProductPrice
            priceRange={data?.product?.priceRange as ProductPriceRange}
          />
          <Button disabled={!selectedVariant} onClick={handleAddtoCart}>
            Add to Cart
          </Button>
          <SizeChartPopup />
        </div>
        {Accordions.map((item, index) => (
          <Accordion key={index} title={item.title} content={item.content} />
        ))}
        <a
          href="https://www.whatsapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-[#1ebe5c] transition-colors duration-300"
        >
          <FaWhatsapp size={24} />
          Order on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Product;
