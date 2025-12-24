"use client";

import { memo, useState } from "react";

const faqs = [
  {
    question: "What is Liftoff?",
    answer:
      "Liftoff is a hiring and networking platform that helps you find an incredible fit through people you trust.",
  },
  {
    question: "Who uses Liftoff?",
    answer:
      "Liftoff users are people in tech startups who are hiring, connecting others, or job-seeking.",
  },
  {
    question: "I know someone who's hiring. How can I help them?",
    answer:
      "You can share the role with your network and help make trusted connections.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#fbf7ef] py-20">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left */}
        <h2 className="text-4xl font-semibold max-md:text-2xl">
          Frequently <br className="hidden md:block" /> asked questions
        </h2>

        {/* Right */}
        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="border-b border-gray-300 pb-4">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <span className="text-lg font-medium">{faq.question}</span>

                  <span
                    className={`text-2xl transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Animated content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default memo(Faq);
