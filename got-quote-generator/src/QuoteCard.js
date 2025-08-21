// QuoteCard.js
import React, { useState, useEffect } from 'react';

// Hausfarben und lesbare Textfarben
const getHouseStyle = (house) => {
  switch (house) {
    case "Stark":
      return { backgroundColor: "#555", color: "#fff" }; // Grau / Weiß
    case "Lannister":
      return { backgroundColor: "#A41E22", color: "#FFD700" }; // Rot / Gold
    case "Targaryen":
      return { backgroundColor: "#000", color: "#E60026" }; // Schwarz / Rot
    case "Baratheon":
      return { backgroundColor: "#FFD700", color: "#000" }; // Gold / Schwarz
    case "Greyjoy":
      return { backgroundColor: "#2F4F4F", color: "#FFD700" }; // Dunkelgrau / Gold
    case "Martell":
      return { backgroundColor: "#FF7518", color: "#000" }; // Orange / Schwarz
    case "Tyrell":
      return { backgroundColor: "#228B22", color: "#fff" }; // Grün / Weiß
    case "Arryn":
      return { backgroundColor: "#1E90FF", color: "#fff" }; // Blau / Weiß
    case "Tully":
      return { backgroundColor: "#003366", color: "#FF3333" }; // Dunkelblau / Rot
    case "Clegane":
      return { backgroundColor: "#333", color: "#FFD700" }; // Schwarzgrau / Gold
    case "Tarly":
      return { backgroundColor: "#556B2F", color: "#fff" }; // Dunkelgrün / Weiß
    case "Asshai":
      return { backgroundColor: "#4B0082", color: "#FFD700" }; // Indigo / Gold
    case "Faceless Men":
      return { backgroundColor: "#444", color: "#fff" }; // Dunkelgrau / Weiß
    default:
      return { backgroundColor: "#222", color: "#fff" }; // Fallback
  }
};

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
