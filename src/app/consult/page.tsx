"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Footer from "@/components/Footer";

function getUtmParams() {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source"),
    utm_medium: params.get("utm_medium"),
    utm_campaign: params.get("utm_campaign"),
    utm_term: params.get("utm_term"),
    utm_content: params.get("utm_content"),
  };
}

const PRODUCTS = [
  { key: "internet", label: "인터넷" },
  { key: "tv", label: "TV" },
  { key: "purifier", label: "정수기" },
  { key: "rental", label: "이외 가전렌탈" },
] as const;

const TIME_SLOTS = [
  "오전 10시 ~ 12시",
  "오후 1시 ~ 3시",
  "오후 4시 ~ 6시",
  "오후 6시 이후",
  "기타",
] as const;

type ProductKey = (typeof PRODUCTS)[number]["key"];

export default function ConsultPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [products, setProducts] = useState<Record<ProductKey, boolean>>({
    internet: false,
    tv: false,
    purifier: false,
    rental: false,
  });
  const [preferredTime, setPreferredTime] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const referrer = typeof window !== "undefined" ? document.referrer : "";

  const toggleProduct = (key: ProductKey) => {
    setProducts((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      toast.warning("성함과 연락처를 입력해주세요.");
      return;
    }
    if (!agreed) {
      toast.warning("개인정보 수집 및 이용에 동의해주세요.");
      return;
    }

    setSubmitting(true);
    const utm = getUtmParams();

    const res = await fetch("/api/consult", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        phone,
        interest_internet: products.internet,
        interest_tv: products.tv,
        interest_purifier: products.purifier,
        interest_rental: products.rental,
        preferred_time: preferredTime || null,
        agreed,
        ...utm,
        referrer: referrer || null,
        page_url: typeof window !== "undefined" ? window.location.href : null,
      }),
    });

    setSubmitting(false);

    if (!res.ok) {
      toast.error("제출에 실패했습니다. 다시 시도해주세요.");
      return;
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex min-h-dvh items-center justify-center px-5">
        <div className="w-full rounded-2xl bg-gray-50 p-10 text-center">
          <p className="text-primary text-xl font-bold">
            신청이 완료되었습니다!
          </p>
          <p className="mt-3 text-sm text-gray-500">
            선택하신 시간대에 맞춰 연락드리겠습니다.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-dvh bg-gray-100 py-6">
      {/* 상단 헤더 카드 */}
      <div className="mx-4 rounded-xl bg-white p-6 text-center shadow-sm">
        <p className="text-primary text-lg font-bold">
          생활폼에서 받을 수 있는 최대 지원금 확인하기
        </p>
        <p className="mt-2 text-sm text-gray-500">
          1분만에 초간단 문의하기!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-3 space-y-3 px-4">
        {/* 1. 성함 */}
        <div className="rounded-xl bg-white p-5 shadow-sm">
          <Label className="text-sm font-semibold">
            <span className="text-red-500">*</span> 1. 성함
          </Label>
          <Input
            type="text"
            placeholder="성함을 입력해주세요"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-3 h-12 rounded-lg border-gray-200 bg-gray-50 text-sm"
          />
        </div>

        {/* 2. 연락처 */}
        <div className="rounded-xl bg-white p-5 shadow-sm">
          <Label className="text-sm font-semibold">
            <span className="text-red-500">*</span> 2. 연락처 (ex.010-0000-0000)
          </Label>
          <Input
            type="tel"
            placeholder="ex. 010-0000-0000"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-3 h-12 rounded-lg border-gray-200 bg-gray-50 text-sm"
          />
        </div>

        {/* 3. 문의 상품 (복수선택) */}
        <div className="rounded-xl bg-white p-5 shadow-sm">
          <Label className="text-sm font-semibold">
            <span className="text-red-500">*</span> 3. 문의 상품
            <span className="ml-1 text-xs font-normal text-primary">
              (복수선택)
            </span>
          </Label>
          <div className="mt-3 flex flex-col gap-2">
            {PRODUCTS.map(({ key, label }) => (
              <button
                key={key}
                type="button"
                onClick={() => toggleProduct(key)}
                className={`flex items-center gap-3 rounded-lg border px-4 py-3 text-left text-sm font-medium transition-colors ${
                  products[key]
                    ? "border-primary bg-primary/5 text-primary"
                    : "border-gray-200 bg-gray-50 text-gray-600"
                }`}
              >
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                    products[key]
                      ? "border-primary bg-primary text-white"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  {products[key] && (
                    <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 6l3 3 5-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </span>
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* 4. 통화 가능한 시간대 */}
        <div className="rounded-xl bg-white p-5 shadow-sm">
          <Label className="text-sm font-semibold">
            4. 통화 가능한 시간대
          </Label>
          <p className="mt-1 text-xs text-gray-400">
            대략 시간 체크해주시면 직접 전화드리겠습니다!
          </p>
          <div className="mt-3 flex flex-col gap-2">
            {TIME_SLOTS.map((slot) => (
              <button
                key={slot}
                type="button"
                onClick={() => setPreferredTime(slot)}
                className={`flex items-center gap-3 rounded-lg border px-4 py-3 text-left text-sm font-medium transition-colors ${
                  preferredTime === slot
                    ? "border-primary bg-primary/5 text-primary"
                    : "border-gray-200 bg-gray-50 text-gray-600"
                }`}
              >
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                    preferredTime === slot
                      ? "border-primary bg-primary"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  {preferredTime === slot && (
                    <span className="h-2 w-2 rounded-full bg-white" />
                  )}
                </span>
                {slot}
              </button>
            ))}
          </div>
        </div>

        {/* 5. 개인정보 수집 및 이용 동의 */}
        <div className="rounded-xl bg-white p-5 shadow-sm">
          <Label className="text-sm font-semibold">
            <span className="text-red-500">*</span> 5. 개인정보 수집 및 이용 동의
          </Label>
          <div className="mt-3 rounded-lg bg-gray-50 p-4 text-xs leading-relaxed text-gray-500">
            <p>
              <strong className="text-gray-700">
                수집하는 개인정보 항목
              </strong>
              <br />
              성함, 연락처
            </p>
            <p className="mt-2">
              <strong className="text-gray-700">수집 및 이용 목적</strong>
              <br />
              인터넷TV 및 가전렌탈 상품 상담, 지원금 혜택 안내 및 접수 서비스
              제공
            </p>
            <p className="mt-2">
              <strong className="text-gray-700">보유 및 이용기간</strong>
              <br />
              상담 완료 후 6개월 이내 (단, 고객 요청 시 즉시 파기)
            </p>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <Checkbox
              id="agree"
              checked={agreed}
              onCheckedChange={(checked) => setAgreed(checked === true)}
            />
            <Label
              htmlFor="agree"
              className="cursor-pointer text-sm text-gray-700"
            >
              개인정보 수집 및 이용에 동의합니다.
            </Label>
          </div>
        </div>

        {/* 제출 버튼 */}
        <div className="pt-1 pb-6">
          <Button
            type="submit"
            disabled={submitting}
            className="h-14 w-full rounded-xl text-base font-bold shadow-sm"
          >
            {submitting ? "제출 중..." : "상담 신청하기"}
          </Button>
        </div>
      </form>

      <Footer />
    </div>
  );
}
