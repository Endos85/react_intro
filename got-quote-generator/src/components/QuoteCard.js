// QuoteCard.js
import React, { useState } from 'react';

// Hausfarben + passende Textfarben
const getHouseStyle = (house) => {
  switch (house) {
    case "Stark": return { backgroundColor: "#555", color: "#fff" };
    case "Lannister": return { backgroundColor: "#A41E22", color: "#FFD700" };
    case "Targaryen": return { backgroundColor: "#000", color: "#E60026" };
    case "Baratheon": return { backgroundColor: "#FFD700", color: "#000" };
    case "Greyjoy": return { backgroundColor: "#2F4F4F", color: "#FFD700" };
    case "Martell": return { backgroundColor: "#FF7518", color: "#000" };
    case "Tyrell": return { backgroundColor: "#228B22", color: "#fff" };
    case "Arryn": return { backgroundColor: "#1E90FF", color: "#fff" };
    case "Tully": return { backgroundColor: "#003366", color: "#FF3333" };
    case "Clegane": return { backgroundColor: "#333", color: "#FFD700" };
    case "Tarly": return { backgroundColor: "#556B2F", color: "#fff" };
    case "Asshai": return { backgroundColor: "#4B0082", color: "#FFD700" };
    case "Faceless Men": return { backgroundColor: "#444", color: "#fff" };
    default: return { backgroundColor: "#222", color: "#fff" };
  }
};

function QuoteCard({ quoteText, characterName, isQuoteEpic, house, onNext }) {
  const [showEpicText, setShowEpicText] = useState(false);
  const houseStyle = getHouseStyle(house);

const cardStyle = {
  ...houseStyle,
  padding: "20px",
  borderRadius: "10px",
  maxWidth: "800px",
  width: "90%",            // immer standardmäßig 90% der Bildschirmbreite
  minHeight: "300px",      // feste Mindesthöhe
  maxHeight: "380px",      // feste Maximalhöhe
  margin: "0 auto",
  textAlign: "center",
  boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
  overflow: "hidden",      // verhindert, dass die Karte größer wird
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between", // Inhalt verteilt sich gleichmäßig
};

  const quoteStyle = {
    fontStyle: "italic",
    fontSize: "2.2em",
    fontWeight: "bold",
    marginBottom: "25px",
  };

  const characterStyle = {
    fontSize: "1em",
    marginTop: "10px",
    display: "block",
  };

  const buttonContainer = {
    marginTop: "25px",
    display: "flex",
    gap: "20px",
    justifyContent: "center",
  };

  const buttonStyle = {
    padding: "10px 18px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.2s all",
  };

  return (
    <figure style={cardStyle}>
      <blockquote style={quoteStyle}>"{quoteText}"</blockquote>

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
        <button
          style={buttonStyle}
          onClick={onNext}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Nächstes Zitat ➡️
        </button>

        {isQuoteEpic && (
          <button
            style={buttonStyle}
            onClick={() => setShowEpicText(!showEpicText)}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {showEpicText ? "Hinweis ausblenden" : "Episch zeigen 👑"}
          </button>
        )}
      </div>
    </figure>
  );
}

export default QuoteCard;
