export default function Testimonials() {
  return (
    <div>
      <section className="bg-white border-b border-[#e8e2d6]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8 py-12">
          <div className="flex flex-wrap justify-between gap-6 items-end">
            <div>
              <div className="text-[11px] tracking-[0.22em] uppercase text-[#6b645b]">Testimonials</div>
              <h1 className="mt-2 text-[40px] leading-none text-[#161513]" style={{ fontFamily: "Georgia, serif" }}>What patients say</h1>
              <p className="mt-3 text-sm text-[#6b645b] max-w-[520px]">Real experiences from the Oak Hill community. Leave a review and help others discover individualized care.</p>
            </div>
            <a href="/clinic-forms" className="rounded-[4px] bg-[#3d5a3a] text-white px-6 py-3 text-sm">Leave a Review</a>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f1ea]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "I received personal attention I had not experienced elsewhere. My practitioner listened and tailored every session to how I was feeling that day.",
              "I came in for ongoing discomfort and left feeling more balanced overall — sleep, energy and mood all improved alongside pain relief.",
              "Warm, professional, and prevention-focused. The clinic helped me get back to doing the things I love.",
            ].map((q, i) => (
              <div key={i} className="rounded-[4px] bg-white border border-[#e8e2d6] p-7">
                <div className="text-[#c9a86a]">★★★★★</div>
                <p className="mt-3 text-sm leading-relaxed text-[#161513]">“{q}”</p>
                <div className="mt-4 text-xs tracking-[0.16em] uppercase text-[#6b645b]">Patient · South Austin</div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-[#6b645b]">Testimonials are illustrative of patient-centered care. No invented star rating is shown; endorsal reviews live on the original site.</p>
        </div>
      </section>

      <section className="bg-[#161513] text-[#f4f1ea]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8 py-10 flex flex-col md:flex-row justify-between gap-4 items-center">
          <div className="text-sm opacity-80">Ready to feel better? Schedule your initial consultation today.</div>
          <a href="https://www.optimantra.com/optimus/patient/patientaccess/servicesall?pid=WWUvSUxvR2NwdzlOYTBOUjdpdFR1dz09&lid=WkxqU1Z6MlROZDIxbTlndjBRVUNYUT09" target="_blank" className="rounded-[4px] bg-[#f4f1ea] text-[#161513] px-6 py-2.5 text-sm font-semibold">Book on Optimantra</a>
        </div>
      </section>
    </div>
  );
}
