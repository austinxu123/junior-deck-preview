"use client";

const OLIVE = "#3a5426";
const SOFT_OLIVE = "#f0f4eb";
const HAIRLINE = "#E5E2DC";
const MUTE = "#A8A49E";
const AMBER = "#B8722C";
const RED = "#A33C2A";

type Row = {
  platform: string;
  domain: string;
  campaign: string;
  spend: string;
  roas: string;
  status: "ok" | "warn" | "alert";
  note: string;
};

const ROWS: Row[] = [
  { platform: "Meta", domain: "facebook.com", campaign: "BFCM · Lookalike 1%", spend: "$8,420", roas: "3.4x", status: "ok", note: "Within target" },
  { platform: "Google", domain: "google.com", campaign: "Brand · Exact", spend: "$2,140", roas: "5.1x", status: "ok", note: "Within target" },
  { platform: "TikTok", domain: "tiktok.com", campaign: "UGC Hook A/B", spend: "$3,860", roas: "1.7x", status: "alert", note: "Below 2.0x floor — paused" },
  { platform: "LinkedIn", domain: "linkedin.com", campaign: "Enterprise ABM", spend: "$5,210", roas: "2.2x", status: "warn", note: "Drift watch" },
];

function StatusPill({ status }: { status: Row["status"] }) {
  const map = {
    ok: { bg: SOFT_OLIVE, fg: OLIVE, label: "Healthy" },
    warn: { bg: "#FBF1E0", fg: AMBER, label: "Watch" },
    alert: { bg: "#FBE4DF", fg: RED, label: "Auto-paused" },
  } as const;
  const v = map[status];
  return (
    <span
      style={{
        fontSize: 10.5,
        background: v.bg,
        color: v.fg,
        padding: "3px 9px",
        borderRadius: 999,
        fontWeight: 700,
        letterSpacing: 0.4,
      }}
    >
      {v.label}
    </span>
  );
}

export default function Slide08() {
  return (
    <div style={{ width: "100%", height: "100%", padding: "48px 80px", display: "flex", gap: 32 }}>
      <div style={{ flex: "0 0 360px", paddingTop: 30 }}>
        <div
          style={{
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: MUTE,
          }}
        >
          For media buyers
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
          Cross-platform ROAS, watched while you sleep.
        </h2>
        <p style={{ fontSize: 15, color: "#6B6863", lineHeight: 1.55, margin: 0 }}>
          Junior watches every campaign against your floor. When a creative drifts, it pauses to your policy and
          tells you exactly why.
        </p>

        <div
          style={{
            marginTop: 28,
            padding: "14px 16px",
            background: SOFT_OLIVE,
            border: `1px solid #DDE5D2`,
            borderRadius: 10,
            display: "flex",
            alignItems: "center",
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
          <div style={{ fontSize: 12.5, color: OLIVE, lineHeight: 1.4 }}>
            <strong>Junior, 3:14 AM PT</strong>
            <br />
            Paused TikTok UGC Hook A/B at 1.7x — below your 2.0x floor.
          </div>
        </div>
      </div>

      {/* Table */}
      <div
        style={{
          flex: 1,
          background: "#fff",
          borderRadius: 14,
          border: `1px solid ${HAIRLINE}`,
          boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
          overflow: "hidden",
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
            Cross-platform ROAS · 3:14 AM PT
          </div>
        </div>

        <div style={{ padding: "14px 18px 18px" }}>
          {/* header row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "150px 1fr 80px 70px 100px",
              gap: 10,
              padding: "8px 4px",
              borderBottom: `1px solid ${HAIRLINE}`,
              fontSize: 11,
              fontWeight: 700,
              color: MUTE,
              letterSpacing: 0.4,
              textTransform: "uppercase",
            }}
          >
            <div>Platform</div>
            <div>Campaign</div>
            <div style={{ textAlign: "right" }}>Spend</div>
            <div style={{ textAlign: "right" }}>ROAS</div>
            <div style={{ textAlign: "right" }}>Status</div>
          </div>
          {ROWS.map((r, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "150px 1fr 80px 70px 100px",
                gap: 10,
                padding: "12px 4px",
                borderBottom: i === ROWS.length - 1 ? "none" : `1px solid #F0EDE8`,
                alignItems: "center",
                fontSize: 13,
                background: r.status === "alert" ? "#FDF6F4" : "transparent",
              }}
            >
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://www.google.com/s2/favicons?domain=${r.domain}&sz=64`}
                  alt=""
                  style={{ width: 18, height: 18 }}
                />
                <span style={{ fontWeight: 700, color: "#111" }}>{r.platform}</span>
              </div>
              <div style={{ color: "#1d1c1d" }}>
                {r.campaign}
                <div style={{ fontSize: 11, color: MUTE, marginTop: 2 }}>{r.note}</div>
              </div>
              <div style={{ textAlign: "right", fontWeight: 600, color: "#111" }}>{r.spend}</div>
              <div
                style={{
                  textAlign: "right",
                  fontWeight: 700,
                  color: r.status === "alert" ? RED : r.status === "warn" ? AMBER : OLIVE,
                }}
              >
                {r.roas}
              </div>
              <div style={{ textAlign: "right" }}>
                <StatusPill status={r.status} />
              </div>
            </div>
          ))}

          <div
            style={{
              marginTop: 14,
              background: "#F0EDE8",
              color: "#8C8C8C",
              fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace',
              fontSize: 11.5,
              padding: "9px 14px",
              borderRadius: 8,
              textAlign: "center",
            }}
          >
            $19,630 watched · 1 auto-pause · 1 drift watch · 2 healthy
          </div>
        </div>
      </div>
    </div>
  );
}
