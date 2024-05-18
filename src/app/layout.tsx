import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "PetVibe",
  description: "PetVibe - грумінг з любов’ю",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ua">
      <head>
        <link rel="icon" href="/logo-website-icon.svg" />
      </head>
      <body>
        {children}
        <Script src="https://w1220380.alteg.io/widgetJS" />
      </body>
    </html>
  );
}
