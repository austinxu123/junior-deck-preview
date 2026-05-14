"use client";

const OLIVE = "#3a5426";
const SOFT_OLIVE = "#f0f4eb";
const HAIRLINE = "#E5E2DC";
const MUTE = "#A8A49E";

function JuniorBadge() {
  return (
    <div
      style={{
        width: 33,
        height: 33,
        borderRadius: 8,
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
        style={{ width: 18, height: 18, objectFit: "contain" }}
      />
    </div>
  );
}

function HumanAvatar({ src }: { src: string }) {
  /* eslint-disable-next-line @next/next/no-img-element */
  return <img src={src} alt="" style={{ width: 33, height: 33, borderRadius: 8, objectFit: "cover", flexShrink: 0 }} />;
}

function Msg({
  author,
  isAI,
  time,
  children,
  avatar,
}: {
  author: string;
  isAI?: boolean;
  time: string;
  children: React.ReactNode;
  avatar: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", gap: 10, marginBottom: 12, alignItems: "flex-start" }}>
      {avatar}
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ fontWeight: 700, fontSize: 14, color: "#111" }}>{author}</span>
          {isAI && (
            <span
              style={{
                fontSize: 9.5,
                background: SOFT_OLIVE,
                color: OLIVE,
                padding: "1px 5px",
                borderRadius: 3,
                fontWeight: 600,
                letterSpacing: 0.2,
              }}
            >
              AI Employee
            </span>
          )}
          <span style={{ fontSize: 11, color: MUTE, fontWeight: 500 }}>{time}</span>
        </div>
        <div style={{ fontSize: 13, color: "#1d1c1d", lineHeight: 1.55, marginTop: 2 }}>{children}</div>
      </div>
    </div>
  );
}

export default function Slide07() {
  return (
    <div style={{ width: "100%", height: "100%", padding: "48px 80px", display: "flex", gap: 36 }}>
      {/* Left: copy */}
      <div style={{ flex: "0 0 380px", paddingTop: 30 }}>
        <div
          style={{
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: MUTE,
          }}
        >
          For sales teams
        </div>
        <h2
          style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Inter Tight", "SF Pro Display", "Segoe UI", system-ui, sans-serif',
            fontWeight: 700,
            fontSize: 44,
            lineHeight: 1.05,
            color: "#111",
            margin: "12px 0 20px 0",
            letterSpacing: "-0.01em",
          }}
        >
          From call recap to CRM — autonomously closed.
        </h2>
        <p style={{ fontSize: 15, color: "#6B6863", lineHeight: 1.55, margin: 0 }}>
          Junior listens, drafts, and queues every follow-up before your AE refreshes Slack.
        </p>

        <div
          style={{
            marginTop: 30,
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          {[
            "47 post-meeting follow-ups drafted",
            "12 next-step tasks queued",
            "8 stage moves awaiting one-click",
          ].map((s) => (
            <div key={s} style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <span style={{ color: OLIVE, fontWeight: 800, fontSize: 16 }}>✓</span>
              <span style={{ fontSize: 14, color: "#111" }}>{s}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Slack mock */}
      <div
        style={{
          flex: 1,
          background: "#fff",
          borderRadius: 16,
          border: `1px solid ${HAIRLINE}`,
          boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Mac chrome */}
        <div
          style={{
            height: 32,
            background: "#FAFAF8",
            borderBottom: `1px solid ${HAIRLINE}`,
            display: "flex",
            alignItems: "center",
            padding: "0 12px",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", gap: 5 }}>
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F56" }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FFBD2E" }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#27C93F" }} />
          </div>
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              textAlign: "center",
              fontSize: 11,
              color: "#8C8C8C",
              fontWeight: 500,
            }}
          >
            Slack · Sales AE Team
          </div>
        </div>
        <div
          style={{
            padding: "12px 18px",
            borderBottom: `1px solid #F0EDE8`,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span style={{ fontWeight: 700, fontSize: 14, color: "#111" }}># sales-ae-team</span>
          <span style={{ fontSize: 11, color: MUTE }}>· 6 members</span>
        </div>
        <div style={{ padding: "16px 18px", flex: 1 }}>
          <Msg author="Junior" isAI time="10:34 AM" avatar={<JuniorBadge />}>
            Picked up your <strong>Acme Health</strong> meeting recap. Drafted the follow-up from your notes,
            referenced their procurement deadline. Suggested a 30-min next-step for Thursday.
            <div
              style={{
                marginTop: 8,
                padding: "6px 10px",
                borderRadius: 6,
                background: SOFT_OLIVE,
                border: `1px solid #DDE5D2`,
                fontSize: 12,
                color: OLIVE,
                fontWeight: 600,
                display: "inline-block",
              }}
            >
              ✉️ Draft + calendar invite · 1-click to send
            </div>
          </Msg>
          <Msg author="Maya" time="10:51 AM" avatar={<HumanAvatar src="./avatars/maya.jpeg" />}>
            perfect. send it + push next-step to thursday 2pm.
          </Msg>
          <Msg author="Junior" isAI time="10:51 AM" avatar={<JuniorBadge />}>
            Sent. Calendar invite drafted for Thursday 2pm. Once accepted, I&apos;ll suggest moving the deal to
            &ldquo;Demo Scheduled&rdquo; for one-click approval.
          </Msg>
        </div>
        {/* Stat strip */}
        <div
          style={{
            background: "#F0EDE8",
            color: "#8C8C8C",
            fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace',
            fontSize: 11.5,
            padding: "10px 18px",
            textAlign: "center",
            letterSpacing: 0.2,
          }}
        >
          47 follow-ups · 12 next-step tasks · 8 stage moves queued
        </div>
      </div>
    </div>
  );
}
