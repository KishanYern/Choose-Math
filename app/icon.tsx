import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 4,
        }}
      >
        <span
          style={{
            fontFamily: "serif",
            fontSize: 22,
            fontStyle: "italic",
            color: "#c1272d",
            lineHeight: 1,
            marginTop: 2,
          }}
        >
          ƒ
        </span>
      </div>
    ),
    { ...size }
  );
}
