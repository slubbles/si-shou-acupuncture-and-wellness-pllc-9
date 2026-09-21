import { articles } from "@/data/content";

export default function Blog() {
  return (
    <div>
      <section className="bg-[#161513] text-[#f4f1ea]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8 py-12">
          <div className="text-[11px] tracking-[0.22em] uppercase opacity-60">Blog</div>
          <h1 className="mt-2 text-[40px] leading-none" style={{ fontFamily: "Georgia, serif" }}>Recent Articles</h1>
          <p className="mt-3 text-sm opacity-70 max-w-[600px]">Education from the clinic — eye health, neurological support, and what to expect from acupuncture.</p>
        </div>
      </section>

      <section className="bg-[#f4f1ea]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8 py-10">
          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((a) => (
              <article key={a.slug} className="rounded-[4px] bg-white border border-[#e8e2d6] p-8">
                <div className="text-xs tracking-[0.14em] uppercase text-[#6b645b]">{a.date}</div>
                <h2 className="mt-2 text-[20px] leading-tight text-[#161513]" style={{ fontFamily: "Georgia, serif" }}>{a.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-[#6b645b]">{a.excerpt}</p>
                <a href="#" className="mt-4 inline-flex text-sm font-medium text-[#3d5a3a]">Read more →</a>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-[4px] bg-white border border-[#e8e2d6] p-6 text-center text-sm text-[#6b645b]">
            Full articles live on the original site at acuwellnessclinic.com/blog — this rebuild shows the four most recent themes.
          </div>
        </div>
      </section>
    </div>
  );
}
