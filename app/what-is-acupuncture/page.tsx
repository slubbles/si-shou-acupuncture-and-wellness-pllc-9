export default function WhatIsAcupuncture() {
  return (
    <div>
      <section className="bg-[#f4f1ea] border-b border-[#e8e2d6]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8 py-12">
          <div className="max-w-3xl">
            <div className="text-[11px] tracking-[0.22em] uppercase text-[#6b645b]">About Acupuncture</div>
            <h1 className="mt-2 text-[42px] leading-[0.9] text-[#161513]" style={{ fontFamily: "Georgia, serif" }}>
              What is <span className="italic font-light">acupuncture?</span>
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-[#6b645b]">A system rooted in balance — how Qi moves, how the body signals, and how fine-needle care restores harmonious health.</p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10">
            <div className="space-y-6">
              <div className="rounded-[4px] border border-[#e8e2d6] bg-[#f4f1ea] p-8">
                <h2 className="text-[18px] font-semibold text-[#161513]" style={{ fontFamily: "Georgia, serif" }}>What is Qi?</h2>
                <p className="mt-3 text-sm leading-relaxed text-[#6b645b]">Qi is the vital activity that animates the body — often described as energy, but more accurately the dynamic function of organ systems, breath, and circulation working together.</p>
              </div>
              <div className="rounded-[4px] border border-[#e8e2d6] bg-white p-8">
                <h2 className="text-[18px] font-semibold text-[#161513]" style={{ fontFamily: "Georgia, serif" }}>How does Qi move?</h2>
                <p className="mt-3 text-sm leading-relaxed text-[#6b645b]">Through channels (meridians) that connect regions of the body. When flow is smooth, we feel well; when it stagnates or depletes, symptoms arise. Acupuncture helps regulate that flow.</p>
              </div>
              <div className="rounded-[4px] bg-[#3d5a3a] text-[#f4f1ea] p-8">
                <h2 className="text-[18px]" style={{ fontFamily: "Georgia, serif" }}>How does acupuncture work?</h2>
                <p className="mt-3 text-sm leading-relaxed opacity-80">By stimulating specific points along those channels with fine, sterile needles — encouraging the body’s own regulatory and healing responses. Care is individualized each visit.</p>
              </div>
            </div>
            <div>
              <div className="rounded-[4px] bg-[#161513] text-[#f4f1ea] p-8">
                <div className="text-xs tracking-[0.2em] uppercase opacity-60">Explore</div>
                <ul className="mt-4 space-y-3 text-sm">
                  <li><a href="/what-is-acupuncture/what-we-treat" className="flex justify-between border-b border-white/10 py-3 hover:opacity-80"><span>What We Treat</span><span>→</span></a></li>
                  <li><a href="/what-is-acupuncture/first-visit" className="flex justify-between border-b border-white/10 py-3 hover:opacity-80"><span>First Visit</span><span>→</span></a></li>
                  <li><a href="/what-is-acupuncture/q-a" className="flex justify-between py-3 hover:opacity-80"><span>Q & A</span><span>→</span></a></li>
                </ul>
              </div>
              <div className="mt-6 rounded-[4px] border border-[#e8e2d6] bg-[#f4f1ea] p-6">
                <div className="text-sm font-medium text-[#161513]">New to acupuncture?</div>
                <p className="mt-2 text-sm leading-relaxed text-[#6b645b]">Start with First Visit and Q&A — then schedule your initial consultation to talk through your health and goals.</p>
                <a href="https://www.optimantra.com/optimus/patient/patientaccess/servicesall?pid=WWUvSUxvR2NwdzlOYTBOUjdpdFR1dz09&lid=WkxqU1Z6MlROZDIxbTlndjBRVUNYUT09" target="_blank" className="mt-4 inline-flex rounded-[4px] bg-[#3d5a3a] text-white px-6 py-2.5 text-sm">Schedule consultation</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
