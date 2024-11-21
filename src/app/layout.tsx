import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "로또 번호 생성기 | 로또 번호 추천 및 자동 생성",
    description:
        "최고의 로또 번호 생성기입니다. 자동 번호 생성, 로또 번호 추천, 맞춤형 로또 번호 제공. 로또 당첨 확률을 높이고 행운의 로또 번호를 지금 바로 생성해보세요.",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <head>
                <meta
                    name="google-site-verification"
                    content="IF3-fq0lvvNTcCCxBMZFtZea5z6sFe8Z3olALXzA4QE"
                />
                <meta
                    name="keywords"
                    content="로또 번호 생성기, 로또 번호 추천, 로또 자동 번호, 랜덤 로또 번호, 행운의 번호, 로또 조합기, 로또 전략, 로또 분석, 로또 당첨 번호, 로또 번호 조합, 로또 예측, 로또 시뮬레이션, 로또 패턴, 로또 당첨 확률 높이기"
                />
                <meta name="robots" content="index, follow" />
                <meta
                    property="og:title"
                    content="로또 번호 생성기 | 로또 번호 추천 및 자동 생성"
                />
                <meta
                    property="og:description"
                    content="자동으로 로또 번호를 생성하고 추천해드립니다. 로또 번호를 뽑고 행운을 잡으세요."
                />

                <meta property="og:url" content="https://yourdomain.com" />
                <meta name="twitter:title" content="로또 번호 생성기" />
                <meta
                    name="twitter:description"
                    content="로또 번호를 자동으로 생성하세요. 1등 번호를 뽑아드립니다."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </head>
            <body className="antialiased bg-gold-gradient">{children}</body>
        </html>
    );
}
