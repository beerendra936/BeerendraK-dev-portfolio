import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#000000",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        textAlign: "center",
        padding: "16px",
      }}
    >
      <h1 style={{ fontSize: "32px", marginBottom: "8px" }}>
        Beerendra K – 14+ Years Video Editor
      </h1>
      <p style={{ fontSize: "18px", opacity: 0.8 }}>
        Professional video editing for YouTube, Reels, and Ads.
      </p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  React.createElement(App)
);
