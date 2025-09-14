"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useCartActions } from "@/lib/atoms/cart";

type Money = { amount: string; currencyCode: string };

type CartLineNode = {
  id: string;
  quantity: number;
  merchandise: {
    title: string; // variant title
    image?: { url: string } | null;
    product?: {
      title: string;
      images?: { edges: { node: { url: string } }[] } | null;
    } | null;
  };
  cost?: {
    totalAmount?: Money;
    amountPerQuantity?: Money;
  };
};

type CartLineEdge = { node: CartLineNode };

type CartSidebarProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function CartSidebar({ open, onOpenChange }: CartSidebarProps) {
  const { cart } = useCartActions();

  const items = (cart?.lines?.edges ?? []) as CartLineEdge[];
  const checkoutUrl = cart?.checkoutUrl || "/";

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-md p-0 flex flex-col"
      >
        <SheetHeader className="px-6 py-4">
          <SheetTitle>Cart</SheetTitle>
        </SheetHeader>

        <Separator />

        <div className="flex-1 min-h-0">
          {items.length === 0 ? (
            <div className="h-full grid place-items-center p-8 text-center text-sm text-muted-foreground">
              Your cart is empty. Time to fix that.
            </div>
          ) : (
            <ScrollArea className="h-full px-6 py-4">
              <ul className="space-y-4">
                {items.map(({ node }) => {
                  const { merchandise } = node;

                  const productTitle =
                    merchandise?.product?.title ?? merchandise?.title ?? "Item";

                  const variantTitle =
                    merchandise?.title && merchandise.title !== "Default Title"
                      ? merchandise.title
                      : null;

                  const img =
                    merchandise?.image?.url ??
                    merchandise?.product?.images?.edges?.[0]?.node?.url ??
                    undefined;

                  const price =
                    node.cost?.totalAmount?.amount ??
                    node.cost?.amountPerQuantity?.amount ??
                    "—";

                  const currency =
                    node.cost?.totalAmount?.currencyCode ??
                    node.cost?.amountPerQuantity?.currencyCode ??
                    "";

                  return (
                    <li key={node.id} className="flex gap-3">
                      <div className="h-20 w-20 overflow-hidden rounded-lg bg-muted flex-shrink-0">
                        {img ? (
                          <Image
                            src={img}
                            alt={productTitle}
                            width={80}
                            height={80}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="h-full w-full grid place-items-center text-xs text-muted-foreground">
                            No image
                          </div>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium leading-tight line-clamp-2">
                          {productTitle}
                        </div>
                        {variantTitle && (
                          <div className="text-xs text-muted-foreground">
                            {variantTitle}
                          </div>
                        )}
                        <div className="mt-1 text-sm">Qty: {node.quantity}</div>
                        <div className="mt-1 text-sm font-semibold">
                          {currency} {price}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </ScrollArea>
          )}
        </div>

        <Separator />

        <SheetFooter className="px-6 py-4">
          <div className="w-full space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Items</span>
              <span className="font-medium">{items.length}</span>
            </div>
            <div className="flex gap-2">
              <SheetClose asChild>
                <Button variant="outline" className="flex-1">
                  Continue shopping
                </Button>
              </SheetClose>
              <Link href={checkoutUrl} className="flex-1">
                <Button className="w-full">Go to checkout</Button>
              </Link>
            </div>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
