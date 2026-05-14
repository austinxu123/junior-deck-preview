"use client";

const OLIVE = "#3a5426";
const SOFT_OLIVE = "#f0f4eb";
const HAIRLINE = "#E5E2DC";
const MUTE = "#A8A49E";

function Node({ x, y, name, role, favicon }: { x: number; y: number; name: string; role: string; favicon: string }) {
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        background: "#fff",
        border: `1px solid ${HAIRLINE}`,
        borderRadius: 10,
        padding: "10px 14px",
        display: "flex",
        alignItems: "center",
        gap: 10,
        boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
        minWidth: 150,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={favicon} alt="" style={{ width: 20, height: 20, objectFit: "contain" }} />
      <div>
        <div style={{ fontSize: 13, fontWeight: 700, color: "#111", lineHeight: 1.15 }}>{name}</div>
        <div style={{ fontSize: 11, color: MUTE, marginTop: 1 }}>{role}</div>
      </div>
    </div>
  );
}

export default function Slide01() {
  const cx = 640;
  const cy = 410;
  // 8 orbit nodes (px positions for top-left of card; cards ~150x52)
  const nodes = [
    { x: 200, y: 220, name: "Slack", role: "Comms", favicon: "https://www.google.com/s2/favicons?domain=slack.com&sz=64" },
    { x: 460, y: 170, name: "Gmail", role: "Mail", favicon: "https://www.google.com/s2/favicons?domain=gmail.com&sz=64" },
    { x: 780, y: 170, name: "Notion", role: "Docs", favicon: "https://www.google.com/s2/favicons?domain=notion.so&sz=64" },
    { x: 1010, y: 220, name: "GitHub", role: "Code", favicon: "https://www.google.com/s2/favicons?domain=github.com&sz=64" },
    { x: 200, y: 560, name: "Calendar", role: "Schedule", favicon: "https://www.google.com/s2/favicons?domain=calendar.google.com&sz=64" },
    { x: 460, y: 610, name: "Drive", role: "Files", favicon: "https://www.google.com/s2/favicons?domain=drive.google.com&sz=64" },
    { x: 780, y: 610, name: "LinkedIn", role: "Outreach", favicon: "https://www.google.com/s2/favicons?domain=linkedin.com&sz=64" },
    { x: 1010, y: 560, name: "HubSpot", role: "Marketing", favicon: "https://www.google.com/s2/favicons?domain=hubspot.com&sz=64" },
  ];

  return (
    <div style={{ width: "100%", height: "100%", padding: "56px 80px", position: "relative" }}>
      {/* Header */}
      <div
        style={{
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: MUTE,
        }}
      >
        Works with your stack
      </div>
      <h2
        style={{
          fontFamily: '-apple-system, BlinkMacSystemFont, "Inter Tight", "SF Pro Display", "Segoe UI", system-ui, sans-serif',
          fontWeight: 700,
          fontSize: 60,
          lineHeight: 1.02,
          color: "#111",
          margin: "12px 0 0 0",
          letterSpacing: "-0.015em",
        }}
      >
        Junior runs on the stack you already pay for.
      </h2>

      {/* SVG connector layer */}
      <svg
        width="1280"
        height="720"
        style={{ position: "absolute", left: 0, top: 0, pointerEvents: "none" }}
        aria-hidden="true"
      >
        {nodes.map((n, i) => {
          // Connect each node center to (cx, cy)
          const nx = n.x + 75;
          const ny = n.y + 26;
          return (
            <line
              key={i}
              x1={nx}
              y1={ny}
              x2={cx}
              y2={cy}
              stroke="#D8D5CF"
              strokeWidth={1}
              strokeDasharray="2 5"
            />
          );
        })}
        {/* olive sparkles */}
        {[
          [380, 320],
          [880, 320],
          [380, 500],
          [880, 500],
        ].map(([x, y], i) => (
          <g key={i} transform={`translate(${x},${y})`}>
            <path
              d="M0 -7 L1.5 -1.5 L7 0 L1.5 1.5 L0 7 L-1.5 1.5 L-7 0 L-1.5 -1.5 Z"
              fill={OLIVE}
              opacity={0.85}
            />
          </g>
        ))}
      </svg>

      {/* Orbit nodes */}
      {nodes.map((n, i) => (
        <Node key={i} {...n} />
      ))}

      {/* Center card: Your CRM */}
      <div
        style={{
          position: "absolute",
          left: cx - 165,
          top: cy - 56,
          width: 330,
          background: "#fff",
          border: `1px solid ${HAIRLINE}`,
          borderRadius: 14,
          padding: "16px 20px",
          boxShadow: "0 8px 28px rgba(0,0,0,0.08)",
          display: "flex",
          alignItems: "center",
          gap: 14,
        }}
      >
        <div style={{ display: "flex", gap: 6 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://www.google.com/s2/favicons?domain=salesforce.com&sz=64" alt="" style={{ width: 26, height: 26 }} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://www.google.com/s2/favicons?domain=hubspot.com&sz=64" alt="" style={{ width: 26, height: 26 }} />
        </div>
        <div>
          <div style={{ fontSize: 17, fontWeight: 700, color: "#111", lineHeight: 1.1 }}>Your CRM</div>
          <div style={{ fontSize: 12, color: MUTE, marginTop: 2 }}>System of record</div>
        </div>
      </div>

      {/* Junior badge under center */}
      <div
        style={{
          position: "absolute",
          left: cx - 175,
          top: cy + 70,
          width: 350,
          display: "flex",
          alignItems: "center",
          gap: 14,
          background: SOFT_OLIVE,
          border: `1px solid #DDE5D2`,
          borderRadius: 12,
          padding: "12px 18px",
        }}
      >
        <div
          style={{
            width: 38,
            height: 38,
            borderRadius: 9,
            background: "#fff",
            outline: `2px solid ${OLIVE}`,
            outlineOffset: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="./press/junior/logo_icon_dark_svg.svg"
            alt="Junior"
            style={{ width: 22, height: 22, objectFit: "contain" }}
          />
        </div>
        <div>
          <div style={{ fontSize: 15, fontWeight: 700, color: OLIVE, lineHeight: 1.1 }}>Junior</div>
          <div style={{ fontSize: 12, color: OLIVE, opacity: 0.85, marginTop: 3 }}>
            Does the work between them.
          </div>
        </div>
      </div>
    </div>
  );
}
