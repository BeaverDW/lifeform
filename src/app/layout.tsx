import type { Metadata, Viewport } from "next";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "생활폼 - 인터넷 가입 사은품 많이 주는 곳 비교사이트 현금 지원 티비 설치 당일 지급 SKT SK KT LG 유플러스",
  description:
    "월 렌탈료 0원 제휴카드 할인 받고 현금사은품 설치 당일 지급! 얼음 정수기부터 직수, 비데, 공기청정기, 침대, 커피머신 모든 가전제품 가능",
  keywords:
    "웅진코웨이정수기, 삼성정수기, 현대큐밍, LG퓨리케어정수기, 암웨이정수기, 휴대용정수기, 싱크대정수기, 가정용정수기, 사무실정수기, 빌트인정수기, 위닉스, 교원, 아이콘얼음정수기, 닥터피엘정수기, bts정수기",
  openGraph: {
    title:
      "생활폼 정수기렌탈 현금 지원금 최대 78만원 설치 당일 지급, 정수기/비데/공기청정기(SK매직, LG퓨리케어, 쿠쿠, 청호나이스, 현대)",
    description:
      "월 렌탈료 0원 제휴카드 할인 받고 현금사은품 설치 당일 지급! 얼음 정수기부터 직수, 비데, 공기청정기, 침대, 커피머신 모든 가전제품 가능",
  },
};

export const viewport = {
  viewportFit: "cover" as const,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="antialiased bg-gray-100">
        <div className="mx-auto max-w-[480px] min-h-dvh bg-white shadow-xl pb-20">
          {children}
        </div>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
