export default function Events() {
  return (
    <div>
      <section className="bg-[#f4f1ea] border-b border-[#e8e2d6]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8 py-12">
          <div className="text-[11px] tracking-[0.22em] uppercase text-[#6b645b]">Upcoming Events</div>
          <h1 className="mt-2 text-[40px] leading-none text-[#161513]" style={{ fontFamily: "Georgia, serif" }}>Stay connected</h1>
          <p className="mt-3 text-sm text-[#6b645b] max-w-[560px]">Workshops and community events from the clinic. Check back for seasonal offerings and prevention-focused talks.</p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8 py-10">
          <div className="rounded-[4px] border border-dashed border-[#e8e2d6] bg-[#f4f1ea] p-10 text-center">
            <div className="text-sm font-medium text-[#161513]">No events posted right now</div>
            <p className="mt-2 text-sm text-[#6b645b]">Follow the clinic or call (512) 387-4002 to hear about upcoming workshops.</p>
            <a href="https://www.optimantra.com/optimus/patient/patientaccess/servicesall?pid=WWUvSUxvR2NwdzlOYTBOUjdpdFR1dz09&lid=WkxqU1Z6MlROZDIxbTlndjBRVUNYUT09" target="_blank" className="mt-5 inline-flex rounded-[4px] bg-[#3d5a3a] text-white px-6 py-2.5 text-sm">Schedule a visit instead →</a>
          </div>
        </div>
      </section>
    </div>
  );
}
