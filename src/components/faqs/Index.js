"use client";
import React, { useEffect, useRef, useState } from "react";
import Faq from "./Faq";
import LogoBackground from "../common/LogoBackground";

const FaqsPage = () => {
  const faqs = [
    {
      question: "What are dangleberries?",
      answer: "DANGLEBERRIE - bead of self produced ecsrement that has attached itself to your hairy undercarriage! And dingle dangles in that region hence DANGLEBERRIE!!",
    },
    {
      question: "Return Policy?",
      answer: "God knows why you want to return a piece of MAMA BOBS quality apparel. But if you do, any item can be returned within 30 days of purchase.  (This should be at the bottom of the list of what the FAQ)",
    },
    {
      question: "Do We Offer International Shipping?",
      answer: "YES we offer International shipping on the order of 5 Items or more.",
    },
    {
      question: "What is feltching and explanation?",
      answer: "A sexual act term commonly used in the LGBTQIA+ community. It is in layman's terms when one homosexual male ejaculates in another homosexual males nether region orifice and then make the highly dubious decision to go and suck his deposit back out again!",
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is shipped you will receive a tracking link via email.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept online payment made through any of your Debit/Credit cards.",
    },
    {
      question: "Can I contact customer support?",
      answer: "YES you can reach out to us Via email, Whatsapp and can also give us a call on this number +61467-395-529",
    },
    {
      question: "Do we offer a discount on bulk orders?",
      answer: "Not Right now but we will come up with something very soon.",
    },
    {
      question: "What is the meaning of life?",
      answer: "The aim is to secure yourself a life of peace, contentment and love by living with positivity and above all in any situation- BE KIND! BE KIND! BE KIND!",
    },
    {
      question: "Can I change or cancel my order?",
      answer: "Sure you can by reaching out to the customer support via any channel.",
    },
    {
      question: "How long does delivery take?",
      answer: "Standard Delivery may take upto 5-7 business days and Express Delivery will take around 2-4 Business days.",
    },
    {
      question: "Do you have a loyalty program?",
      answer: "If you show your loyalty to the MAMA BOBS movement by sending us a photo of you wearing MAMA BOBS any photo that we use , you will receive 20% off on your next order. The stranger the place the larger the discount! ( THE GAUNTLET HAS BEEN THROWN DOWN!!)",
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
    <section className="lg:mt-[8.6583333333vw] lg:pt-16 mt-40 sm:mt-[240px] lg:pb-24 pb-24 bg-black border-b border-white">
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
