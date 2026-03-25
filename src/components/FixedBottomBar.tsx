"use client";

import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const KAKAO_CHANNEL_URL = "https://pf.kakao.com/_EmvxhX";
const PHONE_NUMBER = "tel:010-5007-1966";

export default function FixedBottomBar() {
  return (
    <div className="fixed bottom-0 left-1/2 z-50 w-full max-w-[480px] -translate-x-1/2 bg-white px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-[0_-2px_10px_rgba(0,0,0,0.08)]">
      <div className="flex items-center gap-2">
        <Button
          className="h-12 flex-1 rounded-xl text-base font-bold"
          onClick={() => {
            const forms = document.querySelectorAll("form");
            forms[forms.length - 1]?.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
        >
          최대 지원금 확인하기
        </Button>

        <a href={KAKAO_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
          <Button
            type="button"
            variant="outline"
            className="h-12 w-12 rounded-xl border-[#FEE500] bg-[#FEE500] p-0 hover:bg-[#FDD800]"
          >
            <MessageCircle className="h-5 w-5 text-[#3C1E1E]" />
          </Button>
        </a>

        <a href={PHONE_NUMBER}>
          <Button
            type="button"
            variant="outline"
            className="h-12 w-12 rounded-xl border-green-500 bg-green-500 p-0 hover:bg-green-600"
          >
            <Phone className="h-5 w-5 text-white" />
          </Button>
        </a>
      </div>
    </div>
  );
}
