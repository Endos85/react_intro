// QuoteCard.js
import React from "react";

// Hausfarben und lesbare Textfarben
function getHouseStyle(house) {
  const houseStyles = {
    Stark: { backgroundColor: "#2c3e50", color: "white" },       // Dunkelgrau, weiße Schrift
    Lannister: { backgroundColor: "#b03a2e", color: "white" },   // Rotgold, weiße Schrift
    Targaryen: { backgroundColor: "#641e16", color: "white" },   // Dunkelrot, weiße Schrift
    Baratheon: { backgroundColor: "#f1c40f", color: "black" },   // Gelb, schwarze Schrift
    Greyjoy: { backgroundColor: "#1a252f", color: "gold" },      // Schwarz, goldene Schrift
    Tarth: { backgroundColor: "#2980b9", color: "white" },       // Blau, weiße Schrift
    Clegane: { backgroundColor: "#7d6608", color: "white" },     // Braun/Gold, weiße Schrift
    Baelish: { backgroundColor: "#145a32", color: "white" },     // Dunkelgrün, weiße Schrift
    "Faceless Men": { backgroundColor: "#424949", color: "white" }, // Grau, weiße Schrift
    Asshai: { backgroundColor: "#512e5f", color: "white" },      // Dunkellila, weiße Schrift
    None: { backgroundColor: "#7b7d7d", color: "white" },        // Neutral Grau
  };

  return houseStyles[house] || { backgroundColor: "#f8f8f8ff", color: "black" }; // Default
}

function QuoteCard({ quoteText, characterName, isQuoteEpic, house, onLike , onDislike}) {
  const houseStyle = getHouseStyle(house);

  return (
    <figure
      style={{
        margin: "20px 0",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
        maxWidth: "600px",
        backgroundColor: houseStyle.backgroundColor,
        color: houseStyle.color,
      }}
    >
      <blockquote
        style={{
          fontStyle: "italic",
          fontSize: "1.5em",
          marginBottom: "10px",
        }}
      >
        "{quoteText}"
      </blockquote>
      <figcaption
        style={{
          fontSize: "0.9em",
          marginTop: "5px",
          display: "block",
        }}
      >
        – {characterName} {isQuoteEpic && <span>🌟</span>}
      </figcaption>
      <button
          onClick={onLike}
          style={{
            padding: "8px 16px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#27ae60",
            color: "white",
            cursor: "pointer"
          }}
        >
          👍 Like
        </button>
        <button
          onClick={onDislike}
          style={{
            padding: "8px 16px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#c0392b",
            color: "white",
            cursor: "pointer"
          }}
        >
          👎 Dislike
        </button>
    </figure>
  );
}

export default QuoteCard;
