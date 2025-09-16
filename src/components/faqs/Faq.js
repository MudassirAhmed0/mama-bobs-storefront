import React from "react";

const Faq = ({ faq, index, toggleFAQ, openIndex, contentRefs, heights }) => {
  const isOpen = openIndex === index;

  return (
    <div className="group border border-gray-400 p-4 rounded-2xl">
      <button
        className="lg:text-2xl text-lg w-full text-left font-semibold text-white focus:outline-none flex justify-between items-start gap-2"
        onClick={() => toggleFAQ(index)}
        aria-expanded={isOpen}
      >
        <span>{faq.question}</span>
        <span
          className={`transform transition-transform duration-300 flex-shrink-0 ${
            isOpen
              ? "rotate-180 text-white"
              : "rotate-0 text-gray-400 lg:group-hover:text-white"
          } lg:group-hover:text-gray-400`}
        >
          ▼
        </span>
      </button>
      <div
        ref={(el) => (contentRefs.current[index] = el)}
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "mt-2" : "mt-0"
        }`}
        style={{
          height: isOpen ? `${heights[index] || "auto"}px` : "0px",
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? "visible" : "hidden",
        }}
      >
        <div className="mb-1">
          <p className="text-white pt-2 lg:text-lg whitespace-pre-line">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
