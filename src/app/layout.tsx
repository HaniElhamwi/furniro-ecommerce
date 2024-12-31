import type { Metadata } from "next";
import { Poppins, Almarai } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import { Toaster } from "@/components/ui/toaster";
import LoadingIndicator from "@/components/common/LoadingIndicator";

export const metadata: Metadata = {
  title:
    "Ahlam Coffee - Premium Coffee in Syria | قهوة أحلام - قهوة مميزة في سوريا",
  description:
    "Discover premium quality coffee delivered directly to your doorstep in Syria. اكتشف قهوة عالية الجودة تُ delivered مباشرة إلى باب منزلك في سوريا.",
};

const almarai = Almarai({
  subsets: ["arabic"], // Include the Arabic subset
  weight: ["300", "400", "700"], // Specify the weights you need
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={almarai.className}>
        <main className="bg-white">
          <LoadingIndicator />
          <NavBar />
          {children}
          <Toaster />
          <div className="mt-[56px]">
            <FooterSection />
          </div>
        </main>
      </body>
    </html>
  );
}
