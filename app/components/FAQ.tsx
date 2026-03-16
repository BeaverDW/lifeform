"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "왜 생활폼에서 가입해야 하나요?",
    answer:
      "생활폼은 1:1 직영 상담 시스템으로 불필요한 영업 수수료를 줄였습니다.\n중간 마진을 최소화해 고객님께 더 큰 지원금 혜택으로 돌려드립니다.",
  },
  {
    question: "지원금은 언제 받을 수 있나요?",
    answer:
      "[설치 당일 지급]을 원칙으로 합니다. 설치 확인 즉시 약속된 혜택을 투명하게 지급해 드리며, 기다림 없는 확실하고 신속한 처리를 약속드립니다.",
  },
  {
    question: "설치비나 추가 비용은 없나요?",
    answer:
      "브랜드 및 설치 환경에 따라 1회성 설치비가 발생할 수 있습니다. 생활폼은 상담 시 발생 가능한 비용을 '미리 투명하게' 안내해 드리며, 지원금을 통해 실질적인 부담을 최소화해 드립니다.",
  },
  {
    question: "인터넷+정수기 함께 가입하면 왜 혜택이 더 큰가요?",
    answer:
      "두 품목을 동시에 진행할 경우, 생활폼에서 드리는 [추가 지원금] 혜택이 대폭 늘어납니다. 각각 따로 알아보시는 번거로움은 줄이고, 한 번에 받으실 수 있는 현금 지원 규모는 극대화해 드립니다.",
  },
  {
    question: "우리 집에도 설치가 가능한가요?",
    answer:
      "주소만 알려주시면 설치 가능 여부를 즉시 조회해 드립니다.\n고객님 환경에 맞는 최적의 브랜드와 요금제를 안내해 드립니다.",
  },
  {
    question: "상담만 받아보고 결정해도 괜찮을까요?",
    answer:
      "물론입니다. 고객님 상황에 맞는 최적의 플랜을 비교해 드리는 것까지가 저희의 역할입니다. 부담 없이 전문 컨설팅을 받아보시고 천천히 결정하셔도 좋습니다.",
  },
];

export default function FAQ() {
  return (
    <section className="py-12 px-4 bg-white">
      <h2 className="text-xl font-bold text-center mb-8">자주 묻는 질문</h2>
      <div className="max-w-screen-sm mx-auto">
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger className="text-sm font-semibold text-gray-800">
                Q. {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
