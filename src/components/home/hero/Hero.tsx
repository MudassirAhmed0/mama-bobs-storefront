import Image from "next/image";
import React from "react";
function Hero() {
  return (
    <div className="pb-32 lg:pb-12 overflow-y-hidden min-h-[100vh] flex items-end justify-center relative">
      <div className="size-full absolute inset-0 ">
        <Image src="/images/contact-us/collage.png" alt="hero" fill className="object-cover" />
        <span className="bg-black size-full absolute bg-[#000000] opacity-20"></span>
        {/* <span className="bg-gradient-to-b from-foreground to-background size-full absolute bottom-0 h-[50%] mix-blend-darken -scale-y-100"></span>
        <span className="bg-black size-full absolute inset-0 mix-blend-color"></span> */}
        {/* <video
          muted
          loop
          autoPlay
          playsInline
          className="size-full absolute inset-0 object-cover z-[-1]"
          preload="auto"
          loading="lazy"
          src="/videos/home-hero.mp4"
        ></video> */}
      </div>
      <div className="relative z-[2]">
        <div className="container mx-auto flex flex-col items-center py-12 sm:py-[16.6666666667vh]">
          <div className="w-11/12 lg:w-2/3 lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-4xl md:text-6xl xl:text-[6rem] text-center text-white font-black sm:leading-tight mb-5  "
            >
              Explode Woke!! <br/> <span style={{textShadow: "2px 2px #fff8f8"}} className="text-[#a16207]">w' Mama Bob's!</span>
            </h1>
            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-3xl sm:text-2xl md:text-4xl xl:text-[4.2rem] text-center text-white font-bold xl:leading-[1.2]"
            >
              Bringing Good {""}
              <span  style={{textShadow: "2px 2px #fff8f8"}} className="text-[#a16207]">Old-Fashioned</span>
              {""} Bad Taste Back to the Masses!
            </h2>
          </div>
          {/* <div data-aos="fade" className="flex justify-center items-center">
            <button className="bg-[#a16207] transition duration-150 ease-in-out hover:bg-[#ca8a04] lg:text-xl lg:font-bold rounded text-white px-4 sm:px-10 py-2 sm:py-4 text-sm">
              Explore Collection
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
