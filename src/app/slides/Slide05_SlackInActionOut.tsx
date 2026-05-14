"use client";

const OLIVE = "#3a5426";
const SOFT_OLIVE = "#f0f4eb";
const HAIRLINE = "#E5E2DC";
const MUTE = "#A8A49E";

function Card({
  kicker,
  title,
  body,
  pills,
  icon,
  highlight,
}: {
  kicker: string;
  title: string;
  body?: string;
  pills?: string[];
  icon: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <div
      style={{
        flex: 1,
        background: highlight ? SOFT_OLIVE : "#fff",
        border: `1px solid ${highlight ? "#DDE5D2" : HAIRLINE}`,
        borderRadius: 16,
        padding: "32px 28px 28px",
        height: 360,
        display: "flex",
        flexDirection: "column",
        gap: 14,
        position: "relative",
      }}
    >
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: 12,
          background: highlight ? "#fff" : "#FAF9F6",
          border: `1px solid ${HAIRLINE}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </div>
      <div style={{ fontSize: 12, color: highlight ? OLIVE : MUTE, fontWeight: 600, letterSpacing: 0.4 }}>
        {kicker}
      </div>
      <div
        style={{
          fontFamily: '-apple-system, BlinkMacSystemFont, "Inter Tight", "SF Pro Display", "Segoe UI", system-ui, sans-serif',
          fontSize: 30,
          color: "#111",
          lineHeight: 1.1,
          letterSpacing: "-0.01em",
        }}
      >
        {title}
      </div>
      {body && (
        <div style={{ fontSize: 13.5, color: "#6B6863", lineHeight: 1.5 }}>{body}</div>
      )}
      {pills && (
        <div style={{ display: "flex", gap: 8, marginTop: "auto", flexWrap: "wrap" }}>
          {pills.map((p) => (
            <span
              key={p}
              style={{
                fontSize: 11,
                background: "#fff",
                border: `1px solid ${HAIRLINE}`,
                color: "#6B6863",
                padding: "5px 10px",
                borderRadius: 999,
                fontWeight: 600,
              }}
            >
              {p}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function Arrow() {
  return (
    <div style={{ display: "flex", alignItems: "center", padding: "0 4px" }}>
      <svg width="40" height="20" aria-hidden="true">
        <path d="M2 10 L34 10 M28 4 L34 10 L28 16" stroke={OLIVE} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export default function Slide05() {
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
        The pattern
      </div>
      <h2
        style={{
          fontFamily: '-apple-system, BlinkMacSystemFont, "Inter Tight", "SF Pro Display", "Segoe UI", system-ui, sans-serif',
          fontWeight: 700,
          fontSize: 64,
          lineHeight: 1.02,
          color: "#111",
          margin: "12px 0 56px 0",
          letterSpacing: "-0.01em",
        }}
      >
        Slack in. Ticket out. Junior triages.
      </h2>

      <div style={{ display: "flex", alignItems: "center" }}>
        <Card
          kicker="Anyone posts"
          title="A request in Slack"
          pills={["Sales", "Marketing", "Ops", "Support"]}
          icon={
            /* eslint-disable-next-line @next/next/no-img-element */
            <img src="https://www.google.com/s2/favicons?domain=slack.com&sz=64" alt="" style={{ width: 32, height: 32 }} />
          }
        />
        <Arrow />
        <Card
          highlight
          kicker="Junior triages"
          title="Answers, drafts, or escalates"
          body="Reads your policies and past examples. Resolves what it can, hands off with full context when it can't."
          icon={
            <div
              style={{
                width: 42,
                height: 42,
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
                style={{ width: 26, height: 26, objectFit: "contain" }}
              />
            </div>
          }
        />
        <Arrow />
        <Card
          kicker="Human picks up"
          title="A prepared ticket"
          body="Context, precedent, and a draft already attached."
          icon={
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="4" y="3" width="14" height="18" rx="2" stroke="#111" strokeWidth="1.6" />
              <line x1="7" y1="8" x2="15" y2="8" stroke="#111" strokeWidth="1.6" strokeLinecap="round" />
              <line x1="7" y1="12" x2="15" y2="12" stroke="#111" strokeWidth="1.6" strokeLinecap="round" />
              <line x1="7" y1="16" x2="12" y2="16" stroke="#111" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          }
        />
      </div>
    </div>
  );
}
