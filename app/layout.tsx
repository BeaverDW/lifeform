import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "생활폼",
  description: " 인터넷/TV/정수기/가전렌탈 지원금 플랫폼",
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
        <div className="mx-auto max-w-[480px] min-h-screen bg-white shadow-xl pb-20">
          {children}
        </div>
      </body>
    </html>
  );
}
