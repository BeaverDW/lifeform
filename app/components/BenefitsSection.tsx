"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const leftItems = [
  "차일피일 미루는\n사은품 지급",
  "불필요한 고가\n요금제 강요",
  "복잡한 상담원 연결",
];

const rightItems = [
  "설치 당일\n100% 사은품 지급",
  "1:1 라이프 스타일\n결합 맞춤 설계",
  "투명한 혜택 공개 및\n정직한 안내",
];

export default function BenefitsSection() {
  return (
    <section className="relative overflow-hidden bg-[#0B1033]">
      <Image
        src="/benefits_bg.png"
        alt="혜택 비교 배경"
        width={860}
        height={1100}
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="relative flex flex-col items-center px-5">
        {/* 상단 헤딩 */}
        <ScrollReveal>
          <div className="mb-10 w-full pt-16 pb-4 text-center">
            <p className="text-[1.4rem] font-bold text-white">
              똑같은 통신, 똑같은 TV인데
            </p>
            <span className="relative z-10 mt-1 inline-block text-[1.6rem] font-extrabold text-white">
              왜 대리점마다 말이 다를까요?
              <span className="absolute right-[-20px] bottom-[-2px] left-[-20px] z-[-1] h-5 rounded-sm bg-[#3d61f4]" />
            </span>
          </div>
        </ScrollReveal>

        {/* 비교 카드 */}
        <ScrollReveal delay={0.2}>
        <div className="relative mb-10 grid w-full grid-cols-2 gap-3">
          {/* 일반 대리점 */}
          <div className="rounded-lg bg-gray-500/50 p-5 hover:shadow-[0_4px_20px_rgba(200,150,45,0.3)] hover:-translate-y-1 transition-all duration-300">
            <p className="mb-2 text-center text-lg font-bold text-white/80">
              일반 대리점
            </p>
            <div className="mb-4 h-px bg-white/20" />
            <div className="space-y-5">
              {leftItems.map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <Check className="mb-1 h-5 w-5 text-white/40" />
                  <p className="text-base leading-snug whitespace-pre-line text-white/60">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 생활폼 */}
          <div className="rounded-lg bg-[#3d61f4] p-5 hover:shadow-[0_4px_20px_rgba(200,150,45,0.3)] hover:-translate-y-1 transition-all duration-300">
            <p className="mb-2 text-center text-lg font-extrabold text-white">
              생활폼
            </p>
            <div className="mb-4 h-px bg-white/30" />
            <div className="space-y-5">
              {rightItems.map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <Check className="mb-1 h-5 w-5 text-white" />
                  <p className="text-base leading-snug font-medium whitespace-pre-line text-white">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* VS - 카드 위에 오버레이 */}
          <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border bg-[#3d61f4] shadow-lg">
              <span className="font-extrabold text-white">VS</span>
            </div>
          </div>
        </div>
        </ScrollReveal>

        {/* 하단 텍스트 */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-1 flex-col items-center justify-center pb-20">
            <p className="text-center text-xl leading-relaxed font-bold text-white">
              약정 끝난 인터넷 TV, 정수기에
              <br />
              가구당 최대{" "}
              <span className="text-[1.4rem] font-extrabold text-yellow-400">
                78만원
              </span>
              이 숨어있어요.
            </p>
            <p className="mt-4 text-center text-[1.5rem] leading-snug font-extrabold text-white">
              더 이상 손해 보지 마세요.
              <br />
              생활폼이 제대로 찾아드립니다.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
