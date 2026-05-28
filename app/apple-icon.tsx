import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#faf6ef",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 36,
        }}
      >
        <span
          style={{
            fontFamily: "serif",
            fontSize: 130,
            fontStyle: "italic",
            color: "#c1272d",
            lineHeight: 1,
            marginTop: 10,
          }}
        >
          ƒ
        </span>
      </div>
    ),
    { ...size }
  );
}
