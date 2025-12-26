"use client";

import { memo } from "react";
import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";

const ProcessFlow = () => {
  const { dict } = useI18n();
  const cardVariants: Variants = {
    hidden: (direction: "left" | "right") => ({
      x: direction === "left" ? -200 : 200,
      y: 0,
      opacity: 0,
    }),
    visible: (direction: "left" | "right") => ({
      x: 0,
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <section id="services" className="bg-[#FBF8F3] py-32 scroll-mt-24">
      <div className="container mx-auto px-4 relative overflow-hidden lg:overflow-visible">
        <h2 className="text-center text-4xl font-extrabold mb-6 text-[#1C1C1C]">
          {dict.process.title}
        </h2>

        <p className="text-center text-lg max-w-[700px] mx-auto text-[#555] mb-16">
          {dict.process.subtitle}
        </p>

        {/* STEP 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-20 mb-40">
          <motion.div
            custom="left"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative z-10 max-lg:mx-auto"
          >
            <div className="rounded-3xl p-8 bg-linear-to-br from-pink-500 via-orange-300 to-purple-300 shadow-xl max-w-md">
              <div className="bg-white rounded-2xl p-6 space-y-3">
                <p className="text-sm font-semibold text-gray-700">
                  {dict.process.cards.step1.heading}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-700">
                  <span>{dict.process.cards.step1.typeLabel}</span>
                  <span className="font-semibold">{dict.process.cards.step1.typeValue}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-700">
                  <span>{dict.process.cards.step1.addressLabel}</span>
                  <span className="font-semibold">{dict.process.cards.step1.addressValue}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-700">
                  <span>{dict.process.cards.step1.timeLabel}</span>
                  <span className="font-semibold">{dict.process.cards.step1.timeValue}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-700">
                  <span>{dict.process.cards.step1.payLabel}</span>
                  <span className="font-semibold">{dict.process.cards.step1.payValue}</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div>
            <div className="w-10 h-10 rounded-full border flex items-center justify-center mb-6">
              1
            </div>
            <h3 className="text-4xl font-extrabold mb-4">
              {dict.process.steps[0].title}
            </h3>
            <p className="text-lg text-gray-600 max-w-md">
              {dict.process.steps[0].body}
            </p>
          </div>
        </div>

        {/* STEP 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-20 mb-40">
          <div className="order-2 lg:order-1">
            <div className="w-10 h-10 rounded-full border flex items-center justify-center mb-6">
              2
            </div>
            <h3 className="text-4xl font-extrabold mb-4">
              {dict.process.steps[1].title}
            </h3>
            <p className="text-lg text-gray-600 max-w-md">
              {dict.process.steps[1].body}
            </p>
          </div>

          <motion.div
            custom="right"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative z-10 max-lg:mx-auto"
          >
            <div className="rounded-3xl p-8 bg-linear-to-br from-orange-500 to-blue-300 shadow-xl max-w-md">
              <div className="bg-white rounded-2xl p-4 mb-3 text-sm">
                <p className="font-semibold text-gray-800">
                  {dict.process.cards.step2.card1Title}
                </p>
                <p className="text-gray-600 mt-1">{dict.process.cards.step2.card1Desc}</p>
              </div>
              <div className="bg-white rounded-2xl p-4 mb-3 text-sm">
                <p className="font-semibold text-gray-800">
                  {dict.process.cards.step2.card2Title}
                </p>
                <p className="text-gray-600 mt-1">{dict.process.cards.step2.card2Desc}</p>
              </div>
              <div className="bg-white rounded-2xl p-4 text-sm">
                <p className="font-semibold text-gray-800">
                  {dict.process.cards.step2.card3Title}
                </p>
                <p className="text-gray-600 mt-1">{dict.process.cards.step2.card3Desc}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* STEP 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-20">
          <motion.div
            custom="left"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative z-10 max-lg:mx-auto"
          >
            <div className="rounded-3xl p-8 bg-linear-to-br from-pink-500 via-orange-300 to-purple-300 shadow-xl max-w-md">
              <div className="bg-white rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    {dict.process.cards.step3.trackingLabel}
                  </span>
                  <span className="text-sm font-semibold text-gray-800">
                    {dict.process.cards.step3.trackingValue}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">{dict.process.cards.step3.statusLabel}</span>
                  <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 font-semibold">
                    {dict.process.cards.step3.statusValue}
                  </span>
                </div>
                <div className="text-sm text-gray-700">
                  <p className="font-semibold text-gray-800">
                    {dict.process.cards.step3.recipientTitle}
                  </p>
                  <p>{dict.process.cards.step3.recipientDesc}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div>
            <div className="w-10 h-10 rounded-full border flex items-center justify-center mb-6">
              3
            </div>
            <h3 className="text-4xl font-extrabold mb-4">
              {dict.process.steps[2].title}
            </h3>
            <p className="text-lg text-gray-600 max-w-md">
              {dict.process.steps[2].body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(ProcessFlow);
