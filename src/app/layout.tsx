import type { Metadata } from "next";
import { Inter, Outfit, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "한결의 컴퓨터공학 저장소 | CS & Engineering Blog",
  description: "운영체제, 알고리즘, 시스템 아키텍처 등 컴퓨터공학의 깊은 지식을 탐구합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${inter.variable} ${outfit.variable} ${notoSansKR.variable}`}>
       <body suppressHydrationWarning style={{ fontFamily: 'var(--font-noto-sans-kr), var(--font-inter), sans-serif' }}>
        <div className="fixed inset-0 -z-10 bg-[#050505]" />
        {/* Abstract background gradient */}
        <div className="fixed top-0 left-0 -z-10 w-full h-full opacity-20 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/30 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/30 blur-[120px]" />
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
