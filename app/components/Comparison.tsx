"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const cards = [
  {
    image: "/item1.png",
    title: "설치 당일 100% 지급",
    description:
      "약속된 금액 그대로 1원도 빠짐없이,\n당일 100% 입금을 직접 확인하세요.",
  },
  {
    image: "/item2.png",
    title: "대표 직접 1:1 상담",
    description:
      "궁금한 점은 무엇이든 물어보세요.\n대표가 직접 속 시원하게 해결해 드립니다.",
  },
  {
    image: "/item3.png",
    title: "공식 승인 판매점",
    description:
      "방통위 가이드라인을 준수하는 정식\n등록 업체입니다.",
  },
];

export default function Comparison() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-blue-50 py-20 px-5">
      {/* 상단 헤딩 */}
      <ScrollReveal>
        <div className="text-center mb-10">
          <p className="text-[1.4rem] font-bold text-[#0B1033]">
            불필요한 광고비 대신,
          </p>
          <p className="text-[2rem] font-extrabold text-[#0B1033] mt-1 leading-tight">
            고객님 혜택으로
            <br />
            전부 되돌려 드립니다!
          </p>
        </div>
      </ScrollReveal>

      {/* 카드 리스트 */}
      <ScrollReveal delay={0.2}>
        <div className="space-y-4">
          {cards.map((card, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm hover:shadow-[0_4px_20px_rgba(200,150,45,0.3)] hover:-translate-y-1 transition-all duration-300"
            >
              <Image
                src={card.image}
                alt={card.title}
                width={200}
                height={200}
                className="w-20 h-20 object-contain shrink-0"
              />
              <div>
                <p className="text-xl font-extrabold text-[#0B1033] mb-1">
                  {card.title}
                </p>
                <p className="text-base text-gray-600 leading-snug whitespace-pre-line">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
