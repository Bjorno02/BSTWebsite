import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from './lib/registry';

export const metadata: Metadata = {
  title: "BST Jiu Jitsu - Blood, Sweat & Tears",
  description: "Premier martial arts training in Peabody, MA. Jiu-Jitsu, MMA, Muay Thai, and Kids classes. No contracts, no commitment.",
  keywords: "jiu jitsu, MMA, muay thai, martial arts, Peabody, Massachusetts, Sean Rubchinuk, Diego Martin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
} 