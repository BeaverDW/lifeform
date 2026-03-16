"use client";

import { useState } from "react";
import { Monitor, GlassWater } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function ConsultForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [interests, setInterests] = useState({ internet: false, rental: false });
  const [agreed, setAgreed] = useState(false);

  const toggleInterest = (key: "internet" | "rental") => {
    setInterests((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 제출 로직
  };

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-screen-sm mx-auto">
        <p className="text-center text-sm text-blue-500 font-semibold mb-2">
          남들 다 받는 지원금,
        </p>
        <h2 className="text-center text-xl font-bold text-gray-900 mb-8">
          혹시 나만 놓치고 있나요?
        </h2>

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
              <Monitor className="w-5 h-5" />
              인터넷 TV
            </Button>
            <Button
              type="button"
              variant={interests.rental ? "default" : "outline"}
              onClick={() => toggleInterest("rental")}
              className="h-12 gap-2 rounded-lg text-sm font-medium"
            >
              <GlassWater className="w-5 h-5" />
              가전렌탈
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox
              id="agree"
              checked={agreed}
              onCheckedChange={(checked) => setAgreed(checked === true)}
            />
            <Label htmlFor="agree" className="text-xs text-gray-500 cursor-pointer">
              개인정보 수집 및 이용에 동의합니다
            </Label>
          </div>

          <Button
            type="submit"
            className="w-full h-14 rounded-lg text-base font-bold"
          >
            최대 지원금 확인하기
          </Button>
        </form>
      </div>
    </section>
  );
}
