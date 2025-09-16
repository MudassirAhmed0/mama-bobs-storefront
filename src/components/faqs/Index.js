"use client";
import React, { useEffect, useRef, useState } from "react";
import Faq from "./Faq";
import LogoBackground from "../common/LogoBackground";

const FaqsPage = () => {
  const faqs = [
    {
      question: " What are dangleberries?",
      answer:
        "DANGLEBERRIE - bead of self produced  ecsrement that has attached itself to your hairy undercarriage! And dingle dangles in that region hence DANGLEBERRIE!!",
    },

    {
      question: "What is our return policy?",
      answer: "You can return any product within 30 days of purchase.",
    },
    {
      question: "Do we offer international shipping?",
      answer: "Yes, we ship to multiple countries worldwide.",
    },
    {
      question: " What is feltching and explanation?",
      answer:
        "A sexual act term commonly used in the LGBTQIA+ community. It is in layman's terms when one homosexual male ejaculates in another homosexual males nether region orifice and then make the highly dubious decision to go and suck his deposit back out again!",
    },

    {
      question: "How can I track my order?",
      answer: "You will receive a tracking link once your order is shipped.",
    },
    {
      question: "What payment methods do we accept?",
      answer: "We accept credit/debit cards, PayPal, and Apple Pay.",
    },
    {
      question: "How do I contact customer support?",
      answer: "You can reach us via email or our 24/7 chat support.",
    },
    {
      question: "What is the meaning of life?",
      answer:
        " The aim is to secure yourself a life of peace, contentment and love by living with positivity and above all in any situation- BE KIND! BE KIND! BE KIND!",
    },
    {
      question: "Do you offer discounts for bulk orders?",
      answer:
        "Yes, we provide special discounts for bulk purchases. Contact support for details.",
    },
    {
      question: "Are the products covered under warranty?",
      answer: "Yes, all our products come with a 1-year warranty.",
    },
    {
      question: "Can I change or cancel my order after placing it?",
      answer:
        "Orders can be modified or canceled within 24 hours of placement.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Standard shipping takes 5-7 business days, while express shipping takes 2-3 business days.",
    },
    {
      question: "Do you have a loyalty program?",
      answer:
        "Yes, we offer reward points for every purchase, which can be redeemed for discounts.",
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
    <section
     
      className="lg:mt-[10.4583333333vw] lg:pt-20 mt-40 sm:mt-[240px] lg:pb-24 pb-24 bg-black border-b border-white"
    >
      <LogoBackground/>
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
