import "./globals.css";

const siteTitle = "빌려탈Car | 무심사 즉시출고 장기렌트·오토리스 전문";
const siteDescription =
  "신용 무관, 저신용자도 무심사로 즉시출고! 빌려탈Car에서 전국 최저가 견적을 확인하세요";
const siteUrl = "https://www.xn--car-2r7mh0wi12a.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
