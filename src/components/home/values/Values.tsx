import React from "react";
import { BookOpen, HeartHandshake, Landmark, Star, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type BrandValue = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const brandValues: BrandValue[] = [
  {
    title: "Authenticity",
    description:
      "We cherish genuine stories that reflect real emotions and experiences.",
    icon: <BookOpen className="w-6 h-6" />,
  },
  {
    title: "Compassion",
    description:
      "Every tale is shared with kindness, fostering empathy and connection.",
    icon: <HeartHandshake className="w-6 h-6" />,
  },
  {
    title: "Legacy",
    description: "We believe in preserving and passing down timeless wisdom.",
    icon: <Landmark className="w-6 h-6" />,
  },
  {
    title: "Inspiration",
    description: "Our stories uplift, motivate, and leave a lasting impact.",
    icon: <Star className="w-6 h-6" />,
  },
  {
    title: "Community",
    description:
      "We create a space where stories unite people across generations.",
    icon: <Users className="w-6 h-6" />,
  },
];

export default function Values() {
  return (
    <section className="relative text-white pb-[120px]">
      <div className="absolute top-[15%] left-0 w-full overflow-hidden opacity-1 z-[2] h-full  ">
        <div className="animate-marquee whitespace-nowrap text-[50vh] font-bold text-white/20 absolute">
          100% Cotton • 100% Natural • 100% Quality • 100% Comfort • 100% Cotton
          • 100% Natural • 100% Quality • 100% Comfort • 100% Cotton • 100%
          Natural • 100% Quality • 100% Comfort • 100% Cotton • 100% Natural •
          100% Quality • 100% Comfort • 100% Cotton • 100% Natural • 100%
          Quality • 100% Comfort • 100% Cotton • 100% Natural • 100% Quality •
          100% Comfort • 100% Cotton • 100% Natural • 100% Quality • 100%
          Comfort • 100% Cotton • 100% Natural • 100% Quality • 100% Comfort •
          100% Cotton • 100% Natural • 100% Quality • 100% Comfort • 100% Cotton
          • 100% Natural • 100% Quality • 100% Comfort • 100% Cotton • 100%
          Natural • 100% Quality • 100% Comfort • 100% Cotton • 100% Natural •
          100% Quality • 100% Comfort • 100% Cotton • 100% Natural • 100%
          Quality • 100% Comfort • 100% Cotton • 100% Natural • 100% Quality •
          100% Comfort • 100% Cotton • 100% Natural • 100% Quality • 100%
          Comfort • 100% Cotton • 100% Natural • 100% Quality • 100% Comfort •
        </div>
      </div>
      {/* option 1 */}
      {/* <div className="absolute top-0 left-0 w-full h-full ">
        <Image src="/images/icons/logo.png" alt="logo" fill  className="object-contain opacity-50  p-5"/>
      </div> */}
      {/* option 2 */}
      <div className="absolute top-[-1vw] right-[2vw]   size-[18vw] hidden lg:block ">
        <Image
          src="/images/icons/logo.png"
          alt="logo"
          fill
          className="object-contain    p-5"
        />
      </div>
      <div className="max-w-8xl mx-auto container py-16 relative z-[2]">
        <div>
          <div className="flex items-left flex-col px-4">
            <div data-aos="fade-up">
              <h2 className="text-2xl lg:text-[2.7vw]  font-extrabold text-left leading-[1.5] lg:w-[85%]  pt-4">
                WHAT WE STAND FOR IS ALL ABOUT FAMILY AND THAT"S WHAT MAMA BOB"S
                IS ALL ABOUT
              </h2>
            </div>
            <p
              data-aos="fade-up"
              className="text-md text-left mt-6  leading-normal lg:w-[85%] Capitalize "
            >
              THE RIGHT TO BE WHO YOU ARE! TO SAY WHAT YOU FEEL! BELIEVE WHAT
              YOU WANT TO BELIEVE! AND GIGGLE AT ABSOLUTELY ANYTHING THAT
              TICKLES YOUR FANCY
            </p>
          </div>
          <div className="mt-20 flex gap-12 flex-wrap justify-between px-4">
            {brandValues.map((brandValue, index) => (
              <div
                data-aos="fade"
                data-aos-delay={`${index * 100}`}
                key={index}
                className="flex sm:w-full md:w-5/12 items-start gap-4"
              >
                <div>{brandValue.icon}</div>
                <div className="w-10/12">
                  <Link href="/">
                    <h4 className="text-2xl font-bold leading-tight">
                      {brandValue.title}
                    </h4>
                  </Link>
                  <p className="text-base  leading-normal pt-2">
                    {brandValue.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="size-full absolute inset-0">
        <span className="bg-black bg-opacity-[0.7] size-full absolute inset-0"></span>
        <img
          className="size-full absolute inset-0 object-cover z-[-1]"
          src="/images/home/values/bg.svg"
          alt="Group-1"
        />
      </div>
    </section>
  );
}
