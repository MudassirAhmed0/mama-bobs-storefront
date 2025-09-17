"use client";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/utils/products";
import LogoMarquee from "../common/LogoMarquee";
import FeaturedProducts from "../home/featured-products/FeaturedProducts";
export default function ShopPage() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <>
    <div className="lg:pt-[11.4583333333vw] sm:pt-[120px] pt-[75px]">
      <LogoMarquee/>

    </div>
    <FeaturedProducts/>
    {/* <section className="min-h-screen bg-white text-black lg:pb-[11.4583333333vw] sm:pb-[120px] pb-[75px] myContainer">
      <div className="flex justify-between items-center border-b border-gray-700 pb-4">
        <h1 className="text-2xl font-bold">Minimalist Shop</h1>
        <Link
          href={"/cart"}
          className="flex items-center gap-2 border border-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
        >
          <ShoppingCart size={20} /> Cart ({cart.length})
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-700 p-4 rounded-xl transition transform hover:scale-105 hover:shadow-lg"
          >
            <Link
              href={`/shop/product/${product.id}`}
              className="w-full aspect-square rounded-lg relative overflow-hidden block"
            >
              <Image
                unoptimized
                fill
                src={product.image}
                alt={product.name}
                className="object-cover rounded-lg"
              />
            </Link>
            <Link href={`/shop/product/${product.id}`}>
              <h2 className="text-xl mt-4 font-semibold">{product.name}</h2>
              <p className="text-gray-600">{product.price}</p>
            </Link>
            <button
              className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section> */}
    </>
  );
}
