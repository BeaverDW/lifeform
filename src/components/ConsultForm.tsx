"use client";

import { useState } from "react";
import { Refrigerator, Wifi } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { privacyConsent } from "@/lib/policies";
import ScrollReveal from "./ScrollReveal";

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

export default function ConsultForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [interests, setInterests] = useState({
    internet: false,
    rental: false,
  });
  const [agreed, setAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const referrer = typeof window !== "undefined" ? document.referrer : "";

  const toggleInterest = (key: "internet" | "rental") => {
    setInterests((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      toast.warning("이름과 연락처를 입력해주세요.");
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
        interest_internet: interests.internet,
        interest_rental: interests.rental,
        agreed,
        ...utm,
        referrer: referrer || null,
        page_url: window.location.href,
      }),
    });

    setSubmitting(false);

    if (!res.ok) {
      toast.error("제출에 실패했습니다. 다시 시도해주세요.");
      return;
    }

    setSubmitted(true);
  };

  return (
    <section className="bg-gray-50 px-5 py-20">
      <div className="mx-auto max-w-screen-sm">
        <ScrollReveal>
          <p className="text-primary text-center text-[1.4rem] font-bold">
            남들 다 받는 지원금,
          </p>
          <h2 className="mb-10 text-center text-[2rem] font-extrabold text-[#C8962D]">
            혹시 나만 놓치고 있나요?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          {submitted ? (
            <div className="rounded-lg bg-white p-8 text-center">
              <p className="text-primary text-lg font-bold">
                신청이 완료되었습니다!
              </p>
              <p className="mt-2 text-sm text-gray-500">
                빠른 시간 내에 연락드리겠습니다.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="이름"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-12 rounded-lg bg-white text-sm"
              />

              <Input
                type="tel"
                placeholder="연락처"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="h-12 rounded-lg bg-white text-sm"
              />

              <div className="grid grid-cols-2 gap-3">
                <Button
                  type="button"
                  variant={interests.internet ? "default" : "outline"}
                  onClick={() => toggleInterest("internet")}
                  className="h-12 gap-2 rounded-lg text-sm font-medium"
                >
                  <Wifi className="h-5 w-5" />
                  인터넷 TV
                </Button>
                <Button
                  type="button"
                  variant={interests.rental ? "default" : "outline"}
                  onClick={() => toggleInterest("rental")}
                  className="h-12 gap-2 rounded-lg text-sm font-medium"
                >
                  <Refrigerator className="h-5 w-5" />
                  가전렌탈
                </Button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="agree"
                    checked={agreed}
                    onCheckedChange={(checked) => setAgreed(checked === true)}
                  />
                  <Label
                    htmlFor="agree"
                    className="cursor-pointer text-xs text-gray-500"
                  >
                    개인정보 수집 및 이용에 동의합니다
                  </Label>
                </div>
                <Dialog>
                  <DialogTrigger className="text-[10px] text-gray-400 underline underline-offset-2">
                    내용보기
                  </DialogTrigger>
                  <DialogContent className="max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>개인정보 수집 및 이용 동의</DialogTitle>
                      <DialogDescription asChild>
                        <div className="pt-2">{privacyConsent}</div>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>

              <Button
                type="submit"
                className="h-14 w-full rounded-lg text-base font-bold"
              >
                {submitting ? "제출 중..." : "최대 지원금 확인하기"}
              </Button>
            </form>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
