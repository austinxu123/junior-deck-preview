"use client";

const OLIVE = "#3a5426";
const SOFT_OLIVE = "#f0f4eb";
const HAIRLINE = "#E5E2DC";
const MUTE = "#A8A49E";

const TOOLS = [
  { name: "Salesforce", domain: "salesforce.com" },
  { name: "Gmail", domain: "gmail.com" },
  { name: "Gong", domain: "gong.io" },
  { name: "Slack", domain: "slack.com" },
  { name: "Notion", domain: "notion.so" },
];

// Layout constants — shared so SVG endpoints match pill geometry exactly.
const PANEL_HEIGHT = 420;
const PILL_HEIGHT = 40;
const PILL_GAP = 14;
const COL_HEIGHT = TOOLS.length * PILL_HEIGHT + (TOOLS.length - 1) * PILL_GAP; // 254
const COL_TOP = (PANEL_HEIGHT - COL_HEIGHT) / 2; // vertical center
// pill row i: center y = COL_TOP + PILL_HEIGHT/2 + i*(PILL_HEIGHT+PILL_GAP)
const pillCenterY = (i: number) => COL_TOP + PILL_HEIGHT / 2 + i * (PILL_HEIGHT + PILL_GAP);

function ToolPill({ name, domain, muted }: { name: string; domain: string; muted?: boolean }) {
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

function TeamPill({ tone }: { tone: "dark" | "olive" }) {
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
      Your team
    </div>
  );
}

export default function Slide02() {
  // Panel internal x-coordinates (within the SVG overlay)
  // BEFORE: team on LEFT, tools on RIGHT — lines fan out from team to each pill
  // AFTER : tools on LEFT, junior in MIDDLE, team on RIGHT — lines converge then continue
  const PANEL_W = 540; // approximate inner width
  const TEAM_X = 70;
  const TOOLS_LEFT_EDGE = 280; // left edge of tools column (BEFORE)
  const JUNIOR_X = 360; // center of Junior node (AFTER)
  const TEAM_X_AFTER = 500; // center of team pill (AFTER, right side)

  return (
    <div style={{ width: "100%", height: "100%", padding: "56px 80px", position: "relative" }}>
      <div
        style={{
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: MUTE,
        }}
      >
        One surface, not five
      </div>
      <h2
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Inter Tight", "SF Pro Display", "Segoe UI", system-ui, sans-serif',
          fontWeight: 700,
          fontSize: 60,
          lineHeight: 1.02,
          color: "#111",
          margin: "12px 0 32px 0",
          letterSpacing: "-0.01em",
        }}
      >
        Stop tab-hopping. Junior is the seam.
      </h2>

      <div style={{ display: "flex", gap: 20, height: PANEL_HEIGHT + 70 }}>
        {/* BEFORE panel */}
        <div
          style={{
            flex: 1,
            background: "#fff",
            border: `1px solid ${HAIRLINE}`,
            borderRadius: 14,
            padding: "20px 24px 24px",
            position: "relative",
          }}
        >
          <div style={{ fontSize: 12, color: MUTE, fontWeight: 600, letterSpacing: 0.4 }}>
            BEFORE · five tabs, five context switches
          </div>

          <div style={{ position: "relative", height: PANEL_HEIGHT, marginTop: 14 }}>
            {/* SVG connector layer */}
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

            {/* Team pill absolutely positioned at left-center */}
            <div
              style={{
                position: "absolute",
                left: `${(TEAM_X / PANEL_W) * 100}%`,
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <TeamPill tone="dark" />
            </div>

            {/* Tools column absolutely positioned on right */}
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
                <ToolPill key={t.name} {...t} muted />
              ))}
            </div>
          </div>
        </div>

        {/* AFTER panel */}
        <div
          style={{
            flex: 1,
            background: "#fff",
            border: `1px solid #DDE5D2`,
            borderRadius: 14,
            padding: "20px 24px 24px",
            position: "relative",
          }}
        >
          <div style={{ fontSize: 12, color: OLIVE, fontWeight: 600, letterSpacing: 0.4 }}>
            AFTER · Junior as the seam, the stack comes to your team
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
              {/* Converging lines: each tool pill's right edge → Junior node */}
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
              {/* Junior → team */}
              <line
                x1={JUNIOR_X + 28}
                y1={PANEL_HEIGHT / 2}
                x2={TEAM_X_AFTER - 48}
                y2={PANEL_HEIGHT / 2}
                stroke={OLIVE}
                strokeWidth={1.5}
              />
            </svg>

            {/* Tools column on LEFT */}
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
                <ToolPill key={t.name} {...t} />
              ))}
            </div>

            {/* Junior node center */}
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

            {/* Team pill right */}
            <div
              style={{
                position: "absolute",
                left: `${(TEAM_X_AFTER / PANEL_W) * 100}%`,
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <TeamPill tone="olive" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
