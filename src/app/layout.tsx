import type { Metadata, Viewport } from "next";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const SITE_URL = "https://lifeform-three.vercel.app";

export const metadata: Metadata = {
  title:
    "생활폼 - 인터넷 가입 사은품 많이 주는 곳 비교사이트 현금 지원 티비 설치 당일 지급 SKT SK KT LG 유플러스",
  description:
    "월 렌탈료 0원 제휴카드 할인 받고 현금사은품 설치 당일 지급! 얼음 정수기부터 직수, 비데, 공기청정기, 침대, 커피머신 모든 가전제품 가능",
  keywords:
    "웅진코웨이정수기, 삼성정수기, 현대큐밍, LG퓨리케어정수기, 암웨이정수기, 휴대용정수기, 싱크대정수기, 가정용정수기, 사무실정수기, 빌트인정수기, 위닉스, 교원, 아이콘얼음정수기, 닥터피엘정수기, bts정수기",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "생활폼 정수기렌탈 현금 지원금 최대 78만원 설치 당일 지급, 정수기/비데/공기청정기(SK매직, LG퓨리케어, 쿠쿠, 청호나이스, 현대)",
    description:
      "월 렌탈료 0원 제휴카드 할인 받고 현금사은품 설치 당일 지급! 얼음 정수기부터 직수, 비데, 공기청정기, 침대, 커피머신 모든 가전제품 가능",
    url: SITE_URL,
    siteName: "생활폼",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 400,
        height: 120,
        alt: "생활폼 로고",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "생활폼 - 인터넷·정수기 가입 사은품 비교사이트",
    description:
      "월 렌탈료 0원 제휴카드 할인 받고 현금사은품 설치 당일 지급!",
    images: ["/logo.png"],
  },
};

export const viewport: Viewport = {
  viewportFit: "cover",
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-0 focus:left-0 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-bold"
        >
          본문으로 건너뛰기
        </a>
        <div className="mx-auto max-w-[480px] min-h-dvh bg-white shadow-xl pb-20">
          {children}
        </div>
        <Toaster position="top-center" richColors />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "생활폼",
              url: SITE_URL,
              logo: `${SITE_URL}/logo.png`,
              description:
                "인터넷 가입 사은품 비교사이트 - 정수기, 비데, 공기청정기 렌탈 현금 지원금 설치 당일 지급",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+82-10-5007-1966",
                contactType: "customer service",
                availableLanguage: "Korean",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
