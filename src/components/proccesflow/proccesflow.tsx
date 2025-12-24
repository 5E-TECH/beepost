"use client";

import { memo, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";

const ProcessFlow = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

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
    <section className="bg-[#FBF8F3] py-32">
      <div className="container mx-auto px-4 relative overflow-hidden lg:overflow-visible">
        <h2 className="text-center text-4xl font-extrabold mb-6 text-[#1C1C1C]">
          Hiring and networking <br /> that feels human.
        </h2>

        <p className="text-center text-lg max-w-[640px] mx-auto text-[#555] mb-16">
          Liftoff amplifies human insight and facilitates connections, to help
          incredible people find each other.
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
              <div className="bg-white rounded-2xl p-6 mb-6">
                <p className="text-sm font-semibold mb-3">I'm deep in:</p>
                <div className="flex flex-wrap gap-2">
                  {["Design", "A.I.", "Enterprise SaaS", "+5"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-purple-100 text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <div>
            <div className="w-10 h-10 rounded-full border flex items-center justify-center mb-6">
              1
            </div>
            <h3 className="text-4xl font-extrabold mb-4">
              Build your private <br /> network and profile.
            </h3>
            <p className="text-lg text-gray-600 max-w-md">
              Build your private roster of the best people you know, and signal
              your interests.
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
              Receive role <br /> searches.
            </h3>
            <p className="text-lg text-gray-600 max-w-md">
              Get warm introductions and curated opportunities shared directly
              with you.
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
                Liftoff shared with you
              </div>
              <div className="bg-white rounded-2xl p-4 mb-3 text-sm">
                Jamie Lewis shared with you
              </div>
              <div className="bg-white rounded-2xl p-4 text-sm">
                Amber is hiring for a role
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
              <div className="bg-white rounded-2xl p-6 mb-6">
                <p className="text-sm font-semibold mb-3">I'm deep in:</p>
                <div className="flex flex-wrap gap-2">
                  {["Design", "A.I.", "Enterprise SaaS", "+5"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-purple-100 text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <div>
            <div className="w-10 h-10 rounded-full border flex items-center justify-center mb-6">
              3
            </div>
            <h3 className="text-4xl font-extrabold mb-4">
              Build your private <br /> network and profile.
            </h3>
            <p className="text-lg text-gray-600 max-w-md">
              Build your private roster of the best people you know, and signal
              your interests.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(ProcessFlow);
