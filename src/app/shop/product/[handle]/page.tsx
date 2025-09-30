"use client";
import { FaWhatsapp } from "react-icons/fa";

import React, { FC, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { GET_PRODUCT_BY_HANDLE_QUERY } from "@/graphql/products";
import { useStorefrontQuery } from "@/hooks/useStorefront";
import {
  GetProductByHandleQuery,
  ImageEdge,
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
import { toast } from "sonner";

const Product = () => {
  const params = useParams();
  const { cart, addItem, initializeCart } = useCartActions();
  const [isOpen, setIsOpen] = useState(false);
  // States
  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, string>
  >({});
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>();

  const handleSelectOptions = (options: Record<string, string>) => {
    setSelectedOptions(options);
    const totalOptions = data?.product?.options?.length ?? 0;
    const hasAllSelections =
      Object.keys(options).length === totalOptions && totalOptions > 0;
    if (!hasAllSelections) {
      setSelectedVariant(undefined);
      return;
    }
    const variant = data?.product?.variants?.edges.find((variant) => {
      return variant.node.selectedOptions.every(
        (opt) => options[opt.name] === opt.value
      );
    });
    setSelectedVariant(variant?.node as ProductVariant);
  };

  const { data, isLoading } = useStorefrontQuery<GetProductByHandleQuery>(
    ["product", params.handle],
    {
      query: GET_PRODUCT_BY_HANDLE_QUERY,
      variables: { handle: params.handle },
    }
  );
  useEffect(() => {
    if (!cart?.checkoutUrl) initializeCart();
  }, [cart?.checkoutUrl, initializeCart]);
  console.log(data);
  if (isLoading)
    return (
      <div className="my-10 grid grid-cols-2 md:grid-cols-3 gap-4">
        <Skeleton className="h-[300px] col-span-2 w-full" />
        <Skeleton className="h-[300px] w-full" />
      </div>
    );

  const handleAddtoCart = async () => {
    const totalOptions = data?.product?.options?.length ?? 0;
    const hasAllSelections =
      Object.keys(selectedOptions).length === totalOptions && totalOptions > 0;
    if (!hasAllSelections || !selectedVariant) {
      toast.error("Please select both color and size before adding to cart.");
      return;
    }
    await addItem(selectedVariant.id, 1);
    toast.success("Added to cart");
  };
  const Accordions = [
    {
      title: "Shipping",
      content: `
        <h4>Delivery Policy</h4>
        <p>Currently we are doing only Interstate deliveries within <b>3 to 5 working days</b>. Once your order is confirmed, it will be processed and shipped promptly. You will receive a tracking number as soon as your parcel is dispatched.</p>
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
   God knows why you want to return a piece of MAMA BOBS quality apparel. But if you do, any item can be returned within 30 days of purchase
  </p> 

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
            options={
              data?.product?.options as NonNullable<
                GetProductByHandleQuery["product"]
              >["options"]
            }
          />
          <ProductPrice
            priceRange={data?.product?.priceRange as ProductPriceRange}
          />
          <Button onClick={handleAddtoCart}>Add to Cart</Button>
          <SizeChartPopup />
        </div>
        {Accordions.map((item, index) => (
          <Accordion key={index} title={item.title} content={item.content} />
        ))}
        <a
          href="https://wa.me/61467395529"
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
