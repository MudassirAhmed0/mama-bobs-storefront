"use client";

import React from "react";
import Logo from "../Logo";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useCartActions } from "@/lib/atoms/cart";
import CartSidebar from "../cart/CartSidebar";

const Navbar = () => {
  const { cart, initializeCart } = useCartActions();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (!cart?.checkoutUrl) initializeCart();
  }, [cart?.checkoutUrl, initializeCart]);

  const count = cart?.lines?.edges?.length ?? 0;

  return (
    <div>
      <div className="flex items-center justify-between container mx-auto py-6">
        <Logo />

        <nav className="flex items-center gap-x-4">
          <Link
            className="text-sm font-medium transition-all hover:underline"
            href="/collections/men"
          >
            Men
          </Link>
          <Link
            className="text-sm font-medium transition-all hover:underline"
            href="/collections/women"
          >
            Women
          </Link>
        </nav>

        <div className="flex items-center gap-x-2">
          <div className="relative">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setOpen(true)}
              aria-label="Open cart"
            >
              <ShoppingCart />
            </Button>
            {count > 0 && (
              <Badge variant="default" className="absolute -top-2 right-0">
                {count}
              </Badge>
            )}
          </div>

          <Link href="/auth">
            <Button size="sm">Login</Button>
          </Link>
        </div>

        {/* Cart Sidebar */}
      </div>
      <CartSidebar open={open} onOpenChange={setOpen} />
    </div>
  );
};

export default Navbar;
