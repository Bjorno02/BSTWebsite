import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import StyledComponentsRegistry from './lib/registry';

export const metadata: Metadata = {
  title: "BST Jiu Jitsu - Blood, Sweat & Tears",
  description: "Premier martial arts training in Peabody, MA. Jiu-Jitsu, MMA, Muay Thai, and Kids classes. No contracts, no commitment.",
  keywords: "jiu jitsu, MMA, muay thai, martial arts, Peabody, Massachusetts, Sean Rubchinuk, Diego Martin, self defense",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/bst-logo.PNG",
    apple: "/bst-logo.PNG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/bst-logo.PNG" type="image/png" />
      </head>
      <body>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FKM5KFGDBB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FKM5KFGDBB');
          `}
        </Script>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
} 