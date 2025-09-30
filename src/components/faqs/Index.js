"use client";
import React, { useEffect, useRef, useState } from "react";
import Faq from "./Faq";
import LogoBackground from "../common/LogoBackground";

const FaqsPage = () => {
  const faqs = [
    {
      question: "Do we offer international shipping?",
      answer: "Yes, on orders of 3 items or more",
    },
    {
      question: "Can I track my order?",
      answer:
        "Yes, you will receive a tracking link, once your order is shipped",
    },
    {
      question: "What payment methods do you accept?",
      answer: "List of all payment: Credit / Debit Card Master & Visa",
    },
    {
      question: "Can I contact customer support?",
      answer:
        "Absolutely. Tel: +61467395529 Email: admin@mamabobs.com",
    },
    
    {
      question: "Can I change or cancel my order?",
      answer: "Absolutely. You Can just contact us. Tel: +61467395529 Email: admin@mamabobs.com",
    },
    {
      question: "How long does delivery take?",
      answer:
        "will find out for sure when we know which courier we are going to use.",
    },
    {
      question: " Do you have a loyalty program?",
      answer:
        " If you show your loyalty to the MAMA BOBS movement by sending us a photo of you wearing MAMA BOBS any photo that we use , you will receive 20% off on your next order. The stranger the place the larger the discount! ( THE GAUNTLET HAS BEEN THROWN DOWN!!)",
    },

    {
      question: "What is our return policy?",
      answer:
        "God knows why you want to return a piece of MAMA BOBS quality apparel. But if you do, any item can be returned within 30 days of purchase.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(0);
  const contentRefs = useRef([]);
  const [heights, setHeights] = useState({});

  // Function to calculate heights of all FAQ content
  const calculateHeights = () => {
    const newHeights = {};
    contentRefs.current.forEach((el, index) => {
      if (el) {
        // Add extra padding to ensure full visibility
        newHeights[index] = el.scrollHeight + 10;
      }
    });
    setHeights(newHeights);
  };

  // Calculate heights on component mount
  useEffect(() => {
    calculateHeights();

    // Recalculate when window is resized
    window.addEventListener("resize", calculateHeights);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", calculateHeights);
    };
  }, []);

  // Recalculate heights when open index changes
  useEffect(() => {
    calculateHeights();
  }, [openIndex]);

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="lg:mt-[10.4583333333vw] lg:pt-20 mt-40 sm:mt-[240px] lg:pb-24 pb-24 bg-black border-b border-white">
      <LogoBackground />
      <div className="myContainer lg:w-2/4">
        <h2 className="text60 text-white text-center">WHAT THE FAQ!!</h2>
        <div className="mt-12 flex flex-col gap-8 w-full">
          {faqs.map((faq, index) => (
            <Faq
              faq={faq}
              index={index}
              toggleFAQ={toggleFAQ}
              openIndex={openIndex}
              key={index}
              heights={heights}
              contentRefs={contentRefs}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqsPage;
