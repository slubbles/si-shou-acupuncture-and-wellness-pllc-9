import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#e8e2d6] bg-[#161513] text-[#f4f1ea]">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <img src="/si-shou/logo.png" alt="" className="h-10 w-10 rounded-full border border-white/10" />
              <span className="text-sm leading-tight" style={{ fontFamily: "Georgia, serif" }}>
                Sì Shòu Acupuncture<br />
                <span className="text-xs opacity-60 tracking-widest uppercase">and Wellness, PLLC</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed opacity-70 max-w-xs">
              Acupuncture in South Austin (Oak Hill), TX. Care centered around each individual patient and their goals — helping you achieve harmonious health.
            </p>
          </div>

          <div>
            <div className="text-xs tracking-[0.2em] uppercase opacity-60 mb-4">Visit</div>
            <p className="text-sm leading-relaxed opacity-80">
              5424 W US Hwy 290 Service Rd<br />
              Ste 106, Austin, TX 78735<br />
              <a href="tel:+15123874002" className="underline decoration-white/20 hover:decoration-white">(512) 387-4002</a>
            </p>
          </div>

          <div>
            <div className="text-xs tracking-[0.2em] uppercase opacity-60 mb-4">Hours</div>
            <ul className="text-sm opacity-80 space-y-1">
              <li>Mon 10am–5pm</li>
              <li>Tue 2pm–6pm</li>
              <li>Wed 10am–5pm</li>
              <li>Thu 10am–2pm</li>
              <li>Fri 10am–7pm</li>
              <li>Sat 10am–3pm</li>
              <li className="opacity-50">Sun closed</li>
            </ul>
          </div>

          <div>
            <div className="text-xs tracking-[0.2em] uppercase opacity-60 mb-4">Explore</div>
            <ul className="text-sm space-y-2 opacity-80">
              <li><Link href="/about-us" className="hover:text-white">About Us</Link></li>
              <li><Link href="/what-is-acupuncture" className="hover:text-white">What is Acupuncture?</Link></li>
              <li><Link href="/treatment-modalities" className="hover:text-white">Treatment Modalities</Link></li>
              <li><Link href="/clinic-forms" className="hover:text-white">Clinic Forms</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-xs opacity-50">
          <span>© {new Date().getFullYear()} Si Shou Acupuncture and Wellness, PLLC — South Austin (Oak Hill), TX</span>
          <span>Booking via Optimantra · Health is the greatest gift.</span>
        </div>
      </div>
    </footer>
  );
}
