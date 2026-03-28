import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: NextRequest) {
  const body = await request.json();

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;
  const userAgent = request.headers.get("user-agent") ?? null;
  const region = request.headers.get("x-vercel-ip-country") ?? null;

  const {
    name,
    phone,
    interest_internet,
    interest_tv,
    interest_purifier,
    interest_rental,
    preferred_time,
    agreed,
    ...utm
  } = body;

  if (!name || !phone || !agreed) {
    return NextResponse.json(
      { error: "필수 항목이 누락되었습니다." },
      { status: 400 }
    );
  }

  const { error } = await supabase.from("consultations").insert({
    name,
    phone,
    interest_internet: interest_internet ?? false,
    interest_tv: interest_tv ?? false,
    interest_purifier: interest_purifier ?? false,
    interest_rental: interest_rental ?? false,
    preferred_time: preferred_time ?? null,
    agreed,
    utm_source: utm.utm_source ?? null,
    utm_medium: utm.utm_medium ?? null,
    utm_campaign: utm.utm_campaign ?? null,
    utm_term: utm.utm_term ?? null,
    utm_content: utm.utm_content ?? null,
    referrer: utm.referrer ?? null,
    page_url: utm.page_url ?? null,
    ip,
    user_agent: userAgent,
    region,
  });

  if (error) {
    return NextResponse.json(
      { error: "제출에 실패했습니다." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
