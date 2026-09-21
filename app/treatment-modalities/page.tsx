const modalities = [
  { title: "Acupuncture", desc: "Fine-needle therapy to restore flow, ease pain, and support the body’s own healing. Individualized point selection each visit." },
  { title: "Cupping & Moxibustion", desc: "Traditional adjuncts that warm, move, and relax tissue — often paired with acupuncture for musculoskeletal and circulatory support." },
  { title: "Herbal & Lifestyle Guidance", desc: "Prevention-focused counseling on habits, rest, and seasonal balance — including foot-soak protocols for circulation." },
  { title: "Peripheral Neuropathy Program", desc: "Full treatment plan with 20 Tibetan foot soaks included ($300 value). Improves circulation in the small vessels of the feet. Code PN2022." },
];

export default function TreatmentModalities() {
  return (
    <div>
      <section className="bg-white border-b border-[#e8e2d6]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6">
              <div className="text-[11px] tracking-[0.22em] uppercase text-[#6b645b]">Treatment Modalities</div>
              <h1 className="mt-2 text-[40px] leading-[0.95] text-[#161513]" style={{ fontFamily: "Georgia, serif" }}>
                Care built around <span className="italic font-light">your goals</span>
              </h1>
            </div>
            <div className="lg:col-span-6">
              <p className="text-sm leading-relaxed text-[#6b645b]">
                We draw from the full range of Oriental medicine — selecting modalities that match your presentation that day, not a one-size protocol. Ask Kate or Aaron what is right for your case at your initial consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f1ea]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8 py-10">
          <div className="grid md:grid-cols-2 gap-6">
            {modalities.map((m) => (
              <div key={m.title} className="rounded-[4px] bg-white border border-[#e8e2d6] p-7">
                <h3 className="text-[18px] font-semibold text-[#161513]" style={{ fontFamily: "Georgia, serif" }}>{m.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#6b645b]">{m.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
            <div className="rounded-[4px] bg-[#161513] text-[#f4f1ea] p-8">
              <div className="text-xs tracking-[0.18em] uppercase opacity-60">Featured</div>
              <div className="mt-2 text-xl" style={{ fontFamily: "Georgia, serif" }}>Tibetan Foot Soaks for Neuropathy</div>
              <p className="mt-3 text-sm leading-relaxed opacity-80">
                Included with a full Peripheral Neuropathy plan — 20 soaks that help treat neuropathy by improving circulation in the small vessels of the feet. They should be part of any plan to improve neuropathy.
              </p>
              <div className="mt-4 inline-flex rounded-[4px] bg-white text-[#161513] px-4 py-2 text-xs font-mono tracking-widest">CODE: PN2022</div>
              <div className="mt-4 text-xs opacity-60">Enter in comments when you book the Initial Consultation, or mention by phone.</div>
            </div>
            <div className="rounded-[4px] overflow-hidden border border-[#e8e2d6] bg-white">
              <img src="/si-shou/foot-soak.jpg" alt="Tibetan foot soak" className="w-full h-[280px] object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
