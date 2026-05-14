"use client";

const OLIVE = "#3a5426";
const SOFT_OLIVE = "#f0f4eb";
const HAIRLINE = "#E5E2DC";
const MUTE = "#A8A49E";
const TITLE_FONT =
  '-apple-system, BlinkMacSystemFont, "Inter Tight", "SF Pro Display", "Segoe UI", system-ui, sans-serif';

type Row = { label: string; day1: string; day30: string };

const ROWS: Row[] = [
  {
    label: "Follow-up emails",
    day1: "Drafts from your last 3 examples",
    day30: "Drafts in your voice, references the right prior deal",
  },
  {
    label: "CRM stage moves",
    day1: "Asks you every time",
    day30: "Auto-applies your stage-move policy",
  },
  {
    label: "Slack escalations",
    day1: "Routes by hard-coded rule",
    day30: "Routes by who actually owns the answer",
  },
  {
    label: "Pricing exceptions",
    day1: "Flags for review",
    day30: "Pre-attaches policy + 3 precedent deals",
  },
];

export default function Slide09() {
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
        Junior compounds
      </div>
      <h2
        style={{
          fontFamily: TITLE_FONT,
          fontWeight: 700,
          fontSize: 60,
          lineHeight: 1.02,
          color: "#111",
          margin: "12px 0 14px 0",
          letterSpacing: "-0.015em",
        }}
      >
        Day 1, Junior is helpful. Day 30, Junior is yours.
      </h2>
      <p
        style={{
          fontSize: 17,
          color: "#6B6863",
          lineHeight: 1.5,
          margin: "0 0 32px 0",
          maxWidth: 760,
        }}
      >
        Every approval, correction, and example becomes part of how Junior works for your team. The longer it runs,
        the less it has to ask.
      </p>

      {/* Comparison table */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          background: "#fff",
          border: `1px solid ${HAIRLINE}`,
          borderRadius: 14,
          overflow: "hidden",
          boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
        }}
      >
        {/* Header */}
        <div style={{ padding: "16px 20px", background: "#FAFAF8", borderBottom: `1px solid ${HAIRLINE}` }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: MUTE, letterSpacing: 0.6, textTransform: "uppercase" }}>
            What Junior does
          </div>
        </div>
        <div
          style={{
            padding: "16px 20px",
            background: "#FAFAF8",
            borderLeft: `1px solid ${HAIRLINE}`,
            borderBottom: `1px solid ${HAIRLINE}`,
          }}
        >
          <div style={{ fontSize: 11, fontWeight: 700, color: MUTE, letterSpacing: 0.6, textTransform: "uppercase" }}>
            Day 1
          </div>
          <div style={{ fontSize: 12, color: MUTE, marginTop: 2 }}>From your playbook + examples</div>
        </div>
        <div
          style={{
            padding: "16px 20px",
            background: SOFT_OLIVE,
            borderLeft: `1px solid #DDE5D2`,
            borderBottom: `1px solid #DDE5D2`,
          }}
        >
          <div style={{ fontSize: 11, fontWeight: 700, color: OLIVE, letterSpacing: 0.6, textTransform: "uppercase" }}>
            Day 30
          </div>
          <div style={{ fontSize: 12, color: OLIVE, opacity: 0.85, marginTop: 2 }}>
            With your team&apos;s real decisions
          </div>
        </div>

        {/* Rows */}
        {ROWS.map((r, i) => {
          const last = i === ROWS.length - 1;
          return (
            <div key={r.label} style={{ display: "contents" }}>
              <div
                style={{
                  padding: "16px 20px",
                  borderBottom: last ? "none" : `1px solid #F0EDE8`,
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#111",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {r.label}
              </div>
              <div
                style={{
                  padding: "16px 20px",
                  borderLeft: `1px solid #F0EDE8`,
                  borderBottom: last ? "none" : `1px solid #F0EDE8`,
                  fontSize: 13.5,
                  color: "#6B6863",
                  lineHeight: 1.5,
                }}
              >
                {r.day1}
              </div>
              <div
                style={{
                  padding: "16px 20px",
                  borderLeft: `1px solid #DDE5D2`,
                  borderBottom: last ? "none" : `1px solid #E4EAD9`,
                  background: "#F7FAF1",
                  fontSize: 13.5,
                  color: "#1d1c1d",
                  lineHeight: 1.5,
                  fontWeight: 500,
                }}
              >
                {r.day30}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer caption */}
      <div
        style={{
          marginTop: 22,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
        }}
      >
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: 8,
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
            style={{ width: 18, height: 18, objectFit: "contain" }}
          />
        </div>
        <div
          style={{
            fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace',
            fontSize: 12,
            color: "#8C8C8C",
            letterSpacing: 0.4,
          }}
        >
          Every approval, every correction · saved as Junior&apos;s playbook for your team
        </div>
      </div>
    </div>
  );
}
