"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <Image
        src="/hero_bg.png"
        alt="히어로 배경"
        fill
        className="object-cover"
        priority
      />
      <div className="relative flex min-h-screen flex-col px-5">
        {/* 상단 영역 - 메인 카피 */}
        <div className="flex flex-[42] items-center justify-center">
          <ScrollReveal>
            <h1 className="overflow-visible text-center text-[2.0rem] leading-[1.25] font-extrabold tracking-tight text-white drop-shadow-lg">
              <p>인터넷·TV·정수기·가전렌탈</p>
              <p>모르고 가입하면</p>
              <p className="mt-2! text-[2.5rem] font-extrabold">
                <span className="text-white">최대 </span>
                <span className="text-yellow-400">78만원</span>
                <span className="text-[2.0rem]"> 손해 봅니다.</span>
              </p>
            </h1>
          </ScrollReveal>
        </div>

        {/* 하단 영역 - 혜택 금액 */}
        <div className="flex flex-[48] flex-col items-center justify-center space-y-1">
          <ScrollReveal delay={0.3}>
            <div className="flex flex-col items-center space-y-1">
              <p className="flex items-center gap-2 text-[2.0rem] font-extrabold text-white">
                <Check className="h-7 w-7 text-yellow-400" strokeWidth={3} />{" "}
                전국 최저가 비교
              </p>
              <p className="flex items-center gap-2 text-[2.0rem] font-extrabold text-white">
                <Check className="h-7 w-7 text-yellow-400" strokeWidth={3} />{" "}
                현금 지원 최대 지급
              </p>
              <p className="flex items-center gap-2 text-[2.0rem] font-extrabold text-white">
                <Check className="h-7 w-7 text-yellow-400" strokeWidth={3} />{" "}
                전화 한 통이면 끝
              </p>
            </div>
            <div className="flex flex-col items-center justify-center pt-4">
              <p className="text-[2.5rem] font-extrabold text-yellow-400">
                최대 78만원
              </p>
              <p className="text-[2.5rem] font-extrabold text-white">
                까지 차이납니다.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* 하단 여백 */}
        <div className="flex-[10]" />
      </div>
    </section>
  );
}
