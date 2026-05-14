"use client";

import { useEffect, useRef, useState } from "react";

type SlideProps = {
  n: string;
  title: string;
  caption?: string;
  showCaption: boolean;
  children: React.ReactNode;
};

export function Slide({ n, title, caption, showCaption, children }: SlideProps) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    function recalc() {
      const el = wrapRef.current;
      if (!el) return;
      const w = el.clientWidth;
      setScale(Math.min(1, w / 1280));
    }
    recalc();
    window.addEventListener("resize", recalc);
    return () => window.removeEventListener("resize", recalc);
  }, []);

  return (
    <section style={{ marginBottom: 64 }}>
      {showCaption && (
        <div style={{ marginBottom: 12, display: "flex", alignItems: "baseline", gap: 12 }}>
          <span
            style={{
              fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace',
              fontSize: 11,
              color: "#A8A49E",
              letterSpacing: 0.4,
            }}
          >
            SLIDE {n}
          </span>
          <span style={{ fontSize: 13, color: "#6B6863", fontWeight: 600 }}>{title}</span>
          {caption && <span style={{ fontSize: 12, color: "#A8A49E" }}>· {caption}</span>}
        </div>
      )}
      <div
        ref={wrapRef}
        style={{
          width: "100%",
          height: 720 * scale,
          position: "relative",
          borderRadius: 16,
          overflow: "hidden",
          boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
          border: "1px solid #E5E2DC",
        }}
      >
        <div
          style={{
            width: 1280,
            height: 720,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
            position: "absolute",
            top: 0,
            left: 0,
            background: "#FAF9F6",
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          }}
        >
          {/* Soft pastel shimmer — same "premium" feel Anthropic decks have */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              opacity: 1,
              background:
                "radial-gradient(ellipse 1100px 700px at 80% 12%, rgba(178,158,224,0.34), transparent 58%), radial-gradient(ellipse 950px 600px at 12% 88%, rgba(255,170,128,0.28), transparent 62%), radial-gradient(ellipse 800px 500px at 50% 50%, rgba(150,184,128,0.16), transparent 68%), radial-gradient(ellipse 600px 400px at 35% 20%, rgba(120,180,220,0.16), transparent 70%)",
            }}
          />
          <div style={{ position: "relative", width: "100%", height: "100%" }}>{children}</div>
        </div>
      </div>
    </section>
  );
}
