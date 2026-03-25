"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const combos = [
  {
    label: "1인 가구",
    image: "/familly_iitem1.png",
    items: ["100M 인터넷", "+", "슬림 정수기"],
  },
  {
    label: "신혼부부",
    image: "/familly_item2.png",
    items: ["인터넷TV", "+", "냉온정 정수기"],
  },
  {
    label: "가족형",
    image: "/familly_item3.png",
    items: ["500M인터넷", "+TV", "+얼음 정수기"],
  },
];

export default function ComboBenefits() {
  return (
    <section className="bg-[#0B1033] py-20 px-5">
      {/* 상단 헤딩 */}
      <ScrollReveal>
        <div className="text-center mb-10">
          <p className="text-[1.4rem] font-bold text-white">복잡한 비교는 끝!</p>
          <p className="text-[1.6rem] sm:text-[2rem] font-extrabold text-white mt-1 leading-tight">
            오직 생활폼에서만 가능한
          </p>
          <p className="text-[1.8rem] sm:text-[2.2rem] font-black text-yellow-400 leading-tight">
            결합 혜택 리스트
          </p>
        </div>
      </ScrollReveal>

      {/* 카드 3개 가로 배치 */}
      <ScrollReveal delay={0.2}>
        <div className="grid grid-cols-3 gap-3 mb-10">
          {combos.map((combo, i) => (
            <div key={i} className="bg-white rounded-xl p-3 flex flex-col items-center hover:shadow-[0_4px_20px_rgba(200,150,45,0.3)] hover:-translate-y-1 transition-all duration-300">
              {/* 라벨 */}
              <span className="bg-[#3d61f4] text-white text-sm font-bold px-3 py-1 rounded-full mb-2">
                {combo.label}
              </span>

              {/* 이미지 */}
              <Image
                src={combo.image}
                alt={combo.label}
                width={200}
                height={200}
                className="w-16 h-16 object-contain mb-3"
              />

              {/* 상품 리스트 */}
              <div className="text-center">
                {combo.items.map((item, j) => (
                  <p key={j} className="text-base font-bold text-[#0B1033] leading-relaxed">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* 하단 텍스트 */}
      <ScrollReveal delay={0.2}>
        <div className="text-center">
          <p className="text-xl font-bold text-white leading-relaxed">
            고민할 필요 없이
            <br />
            고객 맞춤형 서비스로 추천해드려요
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
