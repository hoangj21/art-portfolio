import { ImageResponse } from "next/og";

export const alt = "Joanna Hoang — Art Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 76px",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #07111c 0%, #101b2a 55%, #17101f 100%)",
          color: "#edfaff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-230px",
            right: "-90px",
            width: "650px",
            height: "650px",
            border: "2px solid rgba(44, 226, 244, 0.22)",
            borderRadius: "50%",
            boxShadow: "0 0 0 38px rgba(44, 226, 244, 0.035), 0 0 0 88px rgba(44, 226, 244, 0.025)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-280px",
            left: "370px",
            width: "570px",
            height: "570px",
            border: "1px solid rgba(255, 70, 174, 0.3)",
            transform: "rotate(45deg)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            color: "#32e6f4",
            fontSize: "20px",
            letterSpacing: "0.22em",
          }}
        >
          <div style={{ width: "42px", height: "3px", background: "#32e6f4" }} />
          PORTLAND, OREGON
        </div>
        <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>
          <div
            style={{
              fontSize: "112px",
              fontWeight: 800,
              lineHeight: 0.9,
              letterSpacing: "-0.045em",
            }}
          >
            JOANNA
          </div>
          <div
            style={{
              fontSize: "112px",
              fontWeight: 800,
              lineHeight: 0.9,
              letterSpacing: "-0.045em",
              color: "#32e6f4",
            }}
          >
            HOANG
          </div>
          <div
            style={{
              marginTop: "30px",
              fontSize: "23px",
              letterSpacing: "0.09em",
              color: "#c3d1db",
            }}
          >
            ILLUSTRATION · SEQUENTIAL ART · INK · PHOTOGRAPHY
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(195, 209, 219, 0.28)",
            paddingTop: "20px",
            fontSize: "18px",
            letterSpacing: "0.12em",
            color: "#9eafbc",
          }}
        >
          <span>ART PORTFOLIO</span>
          <span>ARTSFROMJOANNA.COM</span>
        </div>
      </div>
    ),
    size,
  );
}
