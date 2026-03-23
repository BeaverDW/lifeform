"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const lineVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: 0.3 + i * 0.2,
      duration: 0.7,
      ease: "easeOut" as const,
    },
  }),
};

const checkItems = [
  "전국 최저가 비교",
  "현금 지원 최대 지급",
  "전화 한 통이면 끝",
];

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
          <h1 className="overflow-visible text-center text-[1.8rem] leading-relaxed font-bold tracking-tight text-white drop-shadow-lg">
            <motion.p
              custom={0}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
            >
              인터넷 · TV · 정수기 · 가전렌탈
            </motion.p>
            <motion.p
              custom={1}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
            >
              모르고 가입하면
            </motion.p>
            <motion.p
              className="mt-3 text-[2.5rem] leading-relaxed"
              custom={2}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
            >
              <span className="text-white">최대 </span>
              <motion.span
                className="inline-block text-yellow-400"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: 1,
                  textShadow: [
                    "0 0 8px rgba(250,204,21,0.4)",
                    "0 0 20px rgba(250,204,21,0.8)",
                    "0 0 8px rgba(250,204,21,0.4)",
                  ],
                }}
                transition={{
                  scale: {
                    delay: 1.2,
                    duration: 1.4,
                    repeat: Infinity,
                    ease: "easeInOut" as const,
                  },
                  textShadow: {
                    delay: 1.2,
                    duration: 1.4,
                    repeat: Infinity,
                    ease: "easeInOut" as const,
                  },
                  opacity: { delay: 0.9, duration: 0.5 },
                }}
              >
                78만원
              </motion.span>
              <span className="text-[2.0rem]"> 손해 봅니다.</span>
            </motion.p>
          </h1>
        </div>

        {/* 하단 영역 - 혜택 금액 */}
        <div className="flex flex-[48] flex-col items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            {checkItems.map((text, i) => (
              <motion.p
                key={text}
                className="flex items-center gap-2 text-[1.8rem] font-extrabold text-white"
                initial={{ opacity: 0, x: -30 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: [0, -6, 0],
                }}
                transition={{
                  opacity: { delay: 1.4 + i * 0.15, duration: 0.5 },
                  x: {
                    delay: 1.4 + i * 0.15,
                    duration: 0.5,
                    ease: "easeOut" as const,
                  },
                  y: {
                    delay: 2.5 + i * 0.3,
                    duration: 0.8,
                    repeat: Infinity,
                    repeatDelay: 1.5,
                    ease: "easeInOut" as const,
                  },
                }}
              >
                <Check className="h-8 w-8 text-yellow-400" strokeWidth={5} />
                {text}
              </motion.p>
            ))}
          </div>
          <div className="mt-5 text-center">
            <motion.p
              className="text-[2.5rem] leading-relaxed font-extrabold text-yellow-400"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: [1, 1.05, 1],
                textShadow: [
                  "0 0 8px rgba(250,204,21,0.4)",
                  "0 0 20px rgba(250,204,21,0.8)",
                  "0 0 8px rgba(250,204,21,0.4)",
                ],
              }}
              transition={{
                opacity: { delay: 2.0, duration: 0.5 },
                scale: {
                  delay: 2.0,
                  duration: 1.4,
                  repeat: Infinity,
                  ease: "easeInOut" as const,
                },
                textShadow: {
                  delay: 2.0,
                  duration: 1.4,
                  repeat: Infinity,
                  ease: "easeInOut" as const,
                },
              }}
            >
              최대 78만원
            </motion.p>
            <motion.p
              className="text-[2.2rem] leading-relaxed font-extrabold text-white"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.3, duration: 0.5, ease: "easeOut" }}
            >
              까지 차이납니다.
            </motion.p>
          </div>
        </div>

        {/* 하단 여백 */}
        <div className="flex-[10]" />
      </div>
    </section>
  );
}
