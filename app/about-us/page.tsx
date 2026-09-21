export default function AboutUs() {
  return (
    <div>
      <section className="bg-[#f4f1ea] border-b border-[#e8e2d6]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8 py-12 lg:py-16">
          <div className="max-w-3xl">
            <div className="text-[11px] tracking-[0.22em] uppercase text-[#6b645b]">About Us</div>
            <h1 className="mt-3 text-[40px] lg:text-[52px] leading-[0.9] text-[#161513]" style={{ fontFamily: "Georgia, serif" }}>
              What is <span className="italic font-light">Sì Shòu</span> Acupuncture and Wellness?
            </h1>
            <p className="mt-5 text-[17px] leading-relaxed text-[#6b645b]">
              We are a full service Oriental medicine clinic located in the Oak Hill region of Southwest Austin. Focusing on prevention and health, we work to alleviate symptoms while helping your body get back on track to a state of harmonious health.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-[#e8e2d6]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <div className="rounded-[4px] bg-[#161513] text-[#f4f1ea] p-8">
                <div className="text-[11px] tracking-[0.22em] uppercase opacity-60">Sì Shòu · 四獸</div>
                <div className="mt-3 text-[22px] leading-tight" style={{ fontFamily: "Georgia, serif" }}>The 4 Guardians</div>
                <p className="mt-3 text-sm leading-relaxed opacity-75">
                  At the heart of Chinese mythology are four spiritual creatures — four celestial emblems — each guarding a direction on the compass. In China, the four date back to at least the 2nd century BC.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
                  <div className="rounded-[4px] bg-white/10 p-3"><div className="opacity-60 uppercase tracking-widest">Direction</div><div className="mt-1 font-medium">North · South · East · West</div></div>
                  <div className="rounded-[4px] bg-white/10 p-3"><div className="opacity-60 uppercase tracking-widest">Each has</div><div className="mt-1 font-medium">Season · Color · Element · Virtue</div></div>
                </div>
              </div>
              <div className="mt-6 rounded-[4px] border border-[#e8e2d6] bg-[#f4f1ea] p-6 flex gap-4 items-center">
                <img src="/si-shou/logo.png" alt="" className="h-16 w-16 rounded-full border border-[#e8e2d6]" />
                <div className="text-sm leading-relaxed text-[#6b645b]">Sì Shòu: the four guardians that give the clinic its name — balance, protection, and direction.</div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <h2 className="text-[24px] text-[#161513]" style={{ fontFamily: "Georgia, serif" }}>Prevention first. Personal attention always.</h2>
              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-[#6b645b]">
                <p>
                  Focusing on prevention and health we will work to alleviate your symptoms while helping your body get back on track to a state of harmonious health so you are able to do the things you love.
                </p>
                <p>
                  Care at Sì Shòu is centered around each individual patient and their specific needs and goals. Whether you are managing a significant health issue, not feeling your best, or want to feel even better — we meet you where you are.
                </p>
                <p className="text-[#161513] font-medium">When was the last time you talked with someone about your health and received the personal attention you deserve?</p>
              </div>
              <div className="mt-8 border-t border-[#e8e2d6] pt-6 flex flex-wrap gap-3">
                <a href="https://www.optimantra.com/optimus/patient/patientaccess/servicesall?pid=WWUvSUxvR2NwdzlOYTBOUjdpdFR1dz09&lid=WkxqU1Z6MlROZDIxbTlndjBRVUNYUT09" target="_blank" className="rounded-[4px] bg-[#3d5a3a] text-white px-6 py-3 text-sm">Schedule Initial Consultation</a>
                <a href="/our-team" className="rounded-[4px] border border-[#161513] px-6 py-3 text-sm">Meet Kate & Aaron →</a>
              </div>
              <div className="mt-8 rounded-[4px] bg-[#f4f1ea] border border-[#e8e2d6] p-6">
                <blockquote className="text-[18px] leading-relaxed text-[#161513]" style={{ fontFamily: "Georgia, serif" }}>“Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.”</blockquote>
                <div className="mt-2 text-sm text-[#6b645b]">— Buddha</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
