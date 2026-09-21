const faqs = [
  { q: "Does acupuncture hurt?", a: "This is by far the most commonly asked question by new patients. The quick answer is, it shouldn’t. There are hundreds of acupuncture points on the body and a skilled practitioner makes treatment comfortable — many patients rest deeply during sessions." },
  { q: "How many sessions will I need?", a: "It depends on your condition, history, and goals. Acute concerns may improve quickly; longer-standing patterns often benefit from a series. Your practitioner will outline a plan at your initial consultation." },
  { q: "Is acupuncture safe?", a: "When performed by a licensed acupuncturist with sterile, single-use needles, acupuncture has a strong safety profile. Tell your practitioner about medications and health history at intake." },
  { q: "Do you take insurance?", a: "Contact the clinic at (512) 387-4002 to discuss coverage and payment — the team will help you understand options before you book." },
];

export default function QA() {
  return (
    <div>
      <section className="bg-white border-b border-[#e8e2d6]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8 py-12">
          <div className="text-[11px] tracking-[0.22em] uppercase text-[#6b645b]">Q & A</div>
          <h1 className="mt-2 text-[38px] leading-none text-[#161513]" style={{ fontFamily: "Georgia, serif" }}>Common questions</h1>
        </div>
      </section>
      <section className="bg-[#f4f1ea]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8 py-10">
          <div className="max-w-3xl space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-[4px] bg-white border border-[#e8e2d6] p-6">
                <h3 className="text-[16px] font-semibold text-[#161513]" style={{ fontFamily: "Georgia, serif" }}>{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6b645b]">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
