export default function FirstVisit() {
  return (
    <div>
      <section className="bg-[#f4f1ea] border-b border-[#e8e2d6]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8 py-12">
          <div className="text-[11px] tracking-[0.22em] uppercase text-[#6b645b]">First Visit</div>
          <h1 className="mt-2 text-[38px] leading-none text-[#161513]" style={{ fontFamily: "Georgia, serif" }}>What to expect</h1>
          <p className="mt-3 text-sm text-[#6b645b] max-w-[600px]">Time to talk, personal attention, and a plan centered on you.</p>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8 py-10">
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              { n: "01", t: "Conversation", d: "We review your health history, current concerns, and goals — the personal attention you deserve." },
              { n: "02", t: "Assessment", d: "A traditional assessment helps us understand pattern and flow, so point selection matches you that day." },
              { n: "03", t: "Treatment & Plan", d: "Your first treatment, plus guidance on frequency and what to notice between visits. Bring questions." },
            ].map((s) => (
              <div key={s.n} className="rounded-[4px] border border-[#e8e2d6] bg-[#f4f1ea] p-8">
                <div className="text-xs tracking-[0.2em] uppercase text-[#c9a86a]">{s.n}</div>
                <h3 className="mt-2 text-lg font-semibold text-[#161513]" style={{ fontFamily: "Georgia, serif" }}>{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#6b645b]">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-[4px] bg-[#161513] text-[#f4f1ea] p-6 text-sm flex flex-wrap gap-4 justify-between">
            <span className="opacity-80">Complete intake forms before you arrive to make the most of your time.</span>
            <a href="/clinic-forms" className="underline">Clinic Forms →</a>
          </div>
        </div>
      </section>
    </div>
  );
}
