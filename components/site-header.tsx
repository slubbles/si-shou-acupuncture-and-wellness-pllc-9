"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const nav = [
  { label: "About", href: "/about-us" },
  { label: "Our Team", href: "/our-team" },
  { label: "What is Acupuncture", href: "/what-is-acupuncture" },
  { label: "Treatment", href: "/treatment-modalities" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/clinic-forms" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-[#f4f1ea]/95 backdrop-blur border-b border-[#e8e2d6]">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8 flex items-center justify-between h-[64px]">
        <Link href="/" className="flex items-center gap-3">
          <img src="/si-shou/logo.png" alt="Si Shou Acupuncture and Wellness" className="h-9 w-9 rounded-full object-cover border border-[#e8e2d6]" />
          <span className="hidden sm:block leading-none">
            <span className="block text-[12px] tracking-[0.18em] uppercase text-[#6b645b]">Si Shou Acupuncture</span>
            <span className="block text-[15px] font-semibold tracking-[-0.02em] text-[#161513]" style={{ fontFamily: "Georgia, serif" }}>& Wellness, PLLC</span>
          </span>
          <span className="sm:hidden text-sm font-semibold" style={{ fontFamily: "Georgia, serif" }}>Sì Shòu</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-[#6b645b] hover:text-[#161513] transition-colors">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+15123874002" className="inline-flex items-center gap-2 text-sm text-[#161513]">
            <Phone className="h-4 w-4" /> (512) 387-4002
          </a>
          <a
            href="https://www.optimantra.com/optimus/patient/patientaccess/servicesall?pid=WWUvSUxvR2NwdzlOYTBOUjdpdFR1dz09&lid=WkxqU1Z6MlROZDIxbTlndjBRVUNYUT09"
            target="_blank"
            className="rounded-[4px] bg-[#3d5a3a] text-[#f4f1ea] px-5 py-2.5 text-sm font-medium hover:bg-[#2f4630] transition-colors"
          >
            Schedule Consultation
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden p-2" aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[#e8e2d6] bg-[#f4f1ea] px-6 py-6 space-y-4">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="block text-[#161513] py-1">
              {n.label}
            </Link>
          ))}
          <a href="tel:+15123874002" className="block text-sm text-[#6b645b] pt-2">(512) 387-4002 — Oak Hill, Austin</a>
          <a
            href="https://www.optimantra.com/optimus/patient/patientaccess/servicesall?pid=WWUvSUxvR2NwdzlOYTBOUjdpdFR1dz09&lid=WkxqU1Z6MlROZDIxbTlndjBRVUNYUT09"
            target="_blank"
            className="block text-center rounded-[4px] bg-[#3d5a3a] text-white px-6 py-3 text-sm"
          >
            Schedule My Consultation
          </a>
        </div>
      )}
    </header>
  );
}
