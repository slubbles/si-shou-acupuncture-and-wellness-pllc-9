import Link from "next/link";
import { clinic, articles } from "@/data/content";

export default function Home() {
  return (
    <div>
      {/* BAND 1 — Hero: Do the things that make you happy */}
      <section className="border-b border-[#e8e2d6] bg-[#f4f1ea]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-[#6b645b] border border-[#e8e2d6] rounded-full px-3 py-1.5 bg-white/60">
                <span className="h-2 w-2 rounded-full bg-[#3d5a3a]" /> South Austin · Oak Hill
              </div>
              <h1
                className="mt-6 text-[42px] lg:text-[64px] leading-[0.92] font-normal text-[#161513]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Do the things
                <br />
                <span className="italic font-light">that make</span> you happy
              </h1>
              <p className="mt-6 text-[18px] leading-relaxed text-[#6b645b] max-w-[560px]">
                Acupuncture in South Austin (Oak Hill), TX. Focusing on prevention and health — we alleviate symptoms while helping your body return to a state of harmonious health so you can do the things you love.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={clinic.bookingUrl} target="_blank" className="rounded-[4px] bg-[#3d5a3a] text-[#f4f1ea] px-7 py-3 text-sm font-medium hover:bg-[#2f4630] transition-colors">
                  Schedule My Consultation
                </a>
                <Link href="/about-us" className="rounded-[4px] border border-[#161513] px-7 py-3 text-sm font-medium hover:bg-[#161513] hover:text-[#f4f1ea] transition-colors">
                  What is Sì Shòu?
                </Link>
              </div>
              <p className="mt-6 text-xs tracking-[0.14em] uppercase text-[#6b645b]">5424 W US 290 Service Rd Ste 106 · (512) 387-4002</p>
            </div>

            <div className="relative">
              <div className="rounded-[4px] overflow-hidden bg-white border border-[#e8e2d6] p-8 lg:p-10">
                <img src="/si-shou/logo.png" alt="Sì Shòu — Four Guardians emblem" className="w-full max-w-[380px] mx-auto object-contain" />
                <div className="mt-6 text-center">
                  <div className="text-[11px] tracking-[0.2em] uppercase text-[#6b645b]">Sì Shòu · 四獸</div>
                  <div className="mt-2 text-sm leading-relaxed text-[#6b645b] max-w-[340px] mx-auto">
                    The 4 Guardians guarding the 4 compass directions — each with its season, color, element and virtue. A clinic rooted in balance.
                  </div>
                </div>
              </div>
              <div className="hidden lg:block absolute -bottom-6 -left-6 bg-[#161513] text-[#f4f1ea] rounded-[4px] px-5 py-4 max-w-[300px]">
                <div className="text-xs tracking-[0.18em] uppercase opacity-60">Buddha</div>
                <div className="mt-1 text-sm leading-relaxed opacity-90">“{clinic.quote}”</div>
              </div>
            </div>
          </div>
          <div className="lg:hidden mt-8 bg-[#161513] text-[#f4f1ea] rounded-[4px] px-5 py-4">
            <div className="text-xs tracking-[0.18em] uppercase opacity-60">Buddha</div>
            <div className="mt-1 text-sm leading-relaxed opacity-90">“{clinic.quote}”</div>
          </div>
        </div>
      </section>

      {/* BAND 2 — Acupuncture in South Austin (Oak Hill), TX */}
      <section className="border-b border-[#e8e2d6] bg-white">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <div className="text-[11px] tracking-[0.22em] uppercase text-[#c9a86a]">Oak Hill · Southwest Austin</div>
              <h2 className="mt-3 text-[32px] lg:text-[40px] leading-[0.95] text-[#161513]" style={{ fontFamily: "Georgia, serif" }}>
                Acupuncture in South Austin <span className="italic font-light">(Oak Hill), TX</span>
              </h2>
              <div className="mt-6 h-px w-12 bg-[#c9a86a]" />
            </div>
            <div className="lg:col-span-7">
              <p className="text-[17px] leading-relaxed text-[#161513]">
                We are a full service Oriental medicine clinic located in the Oak Hill region of Southwest Austin. Care is centered around each individual patient and their specific needs and goals — helping you achieve harmonious health.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-[#6b645b]">
                Whether you are dealing with a significant health issue, not feeling your best, or want to feel even better, we meet you where you are. Prevention, personal attention, and time to talk about your health — that is the Sì Shòu difference.
              </p>
              <div className="mt-8 grid sm:grid-cols-3 gap-4">
                <div className="rounded-[4px] border border-[#e8e2d6] bg-[#f4f1ea] p-4">
                  <div className="text-xs tracking-[0.16em] uppercase text-[#6b645b]">Approach</div>
                  <div className="mt-2 text-sm font-medium text-[#161513]">Individualized care · prevention first</div>
                </div>
                <div className="rounded-[4px] border border-[#e8e2d6] bg-[#f4f1ea] p-4">
                  <div className="text-xs tracking-[0.16em] uppercase text-[#6b645b]">Location</div>
                  <div className="mt-2 text-sm font-medium text-[#161513]">Oak Hill · 290 Service Rd Ste 106</div>
                </div>
                <div className="rounded-[4px] border border-[#e8e2d6] bg-[#f4f1ea] p-4">
                  <div className="text-xs tracking-[0.16em] uppercase text-[#6b645b]">Practitioners</div>
                  <div className="mt-2 text-sm font-medium text-[#161513]">Kate & Aaron</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BAND 3 — Are you ready to feel better? */}
      <section className="relative overflow-hidden border-b border-[#e8e2d6]">
        <img src="/si-shou/foot-soak.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.08]" />
        <div className="absolute inset-0 bg-[#f4f1ea]/70" />
        <div className="relative mx-auto max-w-[1240px] px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <div className="rounded-[4px] bg-white border border-[#e8e2d6] p-8 lg:p-10">
              <h2 className="text-[30px] lg:text-[36px] leading-tight text-[#161513]" style={{ fontFamily: "Georgia, serif" }}>
                Are you ready to <span className="italic">feel better?</span>
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-[#6b645b]">
                Whether you’re dealing with a significant health issue, not feeling your best, or want to feel even better, we can help. Our care is centered around each individual patient and their specific needs and goals — helping you achieve harmonious health.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-[#6b645b]">
                When was the last time you talked with someone about your health and received the personal attention you deserve?{" "}
                <span className="font-semibold text-[#161513]">Schedule your initial consultation with us today.</span>
              </p>
              <a href={clinic.bookingUrl} target="_blank" className="mt-6 inline-flex rounded-[4px] bg-[#3d5a3a] text-[#f4f1ea] px-7 py-3 text-sm font-medium hover:bg-[#2f4630]">Schedule My Consultation</a>
              <div className="mt-4 text-xs text-[#6b645b]">Booking via Optimantra · Phone <a href="tel:+15123874002" className="underline">(512) 387-4002</a></div>
            </div>
            <div className="rounded-[4px] bg-[#161513] text-[#f4f1ea] p-8 lg:p-10">
              <div className="text-[11px] tracking-[0.2em] uppercase opacity-60">The Sì Shòu Promise</div>
              <blockquote className="mt-4 text-[20px] leading-relaxed" style={{ fontFamily: "Georgia, serif" }}>
                “{clinic.quote}”
              </blockquote>
              <div className="mt-3 text-sm opacity-60">— Buddha</div>
              <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-[4px] bg-white/10 p-4">
                  <div className="opacity-60 text-xs uppercase tracking-widest">Peripheral Neuropathy</div>
                  <div className="mt-1 leading-snug">20 Tibetan foot soaks ($300 value) included with full treatment plan — code <span className="font-mono font-semibold">PN2022</span></div>
                </div>
                <div className="rounded-[4px] bg-white/10 p-4">
                  <div className="opacity-60 text-xs uppercase tracking-widest">Foot soak</div>
                  <img src="/si-shou/foot-soak.jpg" alt="Tibetan foot soak" className="mt-2 rounded-[4px] w-full h-24 object-cover opacity-90" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BAND 4 — Recent Articles */}
      <section className="bg-white border-b border-[#e8e2d6]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8 py-14 lg:py-20">
          <div className="flex flex-wrap justify-between items-end gap-4">
            <div>
              <div className="text-[11px] tracking-[0.22em] uppercase text-[#6b645b]">From the clinic</div>
              <h2 className="mt-2 text-[32px] leading-none text-[#161513]" style={{ fontFamily: "Georgia, serif" }}>
                Recent Articles
              </h2>
            </div>
            <Link href="/blog" className="text-sm underline decoration-[#c9a86a] underline-offset-4 hover:decoration-[#161513]">View all articles →</Link>
          </div>

          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles.map((a) => (
              <article key={a.slug} className="group rounded-[4px] border border-[#e8e2d6] bg-[#f4f1ea] overflow-hidden flex flex-col">
                <div className="h-1 bg-[#c9a86a] opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="p-6 flex flex-col flex-1">
                  <div className="text-xs tracking-[0.14em] uppercase text-[#6b645b]">{a.date}</div>
                  <h3 className="mt-2 text-[16px] leading-tight font-semibold text-[#161513]" style={{ fontFamily: "Georgia, serif" }}>
                    {a.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#6b645b] line-clamp-4">{a.excerpt}</p>
                  <a href="/blog" className="mt-4 inline-flex text-sm font-medium text-[#3d5a3a] hover:text-[#161513]">Read more →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BAND 5 — Booking */}
      <section className="bg-[#f4f1ea] border-b border-[#e8e2d6]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="rounded-[4px] bg-[#3d5a3a] text-[#f4f1ea] p-8 lg:p-10">
              <div className="text-[11px] tracking-[0.2em] uppercase opacity-70">Booking</div>
              <h2 className="mt-3 text-[28px] leading-tight" style={{ fontFamily: "Georgia, serif" }}>
                Schedule your initial
                <br />
                consultation
              </h2>
              <p className="mt-4 text-sm leading-relaxed opacity-80 max-w-[480px]">
                Booking is handled securely via Optimantra. Choose your service, pick a time, and add code <span className="font-mono text-white">PN2022</span> in comments for the Peripheral Neuropathy foot-soak bundle.
              </p>
              <a href={clinic.bookingUrl} target="_blank" className="mt-6 inline-flex rounded-[4px] bg-[#f4f1ea] text-[#3d5a3a] px-7 py-3 text-sm font-semibold hover:bg-white">
                Book on Optimantra →
              </a>
              <div className="mt-4 text-xs opacity-60">Or call (512) 387-4002 to book by phone.</div>
            </div>

            <div className="rounded-[4px] bg-white border border-[#e8e2d6] p-8 lg:p-10">
              <div className="text-[11px] tracking-[0.2em] uppercase text-[#6b645b]">Peripheral Neuropathy Offer</div>
              <h3 className="mt-3 text-[20px] leading-tight text-[#161513]" style={{ fontFamily: "Georgia, serif" }}>
                20 Tibetan foot soaks — included
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#6b645b]">
                When you sign up for a full treatment plan for Peripheral Neuropathy, you will receive 20 Tibetan foot soaks at no additional charge ($300 value). These foot soaks help treat neuropathy by improving circulation in the small vessels of the feet.
              </p>
              <img src="/si-shou/foot-soak.jpg" alt="Tibetan foot soak" className="mt-6 rounded-[4px] w-full h-[160px] object-cover border border-[#e8e2d6]" />
              <div className="mt-4 text-xs tracking-[0.14em] uppercase text-[#6b645b]">Code PN2022 · Mention when booking</div>
            </div>
          </div>
        </div>
      </section>

      {/* BAND 6 — Hours */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
            <div>
              <div className="text-[11px] tracking-[0.22em] uppercase text-[#6b645b]">Hours</div>
              <h2 className="mt-2 text-[30px] leading-none text-[#161513]" style={{ fontFamily: "Georgia, serif" }}>Visit us in Oak Hill</h2>
              <p className="mt-4 text-sm leading-relaxed text-[#6b645b]">
                We are on the 290 Service Road — easy access from Oak Hill and Southwest Austin.
              </p>
              <div className="mt-6 rounded-[4px] border border-[#e8e2d6] bg-[#f4f1ea] p-6">
                <div className="text-sm font-medium text-[#161513]">{clinic.addressLine1}</div>
                <div className="text-sm text-[#6b645b]">{clinic.addressLine2}</div>
                <a href="tel:+15123874002" className="mt-3 inline-flex text-sm font-medium text-[#3d5a3a]">{clinic.phone} →</a>
              </div>
            </div>
            <div className="rounded-[4px] border border-[#e8e2d6] overflow-hidden">
              <div className="grid grid-cols-2 text-sm">
                {clinic.hours.map((h) => (
                  <div key={h.d} className="flex justify-between border-b border-r border-[#e8e2d6] px-5 py-4 bg-white last:border-b-0">
                    <span className="font-medium text-[#161513]">{h.d}</span>
                    <span className={h.h === "Closed" ? "text-[#6b645b] opacity-60" : "text-[#6b645b]"}>{h.h}</span>
                  </div>
                ))}
              </div>
              <div className="bg-[#161513] text-[#f4f1ea] px-5 py-4 text-sm flex flex-wrap gap-4 justify-between">
                <span className="opacity-80">Questions? Call us — we pick up.</span>
                <a href={clinic.bookingUrl} target="_blank" className="underline decoration-white/30">Book online →</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
