"use client";

const OLIVE = "#3a5426";
const SOFT_OLIVE = "#f0f4eb";
const HAIRLINE = "#E5E2DC";
const MUTE = "#A8A49E";

function MacChrome({ title }: { title: string }) {
  return (
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
        {title}
      </div>
    </div>
  );
}

export default function Slide06() {
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
        Chatbot vs. Employee
      </div>
      <h2
        style={{
          fontFamily: '-apple-system, BlinkMacSystemFont, "Inter Tight", "SF Pro Display", "Segoe UI", system-ui, sans-serif',
          fontWeight: 700,
          fontSize: 48,
          lineHeight: 1.04,
          color: "#111",
          margin: "12px 0 28px 0",
          letterSpacing: "-0.01em",
          whiteSpace: "nowrap",
        }}
      >
        Junior isn&apos;t a chatbox. Junior does the task.
      </h2>

      <div style={{ display: "flex", gap: 24, height: 430 }}>
        {/* LEFT: chatbox */}
        <div
          style={{
            flex: 1,
            background: "#fff",
            border: `1px solid ${HAIRLINE}`,
            borderRadius: 14,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            opacity: 0.92,
          }}
        >
          <MacChrome title="Chatbot · ai-assistant" />
          <div style={{ padding: "24px 24px", flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ fontSize: 11, color: MUTE, fontWeight: 600, letterSpacing: 0.4 }}>
              WHAT MOST AI TOOLS DO
            </div>
            <div
              style={{
                alignSelf: "flex-end",
                maxWidth: "75%",
                background: "#1d1c1d",
                color: "#fff",
                padding: "10px 14px",
                borderRadius: 14,
                fontSize: 13,
                lineHeight: 1.5,
              }}
            >
              Can you help me follow up with Acme on yesterday&apos;s call?
            </div>
            <div
              style={{
                maxWidth: "85%",
                background: "#F0EDE8",
                color: "#1d1c1d",
                padding: "12px 14px",
                borderRadius: 14,
                fontSize: 13,
                lineHeight: 1.5,
              }}
            >
              Sure! Here&apos;s a template you can use:
              <div
                style={{
                  marginTop: 8,
                  fontFamily: 'ui-monospace, monospace',
                  fontSize: 12,
                  background: "#fff",
                  padding: 10,
                  borderRadius: 6,
                  border: `1px solid ${HAIRLINE}`,
                  color: "#6B6863",
                }}
              >
                Hi [Name], thanks for your time...
              </div>
            </div>
            <div
              style={{
                marginTop: 12,
                padding: "10px 12px",
                border: `1px dashed ${MUTE}`,
                borderRadius: 8,
                fontSize: 12,
                color: MUTE,
                textAlign: "center",
              }}
            >
              You still have to write it, send it, and update the CRM yourself.
            </div>
          </div>
        </div>

        {/* RIGHT: Junior actually doing it */}
        <div
          style={{
            flex: 1,
            background: "#fff",
            border: `2px solid ${OLIVE}`,
            borderRadius: 14,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <MacChrome title="Junior · in your stack" />
          <div style={{ padding: "20px 22px", flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ fontSize: 11, color: OLIVE, fontWeight: 600, letterSpacing: 0.4 }}>
              WHAT JUNIOR DOES
            </div>

            {/* Action 1: Gmail draft */}
            <div
              style={{
                display: "flex",
                gap: 12,
                background: SOFT_OLIVE,
                border: `1px solid #DDE5D2`,
                borderRadius: 10,
                padding: "10px 12px",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://www.google.com/s2/favicons?domain=gmail.com&sz=64" alt="" style={{ width: 22, height: 22 }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#111" }}>Email sent to Sarah at Acme</div>
                <div style={{ fontSize: 12, color: "#6B6863", marginTop: 2 }}>
                  Drafted from call notes, referenced Q2 procurement deadline.
                </div>
              </div>
              <span style={{ fontSize: 11, color: OLIVE, fontWeight: 700 }}>✓ Sent</span>
            </div>

            {/* Action 2: CRM stage */}
            <div
              style={{
                display: "flex",
                gap: 12,
                background: SOFT_OLIVE,
                border: `1px solid #DDE5D2`,
                borderRadius: 10,
                padding: "10px 12px",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://www.google.com/s2/favicons?domain=hubspot.com&sz=64" alt="" style={{ width: 22, height: 22 }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#111" }}>HubSpot stage → Demo Scheduled</div>
                <div style={{ fontSize: 12, color: "#6B6863", marginTop: 2 }}>
                  Per your stage-move policy, queued for one-click confirm.
                </div>
              </div>
              <span style={{ fontSize: 11, color: OLIVE, fontWeight: 700 }}>✓ Queued</span>
            </div>

            {/* Action 3: Calendar */}
            <div
              style={{
                display: "flex",
                gap: 12,
                background: SOFT_OLIVE,
                border: `1px solid #DDE5D2`,
                borderRadius: 10,
                padding: "10px 12px",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://www.google.com/s2/favicons?domain=calendar.google.com&sz=64"
                alt=""
                style={{ width: 22, height: 22 }}
              />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#111" }}>Calendar invite · Thursday 2pm</div>
                <div style={{ fontSize: 12, color: "#6B6863", marginTop: 2 }}>
                  Awaiting Sarah&apos;s accept.
                </div>
              </div>
              <span style={{ fontSize: 11, color: OLIVE, fontWeight: 700 }}>✓ Drafted</span>
            </div>

            <div
              style={{
                marginTop: 12,
                padding: "10px 12px",
                background: "#fff",
                border: `1px solid ${OLIVE}`,
                borderRadius: 8,
                fontSize: 12.5,
                color: OLIVE,
                textAlign: "center",
                fontWeight: 600,
              }}
            >
              Chat ends a sentence. Junior ends a task.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
