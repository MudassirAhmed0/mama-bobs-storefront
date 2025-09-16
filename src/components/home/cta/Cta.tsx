import LogoBackground from "@/components/common/LogoBackground";
import Link from "next/link";
import React from "react";

const Cta = () => {
  return (
    <div data-aos="fade" className="myContainer md:my-12 my-9">
      <div className="relative flex flex-row justify-between items-center bg-black sm:rounded-r-full p-5 pr-0">
        <LogoBackground />

        <div className="flex-col flex justify-start items-start relative z-[2] w-full lg:w-[70%]">
          <div>
            <p className="text-3xl lg:text-4xl uppercase font-semibold leading-9 lg:leading-10 text-white">
              GIVE US YOUR IDEAS, INSPIRATIONS, STORY'S, QUOTES, JOKE'S AND
              DREAM'S AND THE CREME DE LA CREME WILL BE IN PRINT BEFORE YOU CAN
              SAY "MAMA BOB'S"!!
            </p>
            <div className="flex flex-col mt-3">
              <Link href={"tel:(415) 555-0132"} className=" text-white">
                Tel: (415) 555-0132
              </Link>
              <Link href={"mailto:admin@mamabobs.com"} className=" text-white">
                Email: admin@mamabobs.com
              </Link>
              <Link
                href="https://maps.google.com/?q=P.O.+Box+1234,+New+York,+NY"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                P.O. Box 1234, New York, NY
              </Link>
            </div>
          </div>
          {/* <div className="mt-12 md:mt-20 lg:mt-16">
            <button className="hover:text-black hover:bg-gray-200 focus:outline-none rounded-sm transition duration-150 absolute bottom-6 sm:static w-72 text-base lg:text-xl font-medium leading-4 lg:leading-5 text-center text-gray-900 sm:w-44 h-12 bg-white flex justify-center items-center pb-1">
              Join Now
            </button>
          </div> */}
        </div>

        <div className="hidden lg:block">
          <img
            className="hidden lg:block relative z-1"
            src="https://i.ibb.co/mN8VbTN/Photo.png"
            alt="girl"
          />
          <img
            className="hidden sm:block lg:hidden  relative z-1"
            src="https://i.ibb.co/N67j4xn/Photo-1.png"
            alt="girl"
          />
          <img
            className="sm:hidden  relative z-1"
            src="https://i.ibb.co/PwV4J0Z/Photo-3.png"
            alt="girl"
          />
        </div>
      </div>
    </div>
  );
};

export default Cta;
