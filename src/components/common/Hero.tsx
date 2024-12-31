import { ChevronRight } from "lucide-react";
import React from "react";

function Hero({ title }: { title: string }) {
  return (
    <section className="bg-shop-hero h-[316px] flex justify-center flex-col items-center relative text-white">
      {/* create gradient layer  */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-customGray/30 to-primary/50 z-10"></div>
      <div className="text-white z-20">
        <p className="font-medium text-[48px] z-20">{title}</p>
        <div className="flex gap-2">
          <p className="font-bold z-20">الرئيسية</p>
          <ChevronRight />
          <p>{title}</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
