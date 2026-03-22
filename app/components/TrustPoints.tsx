"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function TrustPoints() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 px-5 py-20">
      {/* 상단 헤딩 */}
      <ScrollReveal>
        <div className="mb-8 text-center">
          <p className="text-[1.4rem] font-bold text-[#0B1033]">
            대표 직접 운영으로 인건비 / 운영비{" "}
            <span className="text-[1.6rem] font-extrabold text-yellow-500">
              제로
            </span>
          </p>
          <p className="text-[2.5rem] font-black text-[#0B1033]">
            압도적인 숫자 차이!
          </p>
        </div>
      </ScrollReveal>

      {/* 원 그래프 이미지 */}
      <ScrollReveal delay={0.2}>
        <div className="flex justify-center">
          <Image
            src="/BenefitOverviewItem.png"
            alt="생활폼 고객혜택 60% vs 타사 혜택 20%"
            width={860}
            height={700}
            className="h-auto w-full hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
        </div>
      </ScrollReveal>

      {/* 하단 텍스트 */}
      <ScrollReveal delay={0.2}>
        <div className="mt-8 text-center">
          <p className="text-lg leading-relaxed font-bold text-[#0B1033]">
            생활폼의 압도적인 숫자를 확인하고
            <br />
            생활폼만의 고객 맞춤형 서비스를 이용해보세요.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
