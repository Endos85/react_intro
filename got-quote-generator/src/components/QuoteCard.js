import React, { useState } from 'react';
import styles from './QuoteCards.module.css';
import { getHouseStyle } from './houseStyles';

function QuoteCard({ quoteText, characterName, isQuoteEpic, house, onNext }) {
  const [showEpicText, setShowEpicText] = useState(false);
  const houseStyle = getHouseStyle(house);

  return (
    <figure className={styles.card} style={houseStyle}>
      <blockquote className={styles.quote}>
        "{quoteText}"
      </blockquote>
      <figcaption className={styles.character}>
        - {characterName} ({house})
      </figcaption>

      {isQuoteEpic && showEpicText && (
        <p className={styles.epicText}>
          Das ist ein wahrlich episches Zitat! 👑
        </p>
      )}

      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={onNext}>
          Nächstes Zitat ➡️
        </button>
        {isQuoteEpic && (
          <button
            className={styles.button}
            onClick={() => setShowEpicText(!showEpicText)}
          >
            {showEpicText ? "Hinweis ausblenden" : "Episch zeigen 👑"}
          </button>
        )}
      </div>
    </figure>
  );
}

export default QuoteCard;