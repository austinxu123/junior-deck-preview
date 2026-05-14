"use client";

import { useState } from "react";
import { Slide } from "./Slide";
import Slide01 from "./slides/Slide01_BuiltOnStack";
import Slide02 from "./slides/Slide02_SystemsComeToThem";
import Slide03 from "./slides/Slide03_GrowInsideStack";
import Slide04 from "./slides/Slide04_SixToolsTimeline";
import Slide05 from "./slides/Slide05_SlackInActionOut";
import Slide06 from "./slides/Slide06_NotAChatbox";
import Slide07 from "./slides/Slide07_SalesLoop";
import Slide08 from "./slides/Slide08_MediaBuyerRoas";
import Slide09 from "./slides/Slide09_OpsSlackToTicket";
import Slide10 from "./slides/Slide10_BrandClose";
import Slide11 from "./slides/Slide11_EcomStack";
import Slide12 from "./slides/Slide12_EcomLoop";
import Slide13 from "./slides/Slide13_MarketingLoop";

const SLIDES: { n: string; title: string; caption?: string; Component: React.ComponentType }[] = [
  // Act I — What Junior is
  { n: "01", title: "Built on what's already working", caption: "Act I · Positioning", Component: Slide01 },
  { n: "02", title: "Stop tab-hopping. Junior is the seam.", caption: "Act I · Before/after mental model", Component: Slide02 },
  { n: "03", title: "Not a chatbox. Junior does the task.", caption: "Act I · Differentiation", Component: Slide06 },

  // Act II — How Junior works
  { n: "04", title: "Slack in. Ticket out. Junior triages.", caption: "Act II · The universal pattern", Component: Slide05 },
  { n: "05", title: "Day 1 helpful. Day 30 yours.", caption: "Act II · The compounding loop", Component: Slide09 },

  // Act III — By persona: Sales
  { n: "06", title: "Sales · One lead, six tools", caption: "Act III · Sales workflow", Component: Slide04 },
  { n: "07", title: "Sales · From recap to closed-won", caption: "Act III · Sales use case", Component: Slide07 },

  // Act III — By persona: Marketer / Media buyer
  { n: "08", title: "Marketer · Ad stack comes to you", caption: "Act III · Marketer before/after", Component: Slide03 },
  { n: "09", title: "Marketer · One campaign, six tools", caption: "Act III · Marketer workflow", Component: Slide13 },
  { n: "10", title: "Marketer · ROAS watched while you sleep", caption: "Act III · Media-buyer use case", Component: Slide08 },

  // Act III — By persona: E-commerce
  { n: "11", title: "DTC · Your stack comes to you", caption: "Act III · E-commerce before/after", Component: Slide11 },
  { n: "12", title: "DTC · One order, six tools", caption: "Act III · E-commerce workflow", Component: Slide12 },

  // Act IV — Close
  { n: "13", title: "Hire Junior.", caption: "Act IV · Brand close", Component: Slide10 },
];

export default function DeckPreviewClient() {
  const [showCaptions, setShowCaptions] = useState(true);

  return (
    <div style={{ minHeight: "100vh", background: "#EFEEEA", color: "#111" }}>
      {/* Toolbar */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          background: "rgba(239,238,234,0.92)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid #E5E2DC",
          padding: "12px 24px",
          display: "flex",
          alignItems: "center",
          gap: 12,
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        }}
      >
        <span style={{ fontWeight: 700, fontSize: 14, color: "#111" }}>Deck Preview</span>
        <span style={{ fontSize: 12, color: "#A8A49E" }}>
          · {SLIDES.length} slides · 1280×720 canvas · internal-only
        </span>
        <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
          <button
            onClick={() => setShowCaptions((v) => !v)}
            style={{
              fontSize: 12,
              fontWeight: 600,
              padding: "7px 14px",
              borderRadius: 999,
              border: "1px solid #D8D5CF",
              background: showCaptions ? "#111" : "#fff",
              color: showCaptions ? "#fff" : "#111",
              cursor: "pointer",
            }}
          >
            {showCaptions ? "Hide captions" : "Show captions"}
          </button>
        </div>
      </div>

      {/* Slides */}
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "32px 24px 80px" }}>
        {SLIDES.map(({ n, title, caption, Component }) => (
          <Slide key={n} n={n} title={title} caption={caption} showCaption={showCaptions}>
            <Component />
          </Slide>
        ))}

        <div
          style={{
            marginTop: 24,
            padding: "16px 20px",
            background: "#fff",
            border: "1px solid #E5E2DC",
            borderRadius: 12,
            fontSize: 13,
            color: "#6B6863",
            lineHeight: 1.6,
          }}
        >
          <strong style={{ color: "#111" }}>How to use:</strong>{" "}
          Click <em>Hide captions</em> for a clean record-friendly view. Take 1280×720 screenshots of each
          slide card (or scale to 1920×1080 in your screenshot tool) and drop into a Keynote/Slides deck.
          Slides 01–06 are the conceptual story; 07–09 are use-case cards; 10 is the brand close.
        </div>
      </div>
    </div>
  );
}
