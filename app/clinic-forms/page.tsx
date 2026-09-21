"use client";
import { useState } from "react";
import { submitLead } from "@/lib/submitLead";

export default function ClinicForms() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [msg, setMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const fd = new FormData(e.currentTarget);
    try {
      await submitLead({
        name: String(fd.get("name") || ""),
        email: String(fd.get("email") || ""),
        phone: String(fd.get("phone") || ""),
        message: String(fd.get("message") || ""),
        source: "clinic-forms",
      });
      setStatus("success");
      setMsg("Thank you — your message was sent. We will be in touch soon.");
      (e.target as HTMLFormElement).reset();
    } catch (err: unknown) {
      setStatus("error");
      setMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <div>
      <section className="bg-[#f4f1ea] border-b border-[#e8e2d6]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <div className="text-[11px] tracking-[0.22em] uppercase text-[#6b645b]">Clinic Forms · Contact</div>
              <h1 className="mt-2 text-[40px] leading-none text-[#161513]" style={{ fontFamily: "Georgia, serif" }}>Get in touch</h1>
              <p className="mt-4 text-sm leading-relaxed text-[#6b645b] max-w-[520px]">
                Prefer to talk first? Call (512) 387-4002. Or send a message and we will follow up. Booking is also available directly via Optimantra.
              </p>
              <div className="mt-6 rounded-[4px] border border-[#e8e2d6] bg-white p-6 text-sm">
                <div className="font-medium text-[#161513]">Si Shou Acupuncture and Wellness, PLLC</div>
                <div className="text-[#6b645b]">5424 W US Hwy 290 Service Rd Ste 106, Austin, TX 78735</div>
                <div className="mt-2 text-[#6b645b]">Hours: Mon 10-5 · Tue 2-6 · Wed 10-5 · Thu 10-2 · Fri 10-7 · Sat 10-3 · Sun closed</div>
              </div>
            </div>
            <form onSubmit={onSubmit} className="rounded-[4px] bg-white border border-[#e8e2d6] p-7 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="text-sm">
                  <span className="text-[#6b645b]">Full name</span>
                  <input name="name" required className="mt-1 w-full rounded-[4px] border border-[#e8e2d6] bg-[#f4f1ea] px-3 py-2.5 outline-none focus:border-[#3d5a3a]" placeholder="Your name" />
                </label>
                <label className="text-sm">
                  <span className="text-[#6b645b]">Phone</span>
                  <input name="phone" className="mt-1 w-full rounded-[4px] border border-[#e8e2d6] bg-[#f4f1ea] px-3 py-2.5 outline-none focus:border-[#3d5a3a]" placeholder="(512) 555-..." />
                </label>
              </div>
              <label className="text-sm block">
                <span className="text-[#6b645b]">Email</span>
                <input name="email" type="email" required className="mt-1 w-full rounded-[4px] border border-[#e8e2d6] bg-[#f4f1ea] px-3 py-2.5 outline-none focus:border-[#3d5a3a]" placeholder="you@email.com" />
              </label>
              <label className="text-sm block">
                <span className="text-[#6b645b]">Message</span>
                <textarea name="message" rows={4} className="mt-1 w-full rounded-[4px] border border-[#e8e2d6] bg-[#f4f1ea] px-3 py-2.5 outline-none focus:border-[#3d5a3a]" placeholder="How can we help?" />
              </label>
              <button disabled={status === "loading"} className="w-full rounded-[4px] bg-[#3d5a3a] text-white py-3 text-sm font-medium hover:bg-[#2f4630] disabled:opacity-60">
                {status === "loading" ? "Sending…" : "Send message"}
              </button>
              {msg && <p className={`text-sm ${status === "success" ? "text-[#3d5a3a]" : "text-red-600"}`}>{msg}</p>}
              <p className="text-xs text-[#6b645b]">Intake forms are available at the clinic — ask when you book. Booking via Optimantra for appointments.</p>
              <a href="https://www.optimantra.com/optimus/patient/patientaccess/servicesall?pid=WWUvSUxvR2NwdzlOYTBOUjdpdFR1dz09&lid=WkxqU1Z6MlROZDIxbTlndjBRVUNYUT09" target="_blank" className="block text-center text-sm underline decoration-[#c9a86a]">Or book on Optimantra →</a>
            </form>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8 py-8">
          <div className="rounded-[4px] overflow-hidden border border-[#e8e2d6] bg-[#f4f1ea] p-4 text-sm text-[#6b645b] flex flex-wrap gap-4">
            <span>Map: 5424 W US 290 Service Rd — Oak Hill, Austin</span>
            <a href="https://maps.google.com/?q=5424+W+US+Hwy+290+Service+Rd+Ste+106+Austin+TX+78735" target="_blank" className="underline">Open in Maps →</a>
          </div>
        </div>
      </section>
    </div>
  );
}
