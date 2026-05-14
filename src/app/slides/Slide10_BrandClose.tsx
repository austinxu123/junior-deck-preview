"use client";

const OLIVE = "#3a5426";
const HAIRLINE = "#E5E2DC";
const MUTE = "#A8A49E";

export default function Slide10() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: "80px 100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        background:
          "radial-gradient(ellipse at 80% 20%, rgba(58,84,38,0.06), transparent 60%), #FAF9F6",
      }}
    >
      {/* top: brand mark */}
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/junior.svg" alt="Junior" style={{ height: 28, width: "auto" }} />
        <span
          style={{
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: MUTE,
          }}
        >
          The AI employee
        </span>
      </div>

      {/* center */}
      <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
        <div style={{ flex: 1, maxWidth: 900 }}>
          <h1
            style={{
              fontFamily: '"Instrument Serif", Georgia, serif',
              fontWeight: 400,
              fontSize: 120,
              lineHeight: 0.96,
              color: "#111",
              margin: 0,
              letterSpacing: "-0.025em",
            }}
          >
            Hire Junior.
          </h1>
          <div
            style={{
              fontFamily: '"Instrument Serif", Georgia, serif',
              fontWeight: 400,
              fontSize: 48,
              lineHeight: 1.1,
              color: OLIVE,
              marginTop: 14,
              letterSpacing: "-0.015em",
            }}
          >
            Your first AI employee, on by Monday.
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 18,
              color: "#6B6863",
              maxWidth: 620,
              lineHeight: 1.55,
            }}
          >
            Lives in Slack and Gmail. Reads your policies, drafts the work, hands off when it should.
            No migration. No new tab.
          </div>
        </div>
        {/* Junior icon as anchor */}
        <div
          style={{
            width: 200,
            height: 200,
            borderRadius: 36,
            background: "#fff",
            border: `1px solid ${HAIRLINE}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 12px 40px rgba(58,84,38,0.16)",
            flexShrink: 0,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="./press/junior/logo_icon_dark_svg.svg"
            alt="Junior"
            style={{ width: 120, height: 120, objectFit: "contain" }}
          />
        </div>
      </div>

      {/* bottom: CTAs + stat strip */}
      <div>
        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
          <div
            style={{
              background: "#111",
              color: "#fff",
              padding: "14px 26px",
              borderRadius: 999,
              fontSize: 16,
              fontWeight: 600,
            }}
          >
            Hire Junior · Free trial · $100 credit
          </div>
          <div
            style={{
              background: "#fff",
              color: "#111",
              border: `1px solid ${HAIRLINE}`,
              padding: "13px 24px",
              borderRadius: 999,
              fontSize: 16,
              fontWeight: 600,
            }}
          >
            Book a demo
          </div>
          <div style={{ marginLeft: "auto", fontSize: 13, color: MUTE }}>
            junior.so
          </div>
        </div>
        <div
          style={{
            marginTop: 22,
            background: "#F0EDE8",
            color: "#8C8C8C",
            fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace',
            fontSize: 12,
            padding: "10px 18px",
            borderRadius: 8,
            textAlign: "center",
            letterSpacing: 0.2,
          }}
        >
          Slack · Gmail · HubSpot · Salesforce · Notion · Calendar · Drive · GitHub · LinkedIn
        </div>
      </div>
    </div>
  );
}
