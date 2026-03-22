"use client";

import Image from "next/image";
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
      <div className="relative flex flex-col min-h-screen px-5">
        {/* 상단 영역 - 메인 카피 */}
        <div className="flex-[42] flex items-center justify-center">
          <ScrollReveal>
            <h1 className="text-[2.2rem] font-extrabold text-white leading-[1.25] tracking-tight text-center drop-shadow-lg">
              아직도 지원금 모르고
              <br />
              손해보고 계신가요?
            </h1>
          </ScrollReveal>
        </div>

        {/* 하단 영역 - 혜택 금액 */}
        <div className="flex-[48] flex flex-col items-center justify-center space-y-1">
          <ScrollReveal delay={0.3}>
            <div className="flex flex-col items-center space-y-1">
              <p className="text-white text-xl font-semibold">
                인터넷 TV 최대 <span className="font-bold">48만원</span>
              </p>
              <p className="text-white text-xl font-semibold">
                정수기 최대 <span className="font-bold">30만원</span>
              </p>
              <p className="text-[2.5rem] font-extrabold mt-2!">
                <span className="text-white">최대 </span>
                <span className="text-yellow-400">78만원</span>
              </p>
              <p className="text-white text-lg font-bold">
                + 생활폼 추가 혜택까지!
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
