const conditions = [
  "Pain — back, neck, joint and musculoskeletal",
  "Headaches, concussions & traumatic brain injuries",
  "Neurological support — Bell’s palsy, Parkinson’s, stroke recovery, MS, seizures",
  "Eye disorders and vision support",
  "Stress, sleep and mood balance",
  "Digestive and immune regulation",
  "Peripheral Neuropathy (foot-soak program included)",
];

export default function WhatWeTreat() {
  return (
    <div>
      <section className="bg-white border-b border-[#e8e2d6]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8 py-12">
          <div className="text-[11px] tracking-[0.22em] uppercase text-[#6b645b]">What We Treat</div>
          <h1 className="mt-2 text-[38px] leading-none text-[#161513]" style={{ fontFamily: "Georgia, serif" }}>Care for a wide range of needs</h1>
          <p className="mt-3 text-sm text-[#6b645b] max-w-[640px]">Acupuncture supports the body across many systems. Below are common reasons patients visit Sì Shòu — your plan is always individualized.</p>
        </div>
      </section>
      <section className="bg-[#f4f1ea]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8 py-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {conditions.map((c) => (
              <div key={c} className="rounded-[4px] bg-white border border-[#e8e2d6] p-6 flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#c9a86a] shrink-0" />
                <span className="text-sm leading-relaxed text-[#161513]">{c}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-[4px] bg-[#161513] text-[#f4f1ea] p-6 flex flex-wrap justify-between gap-4">
            <span className="text-sm opacity-80">Not sure if acupuncture fits your case? Bring your questions to the initial consultation.</span>
            <a href="https://www.optimantra.com/optimus/patient/patientaccess/servicesall?pid=WWUvSUxvR2NwdzlOYTBOUjdpdFR1dz09&lid=WkxqU1Z6MlROZDIxbTlndjBRVUNYUT09" target="_blank" className="text-sm underline">Book consultation →</a>
          </div>
        </div>
      </section>
    </div>
  );
}
