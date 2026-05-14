import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Junior · Deck Preview",
  description: "Internal sales-deck visuals for Junior.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <style>{`*,*::before,*::after{box-sizing:border-box}`}</style>
      </head>
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
