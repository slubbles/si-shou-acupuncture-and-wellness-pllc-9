export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body || !body.name || !body.email) {
    return Response.json({ error: "Name and email are required." }, { status: 400 });
  }
  const webhook = process.env.WEBHOOK_URL_CONTACT;
  if (webhook) {
    try {
      const r = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...body, _receivedAt: new Date().toISOString(), _source: "si-shou-site" }),
      });
      if (!r.ok) throw new Error(`Webhook ${r.status}`);
    } catch (e) {
      console.error("WEBHOOK_URL_CONTACT failed", e);
      return Response.json({ error: "Submission failed — please call (512) 387-4002." }, { status: 502 });
    }
  } else {
    console.log("Lead (offline success — no webhook):", body);
  }
  return Response.json({ ok: true });
}
