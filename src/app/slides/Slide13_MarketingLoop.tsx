"use client";

const OLIVE = "#3a5426";
const HAIRLINE = "#E5E2DC";
const MUTE = "#A8A49E";

const STEPS = [
  { name: "Notion", domain: "notion.so", label: "Brief written" },
  { name: "Figma", domain: "figma.com", label: "Creative drafted" },
  { name: "Meta Ads", domain: "facebook.com", label: "Campaign launched" },
  { name: "GA4", domain: "analytics.google.com", label: "Performance watched" },
  { name: "TikTok Ads", domain: "tiktok.com", label: "Winner scaled" },
  { name: "Slack", domain: "slack.com", label: "Weekly report posted" },
];

const VB_W = 1120;
const VB_H = 360;
const JUNIOR_X = VB_W / 2;
const JUNIOR_Y = 60;
const ROW_Y = 250;
const CARD_W = 150;
const CARD_GAP = 16;
const ROW_TOTAL_W = STEPS.length * CARD_W + (STEPS.length - 1) * CARD_GAP;
const ROW_LEFT = (VB_W - ROW_TOTAL_W) / 2;
const cardCenterX = (i: number) => ROW_LEFT + CARD_W / 2 + i * (CARD_W + CARD_GAP);

export default function Slide13() {
  return (
    <div style={{ width: "100%", height: "100%", padding: "56px 80px" }}>
      <div
        style={{
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: MUTE,
        }}
      >
        How campaigns actually wire together
      </div>
      <h2
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Inter Tight", "SF Pro Display", "Segoe UI", system-ui, sans-serif',
          fontWeight: 700,
          fontSize: 56,
          lineHeight: 1.05,
          color: "#111",
          margin: "12px 0 24px 0",
          letterSpacing: "-0.01em",
        }}
      >
        One campaign. Six tools. Junior carries it through.
      </h2>

      <div style={{ position: "relative", width: "100%" }}>
        <svg
          width="100%"
          viewBox={`0 0 ${VB_W} ${VB_H}`}
          preserveAspectRatio="xMidYMid meet"
          style={{ display: "block" }}
          aria-hidden="true"
        >
          {STEPS.map((_, i) => {
            const x2 = cardCenterX(i);
            const y2 = ROW_Y - 50;
            const cx = (JUNIOR_X + x2) / 2;
            return (
              <g key={`curve-${i}`}>
                <path
                  d={`M ${JUNIOR_X} ${JUNIOR_Y + 30} Q ${cx} ${JUNIOR_Y + 40}, ${x2} ${y2}`}
                  stroke={OLIVE}
                  strokeWidth={1.5}
                  strokeDasharray="3 5"
                  fill="none"
                  strokeLinecap="round"
                />
                <circle cx={x2} cy={y2} r={3} fill={OLIVE} />
              </g>
            );
          })}
          {STEPS.slice(0, -1).map((_, i) => {
            const x1 = cardCenterX(i) + CARD_W / 2 + 2;
            const x2 = cardCenterX(i + 1) - CARD_W / 2 - 2;
            const y = ROW_Y + 30;
            return (
              <g key={`arr-${i}`}>
                <line
                  x1={x1}
                  y1={y}
                  x2={x2 - 6}
                  y2={y}
                  stroke={OLIVE}
                  strokeWidth={1.2}
                  strokeDasharray="3 4"
                  strokeLinecap="round"
                />
                <path
                  d={`M ${x2 - 6} ${y - 4} L ${x2} ${y} L ${x2 - 6} ${y + 4}`}
                  stroke={OLIVE}
                  strokeWidth={1.2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            );
          })}
        </svg>

        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div
            style={{
              position: "absolute",
              left: `${(JUNIOR_X / VB_W) * 100}%`,
              top: `${(JUNIOR_Y / VB_H) * 100}%`,
              transform: "translate(-50%, -50%)",
              display: "flex",
              alignItems: "center",
              gap: 14,
              background: "#fff",
              border: `1px solid ${HAIRLINE}`,
              borderRadius: 14,
              padding: "10px 20px 10px 12px",
              boxShadow: "0 6px 24px rgba(0,0,0,0.08)",
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: "#fff",
                outline: `2px solid ${OLIVE}`,
                outlineOffset: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="./press/junior/logo_icon_dark_svg.svg"
                alt="Junior"
                style={{ width: 24, height: 24, objectFit: "contain" }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 19, fontWeight: 700, color: "#111", lineHeight: 1 }}>Junior</div>
              <div style={{ fontSize: 11.5, color: MUTE, marginTop: 4 }}>
                Drafts creative, watches spend, scales winners
              </div>
            </div>
          </div>

          {STEPS.map((s, i) => (
            <div
              key={s.name}
              style={{
                position: "absolute",
                left: `${(cardCenterX(i) / VB_W) * 100}%`,
                top: `${(ROW_Y / VB_H) * 100}%`,
                transform: "translate(-50%, -50%)",
                width: CARD_W,
                background: "#fff",
                border: `1px solid ${HAIRLINE}`,
                borderRadius: 12,
                padding: "14px 12px 12px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 6,
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://www.google.com/s2/favicons?domain=${s.domain}&sz=64`}
                alt=""
                style={{ width: 30, height: 30 }}
              />
              <div style={{ fontSize: 14, fontWeight: 700, color: "#111", marginTop: 2 }}>{s.name}</div>
              <div style={{ fontSize: 11, color: "#6B6863", textAlign: "center", lineHeight: 1.35 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          marginTop: 28,
          paddingTop: 14,
          borderTop: `1px solid ${HAIRLINE}`,
          display: "flex",
          alignItems: "center",
          gap: 14,
          fontSize: 13,
          color: "#6B6863",
        }}
      >
        <span style={{ color: OLIVE, fontWeight: 700, fontSize: 13 }}>Purpose-built for Marketers</span>
        <span style={{ color: MUTE }}>|</span>
        <span>Brief-aware. Creative-ready. Auto-paused. Reports without you asking.</span>
      </div>
    </div>
  );
}
