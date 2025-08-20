import React from "react";

  const quoteStyle = {
    fontStyle: "italic",
    color: "#eb9c1efd",
    fontSize: "1.5em",
    marginBottom: "10px",
    borderLeft: "4px solid #f8c471",
    paddingLeft: "15px"
  };

  const characterStyle = {
    fontSize: '0.8em',
    color: '#4a4a4a',   // Dunkelgrau für Text (Schattenwolf)
    marginTop: '5px',
    display: 'block',
    backgroundColor: '#f5f5f5', // Hellgrau/Weiß für Hintergrund
    padding: '4px 6px',
    borderRadius: '6px'
  };

function QuoteCard({ quoteText, characterName, isQuoteEpic }) {
  return (
    <figure style={{ margin: '20px 0' }}>
      <blockquote style={quoteStyle}>
        "{quoteText}"
      </blockquote>
      <figcaption style={characterStyle}>
        - {characterName}
        {isQuoteEpic && <span style={{ marginLeft: '10px' }}>🌟</span>}
      </figcaption>
    </figure>
  );
}

export default QuoteCard;
