import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Instagram, Facebook, Twitter, Music2, Youtube } from "lucide-react";
const navLinks = [
  {
    title: "Quick Links",
    links: [
      {
        title: "Feature Products",
        link: "/shop",
      },
      {
        title: "Top 20",
        link: "/design-your-tee",
        anchor: true,
      },
      {
        title: "WHAT THE FAQ",
        link: "/faqs",
      },
      {
        title: "About Us",
        link: "/about-us",
      },
      {
        title: "Contact Us",
        link: "/contact-us",
      },
    ],
  },
  {
    title: "Policies",
    links: [
      {
        link: "/",
        title: "Shipping Policy",
      },
      {
        link: "/",
        title: "refund policies",
      },
      {
        link: "/",
        title: "Cookie policy",
      },
      {
        link: "",
        title: "Privacy policy",
      },
      {
        link: "/",

        title: "terms & conditions",
      },
    ],
  },
];
const socialLinks = [
  {
    name: "Instagram",
    icon: <Instagram className="w-6 h-6" />,
    url: "https://www.instagram.com",
  },
  {
    name: "Facebook",
    icon: <Facebook className="w-6 h-6" />,
    url: "https://www.facebook.com",
  },
  {
    name: "Twitter",
    icon: <Twitter className="w-6 h-6" />,
    url: "https://www.twitter.com",
  },
  {
    name: "TikTok",
    icon: <Music2 className="w-6 h-6" />, // Lucide doesn’t have TikTok, Music2 works as placeholder
    url: "https://www.tiktok.com",
  },
  {
    name: "YouTube",
    icon: <Youtube className="w-6 h-6" />,
    url: "https://www.youtube.com",
  },
];
const paymentGateways = [
  {
    name: "PayPal",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
    url: "https://www.paypal.com/",
  },
  {
    name: "UnionPay",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/UnionPay_logo.svg",
    url: "https://www.unionpayintl.com/",
  },
  {
    name: "Visa",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg",
    url: "https://www.visa.com/",
  },
];
interface prop {
  footerSecondLogo: boolean;
}
const Footer = ({ footerSecondLogo }: prop) => {
  return (
    <footer className="bg-[#1D1D1D] text-white relative">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {footerSecondLogo ? (
          <Image
            src="/images/icons/marquee-logo-2.png"
            alt="logo"
            fill
            className="object-contain opacity-50  p-5"
          />
        ) : (
          <Image
            src="/images/icons/logo.png"
            alt="logo"
            fill
            className="object-contain opacity-50  p-5"
          />
        )}
      </div>
      <div className="relative z-[2]">
        <div className="myContainer lg:pb-vw57 py-10">
          <div className="flex justify-between flex-wrap capitalize lg:gap-0 gap-6">
            {navLinks.map((navLink, index) => (
              <div
                key={index}
                className="lg:w-[24%] w-[45%] flex flex-col lg:gap-y-vw20 gap-y-3 lg:text14 mtext14 font-inter"
              >
                <span className="font-bold lg:text22 mtext18">
                  {navLink.title}
                </span>
                <ul className="flex flex-col lg:gap-y-vw12 gap-y-3">
                  {navLink.links.map((link, ind) => (
                    <li key={ind} className="opacity_Hover">
                      <Link href={`${link.link}`}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="lg:w-[24%] w-full flex flex-col lg:gap-y-vw20 gap-y-3 lg:text14 mtext14 font-inter">
              <span className="font-bold lg:text22 mtext18">Working hours</span>
              <ul className="flex flex-col lg:gap-y-vw12 gap-y-3">
                <li>M - F / 9AM - 4PM</li>
                <li>Sat. / Appointment Only</li>
                <li>
                  <Link href={"tel:+61467395529"} className=" text-white">
                    Tel: +61467395529
                  </Link>
                </li>
                <li className="opacity_Hover">
                  <Link
                    href="https://www.google.com/maps/place/283+West+St,+Umina+Beach+NSW+2257"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    PO Box 3149 283 west street,Umina Beach NSW 2257
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:w-[24%] w-full flex flex-col lg:gap-y-vw20 gap-y-3 lg:text14 mtext14 font-inter">
              <div className="flex flex-col lg:gap-y-vw12 gap-y-3">
                <div className="flex items-center gap-2 bg-white py-3 px-3 rounded-lg overflow-hidden">
                  <span className="text-gray-400">
                    <Mail className="size-5 lg:size-vw20" />
                  </span>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full focus:outline-none text-black"
                  />
                  <button className="text-black font-medium">Subscribe</button>
                </div>
              </div>
              <ul className="flex lg:gap-x-vw16 gap-x-4">
                {socialLinks.map((item, index) => (
                  <li key={index} className="opacity_Hover">
                    <Link
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      {item.icon}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap sm:justify-center lg:justify-normal items-center lg:pt-vw20 lg:pb-vw27 pt-6 pb-8 lg:gap-x-[32.5vw] gap-4 lg:px-vw62 myContainer lg:w-full border-[#454A49] border-t text-white lg:text16 lg:leading-vw28 mtext14 font-inter">
          <div className="flex justify-center gap-4 flex-wrap py-4">
            {paymentGateways.map((gateway) => (
              <a
                key={gateway.name}
                href={gateway.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-md shadow p-2 flex items-center justify-center"
              >
                <Image
                  src={gateway.logo}
                  alt={gateway.name}
                  width={50}
                  height={30}
                  className="object-contain"
                  unoptimized
                />
              </a>
            ))}
          </div>
          <span>© Copyright 2025. MAMA BOBS. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
