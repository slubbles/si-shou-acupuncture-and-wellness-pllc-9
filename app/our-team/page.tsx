const team = [
  {
    name: "Kate",
    role: "Licensed Acupuncturist",
    bio: "Kate centers care around each patient’s specific needs and goals — helping you achieve harmonious health. Prevention, warmth, and personal attention in every visit.",
    initials: "K",
  },
  {
    name: "Aaron",
    role: "Licensed Acupuncturist",
    bio: "Aaron brings steady, attentive care to the Oak Hill clinic — meeting you where you are, whether you are managing a significant health issue or want to feel even better.",
    initials: "A",
  },
];

export default function OurTeam() {
  return (
    <div>
      <section className="bg-[#161513] text-[#f4f1ea]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8 py-14">
          <div className="max-w-3xl">
            <div className="text-[11px] tracking-[0.22em] uppercase opacity-60">Our Team</div>
            <h1 className="mt-3 text-[40px] leading-none" style={{ fontFamily: "Georgia, serif" }}>
              Practitioners who <span className="italic font-light opacity-80">listen first</span>
            </h1>
            <p className="mt-4 text-sm leading-relaxed opacity-70 max-w-[560px]">
              Si Shou Acupuncture and Wellness is led by Kate and Aaron — care centered around each individual patient and their goals.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f1ea] border-b border-[#e8e2d6]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid md:grid-cols-2 gap-6">
            {team.map((m) => (
              <div key={m.name} className="rounded-[4px] bg-white border border-[#e8e2d6] p-8">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-[#3d5a3a] text-white grid place-items-center text-lg font-semibold" style={{ fontFamily: "Georgia, serif" }}>
                    {m.initials}
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-[#161513]" style={{ fontFamily: "Georgia, serif" }}>{m.name}</div>
                    <div className="text-xs tracking-[0.16em] uppercase text-[#6b645b]">{m.role}</div>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-[#6b645b]">{m.bio}</p>
                <div className="mt-6 h-px bg-[#e8e2d6]" />
                <div className="mt-4 text-xs text-[#6b645b]">South Austin (Oak Hill) · Personal attention in every visit.</div>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-[4px] bg-white border border-[#e8e2d6] p-6 flex flex-wrap justify-between gap-4 items-center">
            <div className="text-sm text-[#6b645b]">Want to meet the practitioners before you book?</div>
            <a href="https://www.optimantra.com/optimus/patient/patientaccess/servicesall?pid=WWUvSUxvR2NwdzlOYTBOUjdpdFR1dz09&lid=WkxqU1Z6MlROZDIxbTlndjBRVUNYUT09" target="_blank" className="rounded-[4px] bg-[#3d5a3a] text-white px-6 py-2.5 text-sm">Schedule consultation</a>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8 py-10">
          <div className="flex items-center gap-4">
            <img src="/si-shou/logo.png" alt="" className="h-12 w-12 rounded-full border border-[#e8e2d6]" />
            <div className="text-sm text-[#6b645b]">Full bios on the original clinic site — this rebuild keeps bios brief and rebuilds structure for clarity.</div>
          </div>
        </div>
      </section>
    </div>
  );
}
