import About from "@/components/About/about";
import Faq from "@/components/faq/faq";
import FinalCta from "@/components/finalCta/finalCta";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import Partners from "@/components/partners/partners";
import Proccesflow from "@/components/proccesflow/proccesflow";
import Qadiryatlar from "@/components/qadriyatlar/qadiryatlar";
import Footer from "@/components/footer/footer";
import { memo } from "react";

const Page = () => {
  return (
    <div className="bg-[#FBF8F3]">
      {/* HEADER — alohida */}
      <Header />

      {/* HERO — alohida */}
      <Hero />

      {/* Qolgan sectionlar */}
      <Partners />
      <About/>
      <Qadiryatlar />
      <Proccesflow />
      <Faq />
      <FinalCta />
      <Footer />
    </div>
  );
};

export default memo(Page);
