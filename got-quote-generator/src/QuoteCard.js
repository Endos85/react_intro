//QuoteCard.js
import React from "react";

const quoteStyle = {
  fontStyle: "italic",
  fontSize: "1.3em",
  marginBottom: "10px",
  paddingLeft: "15px",
};

const characterStyle = {
  fontSize: "0.9em",
  color: "#4a4a4a",
  marginTop: "5px",
  display: "block",
  backgroundColor: "#f5f5f5",
  padding: "4px 6px",
  borderRadius: "6px",
};

function QuoteCard({ quoteText, characterName, isQuoteEpic, children }) {
  return (
    <figure
      style={{
        margin: "20px auto",
        maxWidth: "600px",
        padding: "15px 20px",
        borderRadius: "10px",
        background: "#fff",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <blockquote
        style={{
          ...quoteStyle,
          borderLeft: isQuoteEpic ? "6px solid gold" : "4px solid #aaa",
          color: isQuoteEpic ? "#b8860b" : "#333",
        }}
      >
        "{quoteText}"
      </blockquote>
      <figcaption style={characterStyle}>
        - {characterName}{" "}
        {isQuoteEpic && <span style={{ marginLeft: "10px" }}>🌟</span>}
      </figcaption>
        {children}
    </figure>
  );
}

export default QuoteCard;
