"use client";

const OLIVE = "#3a5426";
const SOFT_OLIVE = "#f0f4eb";
const HAIRLINE = "#E5E2DC";
const MUTE = "#A8A49E";

const TOOLS = [
  { name: "Shopify", domain: "shopify.com" },
  { name: "Klaviyo", domain: "klaviyo.com" },
  { name: "Gorgias", domain: "gorgias.com" },
  { name: "ReCharge", domain: "rechargepayments.com" },
  { name: "ShipBob", domain: "shipbob.com" },
];

const PANEL_HEIGHT = 420;
const PILL_HEIGHT = 42;
const PILL_GAP = 14;
const COL_HEIGHT = TOOLS.length * PILL_HEIGHT + (TOOLS.length - 1) * PILL_GAP;
const COL_TOP = (PANEL_HEIGHT - COL_HEIGHT) / 2;
const pillCenterY = (i: number) => COL_TOP + PILL_HEIGHT / 2 + i * (PILL_HEIGHT + PILL_GAP);

function Pill({ name, domain, muted }: { name: string; domain: string; muted?: boolean }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        background: "#fff",
        border: `1px solid ${HAIRLINE}`,
        borderRadius: 10,
        padding: "0 16px",
        height: PILL_HEIGHT,
        opacity: muted ? 0.78 : 1,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`https://www.google.com/s2/favicons?domain=${domain}&sz=64`} alt="" style={{ width: 18, height: 18 }} />
      <span style={{ fontSize: 13.5, fontWeight: 600, color: muted ? "#6B6863" : "#111" }}>{name}</span>
    </div>
  );
}

function PersonaPill({ tone }: { tone: "dark" | "olive" }) {
  const isDark = tone === "dark";
  return (
    <div
      style={{
        background: isDark ? "#1d1c1d" : SOFT_OLIVE,
        color: isDark ? "#fff" : OLIVE,
        border: isDark ? "none" : `1px solid #DDE5D2`,
        borderRadius: 999,
        padding: "11px 22px",
        fontWeight: 700,
        fontSize: 14,
        letterSpacing: 0.4,
        whiteSpace: "nowrap",
      }}
    >
      DTC ops
    </div>
  );
}

export default function Slide11() {
  const PANEL_W = 540;
  const TEAM_X = 70;
  const TOOLS_LEFT_EDGE = 280;
  const JUNIOR_X = 360;
  const TEAM_X_AFTER = 500;

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
        For e-commerce
      </div>
      <h2
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Inter Tight", "SF Pro Display", "Segoe UI", system-ui, sans-serif',
          fontWeight: 700,
          fontSize: 52,
          lineHeight: 1.04,
          color: "#111",
          margin: "12px 0 8px 0",
          letterSpacing: "-0.01em",
        }}
      >
        Stop refreshing five dashboards. Your DTC stack comes to you.
      </h2>
      <p style={{ fontSize: 16, color: "#6B6863", lineHeight: 1.5, margin: "0 0 24px 0", maxWidth: 920 }}>
        We didn&apos;t replace Shopify. We made Junior the surface where orders, support, and retention show up.
      </p>

      <div style={{ display: "flex", gap: 20, height: PANEL_HEIGHT + 70 }}>
        {/* BEFORE */}
        <div
          style={{
            flex: 1,
            background: "#fff",
            border: `1px solid ${HAIRLINE}`,
            borderRadius: 14,
            padding: "20px 24px 24px",
          }}
        >
          <div style={{ fontSize: 12, color: MUTE, fontWeight: 600, letterSpacing: 0.4 }}>
            BEFORE · five tabs, five context switches
          </div>
          <div style={{ position: "relative", height: PANEL_HEIGHT, marginTop: 14 }}>
            <svg
              width="100%"
              height={PANEL_HEIGHT}
              viewBox={`0 0 ${PANEL_W} ${PANEL_HEIGHT}`}
              preserveAspectRatio="none"
              style={{ position: "absolute", inset: 0 }}
              aria-hidden="true"
            >
              {TOOLS.map((_, i) => (
                <line
                  key={i}
                  x1={TEAM_X + 60}
                  y1={PANEL_HEIGHT / 2}
                  x2={TOOLS_LEFT_EDGE - 4}
                  y2={pillCenterY(i)}
                  stroke={MUTE}
                  strokeWidth={1}
                  strokeDasharray="4 5"
                />
              ))}
            </svg>
            <div
              style={{
                position: "absolute",
                left: `${(TEAM_X / PANEL_W) * 100}%`,
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <PersonaPill tone="dark" />
            </div>
            <div
              style={{
                position: "absolute",
                left: `${(TOOLS_LEFT_EDGE / PANEL_W) * 100}%`,
                top: COL_TOP,
                display: "flex",
                flexDirection: "column",
                gap: PILL_GAP,
              }}
            >
              {TOOLS.map((t) => (
                <Pill key={t.name} {...t} muted />
              ))}
            </div>
          </div>
        </div>

        {/* AFTER */}
        <div
          style={{
            flex: 1,
            background: "#fff",
            border: `1px solid #DDE5D2`,
            borderRadius: 14,
            padding: "20px 24px 24px",
          }}
        >
          <div style={{ fontSize: 12, color: OLIVE, fontWeight: 600, letterSpacing: 0.4 }}>
            AFTER · Junior watches orders, drafts replies, flags churn
          </div>
          <div style={{ position: "relative", height: PANEL_HEIGHT, marginTop: 14 }}>
            <svg
              width="100%"
              height={PANEL_HEIGHT}
              viewBox={`0 0 ${PANEL_W} ${PANEL_HEIGHT}`}
              preserveAspectRatio="none"
              style={{ position: "absolute", inset: 0 }}
              aria-hidden="true"
            >
              {TOOLS.map((_, i) => (
                <line
                  key={i}
                  x1={130}
                  y1={pillCenterY(i)}
                  x2={JUNIOR_X - 28}
                  y2={PANEL_HEIGHT / 2}
                  stroke={OLIVE}
                  strokeWidth={1.5}
                />
              ))}
              <line
                x1={JUNIOR_X + 28}
                y1={PANEL_HEIGHT / 2}
                x2={TEAM_X_AFTER - 48}
                y2={PANEL_HEIGHT / 2}
                stroke={OLIVE}
                strokeWidth={1.5}
              />
            </svg>
            <div
              style={{
                position: "absolute",
                left: 10,
                top: COL_TOP,
                display: "flex",
                flexDirection: "column",
                gap: PILL_GAP,
              }}
            >
              {TOOLS.map((t) => (
                <Pill key={t.name} {...t} />
              ))}
            </div>
            <div
              style={{
                position: "absolute",
                left: `${(JUNIOR_X / PANEL_W) * 100}%`,
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: 56,
                height: 56,
                borderRadius: 14,
                background: "#fff",
                border: `2px solid ${OLIVE}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 16px rgba(58,84,38,0.18)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="./press/junior/logo_icon_dark_svg.svg"
                alt="Junior"
                style={{ width: 32, height: 32, objectFit: "contain" }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                right: 16,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <PersonaPill tone="olive" />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: 16,
          paddingTop: 12,
          borderTop: `1px solid ${HAIRLINE}`,
          display: "flex",
          alignItems: "center",
          gap: 14,
          fontSize: 13,
          color: "#6B6863",
        }}
      >
        <span style={{ color: OLIVE, fontWeight: 700, fontSize: 13 }}>Purpose-built for DTC</span>
        <span style={{ color: MUTE }}>|</span>
        <span>Drafts support replies. Watches LTV. Catches churn risk. Routes the wins.</span>
      </div>
    </div>
  );
}
