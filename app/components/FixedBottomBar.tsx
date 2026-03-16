"use client";

import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const KAKAO_CHANNEL_URL = "https://pf.kakao.com/_example";
const PHONE_NUMBER = "tel:010-0000-0000";

export default function FixedBottomBar() {
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] z-50 bg-white px-4 py-3 shadow-[0_-2px_10px_rgba(0,0,0,0.08)]">
      <div className="flex items-center gap-2">
        <Button
          className="flex-1 h-12 rounded-xl text-base font-bold"
          onClick={() => {
            document.querySelector("form")?.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
        >
          최대 지원금 확인하기
        </Button>

        <a href={KAKAO_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
          <Button
            type="button"
            variant="outline"
            className="h-12 w-12 rounded-xl p-0 bg-[#FEE500] hover:bg-[#FDD800] border-[#FEE500]"
          >
            <MessageCircle className="w-5 h-5 text-[#3C1E1E]" />
          </Button>
        </a>

        <a href={PHONE_NUMBER}>
          <Button
            type="button"
            variant="outline"
            className="h-12 w-12 rounded-xl p-0 bg-green-500 hover:bg-green-600 border-green-500"
          >
            <Phone className="w-5 h-5 text-white" />
          </Button>
        </a>
      </div>
    </div>
  );
}
