import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://zenquotes.io/api/random", { cache: "no-store" });
    if (!res.ok) throw new Error("Quote API error");
    const data = await res.json();
    if (Array.isArray(data) && data[0]?.q) {
      return NextResponse.json({ q: data[0].q, a: data[0].a || "Unknown" });
    }
  } catch {
    // fallback handled on client
  }
  return NextResponse.json({ error: "unavailable" }, { status: 502 });
}
