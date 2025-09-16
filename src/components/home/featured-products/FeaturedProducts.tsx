import Link from "next/link";
import React from "react";
type Props = {
  fromHome?: any;
};
const FeaturedProducts = ({ fromHome }: Props) => {
  return (
    <div className="2xl:mx-auto 2xl:container">
      <div
        className={`lg:px-20 md:px-6 px-4 md:py-12 py-8 ${
          fromHome ? "lg:py-[6.25vw]" : "lg:pt-0"
        }`}
      >
        <h1
          data-aos="fade-up"
          className="lg:text-[3.5rem] text-3xl font-semibold text-black text-center"
        >
          Quality Apparel with an Attitude
        </h1>
        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 lg:mt-16 md:mt-12 mt-8 items-center">
            <Link href={"/shop"}>
              <div
                data-aos="fade-up"
                className="relative flex flex-col group overflow-hidden"
              >
                <img
                  src="/images/home/featured-products/1.jpg"
                  alt="two girls"
                  className="w-full group-hover:scale-[1.04] transition-all duration-500"
                />
                <span className="absolute inset-0 size-full bg-gradient-to-t from-black to-transparent"></span>
                <div className="absolute m-6 bottom-0 z-30">
                  {/* <p className="text-sm leading-none text-white">
                    Special collection
                  </p> */}
                  <h1 className=" text-2xl font-semibold leading-8 mt-2 text-white">
                    UBBERFELTCHER SERIES
                  </h1>
                  <p className="mt-4 text-base font-medium cursor-pointer leading-4 underline text-white">
                    Discover
                  </p>
                </div>
              </div>
            </Link>

            <Link href={"/shop"}>
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="relative flex flex-col group overflow-hidden"
              >
                <img
                  src="/images/home/featured-products/2.jpg"
                  alt="black guy"
                  className="w-full group-hover:scale-[1.04] transition-all duration-500"
                />
                <span className="absolute inset-0 size-full bg-gradient-to-t from-black to-transparent"></span>
                <div className="absolute m-6 bottom-0 z-30">
                  {/* <p className="text-sm leading-none text-white">
                    Special collection
                  </p> */}
                  <h1 className=" text-2xl font-semibold leading-8 mt-2 text-white">
                    SIGNATURE TEES
                  </h1>
                  <p className="mt-4 text-base font-medium cursor-pointer leading-4 underline text-white">
                    Discover
                  </p>
                </div>
              </div>
            </Link>

            <Link href={"/shop"}>
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="relative flex flex-col group overflow-hidden"
              >
                <img
                  src="/images/home/featured-products/3.png"
                  alt="black guy"
                  className="w-full group-hover:scale-[1.04] transition-all duration-500"
                />
                <span className="absolute inset-0 size-full bg-gradient-to-t from-black to-transparent"></span>
                <div className="absolute m-6 bottom-0 z-30">
                  {/* <p className="text-sm leading-none text-white">
                    Special collection
                  </p> */}
                  <h1 className=" text-2xl font-semibold leading-8 mt-2 text-white uppercase">
                    The world according to mama bobs!!
                  </h1>
                  <p className="mt-4 text-base font-medium cursor-pointer leading-4 underline text-white">
                    Discover
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
