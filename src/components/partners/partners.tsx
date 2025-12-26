"use client";

import { memo } from "react";
import { useI18n } from "@/lib/i18n";

const partners = [
  "YE77I Tech",
  "DHL",
  "FedEx",
  "Apple",
  "UPS",
  "USPS",
  "Amazon",
  "Alibaba",
  "AliExpress",
  "YE77I Tech",
  "eBay",
  "Shopify",
  "Stripe",
  "PayPal",
  "Google",
  "Meta",
  "Apple",
  "Microsoft",
];

const Row = ({
  direction,
}: {
  direction: "left" | "right";
}) => {
  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex w-max gap-16 whitespace-nowrap ${
          direction === "left"
            ? "animate-marqueeLeft"
            : "animate-marqueeRight"
        }`}
      >
        {[...partners, ...partners].map((item, i) => (
          <span
            key={i}
            className="text-xl md:text-2xl font-semibold text-black/40 hover:text-black transition"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

const PartnersMarquee = () => {
  const { dict } = useI18n();
  return (
    <section className="bg-gradient-to-b from-white to-[#FBF8F3] py-24 md:py-1 space-y-10">
      <div className="text-center mb-14">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1E0E2F]">
          {dict.partners.title}
        </h2>
        <p className="mt-3 text-[#5E5168]">
          {dict.partners.subtitle}
        </p>
      </div>

      {/* 1-qator */}
      <Row direction="left" />

      {/* 2-qator */}
      <Row direction="right" />

      {/* 3-qator */}
      <Row direction="left" />
    </section>
  );
};

export default memo(PartnersMarquee);
