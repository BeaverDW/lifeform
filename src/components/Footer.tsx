"use client";

import { type ReactNode } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  privacyPolicy,
  termsOfService,
  marketingConsent,
  emailCollectionRefusal,
} from "@/lib/policies";

const policyItems: { label: string; content: ReactNode }[] = [
  { label: "개인정보처리방침", content: privacyPolicy },
  { label: "서비스 이용약관", content: termsOfService },
  { label: "마케팅 정보수신 동의", content: marketingConsent },
  { label: "이메일 무단수집 거부", content: emailCollectionRefusal },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 px-5 py-8 text-gray-500">
      <div className="mx-auto max-w-screen-sm space-y-6 text-xs leading-relaxed">
        <div>
          <Image src="/footer_logo.png" alt="생활폼" width={100} height={40} />
        </div>

        <div className="space-y-1">
          <p>대표자: 신용석</p>
          <p>사업자명: 비더퍼스트</p>
          <p>사업자등록번호: 434-17-00711</p>
          <p>대표번호: <a href="tel:010-5007-1966" className="underline underline-offset-2 hover:text-gray-700">010-5007-1966</a></p>
          <p>주소: 경기 시흥시 서울대학로278번길 34 시흥배곧 아브뉴프랑 센트럴 옐로우 413호</p>
        </div>

        <div className="space-y-1">
          <p>개인정보 책임관리자: 신용석 (<a href="mailto:sinysys7@naver.com" className="underline underline-offset-2 hover:text-gray-700">sinysys7@naver.com</a>)</p>
          <p>광고제휴문의: <a href="mailto:sinysys7@naver.com" className="underline underline-offset-2 hover:text-gray-700">sinysys7@naver.com</a></p>
          <p>CS 고객센터: <a href="mailto:sinysys7@naver.com" className="underline underline-offset-2 hover:text-gray-700">sinysys7@naver.com</a></p>
        </div>

        <p className="text-[11px] text-gray-400">
          (주)비더퍼스트는 통신판매중개자이며 통신판매의 당사자가 아닙니다. 상품,
          상품정보, 거래에 관한 의무와 책임은 거래당사자에게 있습니다.
        </p>

        <div className="flex flex-wrap gap-x-3 gap-y-1 border-t border-gray-200 pt-4">
          {policyItems.map((item) => (
            <Dialog key={item.label}>
              <DialogTrigger className="text-gray-400 underline-offset-2 hover:text-gray-600 hover:underline">
                {item.label}
              </DialogTrigger>
              <DialogContent className="max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>{item.label}</DialogTitle>
                  <DialogDescription asChild>
                    <div className="pt-2">{item.content}</div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        <p className="text-center text-[11px] text-gray-400">
          © 비더퍼스트 2026 All rights reserved.
        </p>
      </div>
    </footer>
  );
}
