export type LeadPayload = {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  source?: string;
};

export async function submitLead(payload: LeadPayload) {
  const res = await fetch("/api/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Submission failed");
  return data;
}
