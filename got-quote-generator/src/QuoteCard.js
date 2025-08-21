// QuoteCard.js
import React, { useState } from "react";

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

function QuoteCard({ quoteText, characterName, isQuoteEpic, house, onNext }) {
  const [showEpicText, setShowEpicText] = useState(false);

  const houseStyle = getHouseStyle(house);

  const cardStyle = {
    ...houseStyle,
    padding: "20px",
    borderRadius: "10px",
    maxWidth: "600px",
    margin: "0 auto",
    textAlign: "center",
    boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
  };

  const quoteStyle = {
    fontStyle: "italic",
    fontSize: "2em",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const characterStyle = {
    fontSize: "1em",
    marginTop: "10px",
    display: "block",
  };

  const buttonContainer = {
    marginTop: "20px",
    display: "flex",
    gap: "15px",
    justifyContent: "center",
  };

  return (
    <figure style={cardStyle}>
      <blockquote style={quoteStyle}>
        "{quoteText}"
      </blockquote>
      <figcaption style={characterStyle}>
        - {characterName} ({house})
        {isQuoteEpic && <span style={{ marginLeft: "10px" }}>🌟</span>}
      </figcaption>

      {isQuoteEpic && showEpicText && (
        <p style={{ marginTop: "15px", fontWeight: "bold", fontSize: "1.2em" }}>
          Das ist ein wahrlich episches Zitat! 👑
        </p>
      )}

      <div style={buttonContainer}>
        <button onClick={onNext}>Nächstes Zitat ➡️</button>
        {isQuoteEpic && (
          <button onClick={() => setShowEpicText(!showEpicText)}>
            {showEpicText ? "Hinweis ausblenden" : "Episch zeigen 👑"}
          </button>
        )}
      </div>
    </figure>
  );
}

export default QuoteCard;
