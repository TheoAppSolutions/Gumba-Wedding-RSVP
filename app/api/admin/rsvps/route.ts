import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
export const dynamic = "force-dynamic";
export async function GET(req: Request) {
  const pw = process.env.ADMIN_PASSWORD;
  if (!pw || req.headers.get("x-admin-password") !== pw) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { data, error } = await getSupabase().from("rsvps").select("*").order("created_at", { ascending: false });
  if (error) return NextResponse.json({ error: "Server error" }, { status: 500 });
  return NextResponse.json({ rsvps: data });
}
