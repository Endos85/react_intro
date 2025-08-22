// pages/HomePage.js
import './../App.css';
import React, { useState, useEffect } from 'react';
import gotQuotes from "../components/gotQuotes";
import QuoteCard from '../components/QuoteCard';

function HomePage() {
  const [currentQuote, setCurrentQuote] = useState(
    gotQuotes[Math.floor(Math.random() * gotQuotes.length)]
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fetchedQuote, setFetchedQuote] = useState(null);

  const handleNext = () => {
    let nextQuote;
    do {
      nextQuote = gotQuotes[Math.floor(Math.random() * gotQuotes.length)];
    } while (nextQuote.id === currentQuote.id);
    setCurrentQuote(nextQuote);
  };

  useEffect(() => {
    const fetchQuote = async () => {
      setIsLoading(true);
      setError(null);

      try {
        //await new Promise(resolve => setTimeout(resolve, 1000));
        //if (Math.random() < 0.5) {
        //  throw new Error("!Netzwerkfehler!");
        //}
        setFetchedQuote(currentQuote);
      } catch (err) {
        console.error("Fehler beim Abrufen des Zitats:", err);
        setError("Fehler beim Abrufen des Zitats! Bitte versuchen Sie es erneut.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuote();
  }, [currentQuote]);

  return (
    <div className="HomePage-content">

        {isLoading && (
          <p style={{ color: '#ccc', fontSize: '1.2em' }}>
            Lade Zitat... <span role="img" aria-label="loading spinner">⏳</span>
          </p>
        )}

        {error && (
          <p style={{ color: 'red', fontSize: '1.2em' }}>
            Fehler: {error} <span role="img" aria-label="error icon">❌</span>
          </p>
        )}

        {!isLoading && !error && fetchedQuote && (
          <QuoteCard
            key={fetchedQuote.id}
            quoteText={fetchedQuote.quote}
            characterName={fetchedQuote.character}
            isQuoteEpic={fetchedQuote.epic}
            house={fetchedQuote.house}
            onNext={handleNext}
          />
        )}

    </div>
  );
}

export default HomePage;
