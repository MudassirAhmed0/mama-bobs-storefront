import Link from "next/link";
import { NewsLetterBox } from "../common/NewsLetterBox";
import Image from "next/image";
import LogoBackground from "../common/LogoBackground";

const Memroboblia = ({ classes, containerClasses }) => {
  return (
    <section className={`min-h-[100vh] relative ${classes} py-10 z-[2]`}>
      <div className="absolute top-0 left-0 w-full h-full bg-black/50">
        <Image
          src={"/images/contact-us/collage.png"}
          alt="contact-us"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div
        className={`myContainer z-[2] relative flex flex-col gap-y-4 justify-center items-center ${containerClasses}`}
      >
        <Link
          href={"/"}
          aria-label="Home. logo"
          role="img"
          className="relative block lg:min-h-[13.8vh] lg:min-w-[13.8vh] lg:size-[20vw] sm:size-[250px] size-[180px] brightness-150"
        >
          <Image fill src="/images/icons/marquee-logo-1.png" alt="logo" />
        </Link>
        <div className="lg:size-[10vw] sm:size-[125px] size-[90px] text-white">
          <svg
            className="size-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx={12} cy={12} r={4} />
            <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
          </svg>
        </div>
      </div>
    </section>
  );
};

const ContactFirstSection = () => {
  return (
    <Memroboblia
      classes={"flex lg:justify-end lg:items-end justify-center items-center"}
    >
      {/* <div className="flex flex-col justify-center items-start gap-6 relative z-[2]">
          <p className="font-semibold text-xl text-black">Our Store</p>
          <Link href={"/"} target="_blank" className=" text-gray-500">
            54709 Willms Station <br /> Suite 350, Washington, USA
          </Link>
          <div className="flex flex-col">
            <Link href={"tel:(415) 555-0132"} className=" text-gray-500">
              Tel: (415) 555-0132
            </Link>
            <Link href={"mailto:admin@mamabobs.com"} className=" text-gray-500">
              Email: admin@mamabobs.com
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-xl text-black">
              Careers at Mama Bobs
            </p>
            <p className=" text-gray-500">
              Learn more about our teams and job openings.
            </p>
          </div>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div> */}
    </Memroboblia>
  );
};

const ContactUsSecondSection = () => {
  return (
    <section className="relative py-[45px] lg:py-[10vw] lg:min-h-[70vh] min-h-[50vh] bg-black flex flex-col items-center">
      <LogoBackground />

      <div className="myContainer flex justify-between lg:flex-row flex-col gap-[45px] lg:gap-0">
        <div className="  relative z-[2] lg:w-[65%]  p-[20px] lg:p-[2vw]">
          <div className="flex flex-col justify-center items-start gap-6 relative h-full  ">
            <p className="font-semibold lg:text-[2.5vw] text-[26px] leading-[1.7] text-white  ">
              GIVE US YOUR IDEAS, INSPIRATIONS, STORY'S, QUOTES, JOKE'S AND
              DREAM'S AND THE CREME DE LA CREME WILL BE IN PRINT BEFORE YOU CAN
              SAY "MAMA BOB'S"!!
            </p>
          </div>
        </div>
        <div className="  relative z-[2] lg:w-[30vw] p-[20px] lg:p-[2vw] ">
          <div className="flex flex-col justify-center items-start gap-6 relative">
            <p className="font-semibold text-xl text-white">Contact Us</p>

            <div className="flex flex-col">
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
                PO Box which is- PO Box 3149 283 west
                street,Umina Beach NSW 2257
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactLastSection = () => {
  return (
    <Memroboblia
      classes={"flex justify-center items-center"}
      containerClasses={"flex-col-reverse"}
    >
      {/* <div className="flex flex-col justify-center items-start gap-6 relative z-[2]">
        <p className="font-semibold lg:text-[3vw] text-[26px] leading-[1.8] text-black text-center ">GIVE US YOUR IDEAS, INSPIRATIONS, STORY'S, QUOTES, JOKE'S AND DREAM'S AND THE CREME DE LA CREME IN PRINT BEFORE YOU CAN SAY "MAMA BOB'S"!!</p>
        
      </div> */}
    </Memroboblia>
  );
};

const ContactUsPage = () => {
  return (
    <>
      <ContactFirstSection />
      <ContactUsSecondSection />
      <ContactLastSection />
      {/* <div className="py-20 my-20 border-b border-gray-400 myContainer">
      <div className="lg:my-10 my-10 sm:mt-32 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px] rounded-lg shadow-lg"
          src="/images/contact-us/banner.png"
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <Link href={"/"} target="_blank" className=" text-gray-500">
            54709 Willms Station <br /> Suite 350, Washington, USA
          </Link>
          <div className="flex flex-col">
            <Link href={"tel:(415) 555-0132"} className=" text-gray-500">
              Tel: (415) 555-0132
            </Link>
            <Link href={"mailto:admin@mamabobs.com"} className=" text-gray-500">
              Email: admin@mamabobs.com
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-xl text-gray-600">
              Careers at Mama Bobs
            </p>
            <p className=" text-gray-500">
              Learn more about our teams and job openings.
            </p>
          </div>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>

      <NewsLetterBox />
    </div> */}
    </>
  );
};

export default ContactUsPage;
