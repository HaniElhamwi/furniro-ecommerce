import BrowseTheRangeSection from "@/components/sections/BrowseTheRangeSection";
import HeroSection from "@/components/sections/HeroSection";
import OurProductSection from "@/components/sections/OurProductSection";
import ShareSetupSection from "@/components/sections/ShareSetupSection";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomePage() {
  redirect("/shop");
  return (
    <main className="bg-white">
      {/* <HeroSection />
      <div className="flex flex-col gap-[56px] mx-4 md:mx-[130px]">
        <BrowseTheRangeSection />
        <OurProductSection />
      </div>
      <div className="mt-[56px]">
        <ShareSetupSection />
      </div> */}
    </main>
  );
}
