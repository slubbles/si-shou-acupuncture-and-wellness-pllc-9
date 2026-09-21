import "./globals.css";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Si Shou Acupuncture and Wellness, PLLC | Acupuncture in South Austin (Oak Hill), TX",
  description:
    "Acupuncture in South Austin (Oak Hill), TX. Care centered around each individual patient and their specific needs and goals — helping you achieve harmonious health. (512) 387-4002",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
