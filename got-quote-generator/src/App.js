// App.js
import './App.css';
import { useState } from 'react';
import QuoteCard from './QuoteCard';

const gotQuotes = [
  { id: 1, quote: "Der Winter naht.", character: "Ned Stark", epic: true, house: "Stark" },
  { id: 2, quote: "Ein Löwe kümmert sich nicht um die Meinung von Schafen.", character: "Tywin Lannister", epic: true, house: "Lannister" },
  { id: 3, quote: "Chaos ist eine Leiter.", character: "Petyr Baelish", epic: true, house: "Baelish" },
  { id: 4, quote: "Ein Mann hat keinen Namen.", character: "Arya Stark", epic: false, house: "Faceless Men" },
  { id: 5, quote: "Der König im Norden.", character: "Jon Snow", epic: true, house: "Stark" },
  { id: 6, quote: "Der Drache ist tot.", character: "Daenerys Targaryen", epic: true, house: "Targaryen" },
  { id: 7, quote: "Der Winter ist hier.", character: "Eddard Stark", epic: true, house: "Stark" },
  { id: 8, quote: "Wenn du spielst, um zu gewinnen, musst du bereit sein, alles zu opfern.", character: "Cersei Lannister", epic: true, house: "Lannister" },
  { id: 9, quote: "Hass ist ein tödlicher Trank.", character: "Tyrion Lannister", epic: false, house: "Lannister" },
  { id: 10, quote: "Die Nacht ist dunkel und voller Schrecken.", character: "Melisandre", epic: true, house: "Asshai" },
  { id: 11, quote: "Dracarys!", character: "Daenerys Targaryen", epic: true, house: "Targaryen" },
  { id: 12, quote: "Die Pflicht ist oft schwerer als die Liebe.", character: "Sansa Stark", epic: false, house: "Stark" },
  { id: 13, quote: "Ich trinke und ich weiß Dinge.", character: "Tyrion Lannister", epic: true, house: "Lannister" },
  { id: 14, quote: "Ich bin der Sandor Clegane.", character: "Sandor Clegane", epic: false, house: "Clegane" },
  { id: 15, quote: "Rache ist ein Gericht, das am besten kalt serviert wird.", character: "Cersei Lannister", epic: true, house: "Lannister" },
  { id: 16, quote: "Ein Drache ist kein Sklave.", character: "Daenerys Targaryen", epic: true, house: "Targaryen" },
  { id: 17, quote: "Der Tod ist schneller als das Schwert.", character: "Brienne von Tarth", epic: false, house: "Tarth" },
  { id: 18, quote: "Ich schwöre einen Eid.", character: "Jon Snow", epic: true, house: "Stark" },
  { id: 19, quote: "Valar Morghulis.", character: "Jaqen H’ghar", epic: true, house: "Faceless Men" },
  { id: 20, quote: "Alles, was wir tun, ist in Bewegung.", character: "Varys", epic: false, house: "None" },
  { id: 21, quote: "Wir werden kämpfen, oder wir werden sterben.", character: "Robb Stark", epic: true, house: "Stark" },
  { id: 22, quote: "Ein Löwe schläft nie.", character: "Jaime Lannister", epic: true, house: "Lannister" },
  { id: 23, quote: "Der Drache wird frei sein.", character: "Daenerys Targaryen", epic: true, house: "Targaryen" },
  { id: 24, quote: "Ehre ist alles.", character: "Eddard Stark", epic: false, house: "Stark" },
  { id: 25, quote: "Wir müssen überleben.", character: "Yara Greyjoy", epic: true, house: "Greyjoy" },
  { id: 26, quote: "Mein Wille ist mein Gesetz.", character: "Petyr Baelish", epic: true, house: "Baelish" },
  { id: 27, quote: "Die Gerechtigkeit wird siegen.", character: "Brienne von Tarth", epic: true, house: "Tarth" },
  { id: 28, quote: "Hass ist der Treibstoff des Krieges.", character: "Cersei Lannister", epic: false, house: "Lannister" },
  { id: 29, quote: "Ich liebe meine Heimat.", character: "Theon Greyjoy", epic: false, house: "Greyjoy" },
  { id: 30, quote: "Schwört Treue, oder stirbt.", character: "Sandor Clegane", epic: true, house: "Clegane" },
  { id: 31, quote: "Die Schatten haben Augen.", character: "Jaqen H’ghar", epic: false, house: "Faceless Men" },
  { id: 32, quote: "Ich werde nicht fliehen.", character: "Arya Stark", epic: true, house: "Stark" },
  { id: 33, quote: "Der Königstag wird kommen.", character: "Stannis Baratheon", epic: true, house: "Baratheon" },
  { id: 34, quote: "Blut ist dicker als Wasser.", character: "Tywin Lannister", epic: false, house: "Lannister" },
  { id: 35, quote: "Die Drachen fliegen.", character: "Daenerys Targaryen", epic: true, house: "Targaryen" },
  { id: 36, quote: "Der Tod ist mein Begleiter.", character: "Sandor Clegane", epic: false, house: "Clegane" },
  { id: 37, quote: "Wir nehmen, was uns gehört.", character: "Yara Greyjoy", epic: true, house: "Greyjoy" },
  { id: 38, quote: "Freiheit ist ein kostbares Gut.", character: "Daenerys Targaryen", epic: true, house: "Targaryen" },
  { id: 39, quote: "Das Spiel der Throne endet nie.", character: "Varys", epic: false, house: "None" },
  { id: 40, quote: "Wir sind Stark.", character: "Bran Stark", epic: true, house: "Stark" },
];

function App() {
  const [currentQuote, setCurrentQuote] = useState(
    gotQuotes[Math.floor(Math.random() * gotQuotes.length)]
  );

  const getNextQuote = () => {
    let nextQuote;
    do {
      nextQuote = gotQuotes[Math.floor(Math.random() * gotQuotes.length)];
    } while (nextQuote.id === currentQuote.id);
    setCurrentQuote(nextQuote);
  };

  const handleLike = () => {
    console.log(`${currentQuote.character} wurde geliked!`);
    getNextQuote();
  };

  const handleDislike = () => {
    console.log(`${currentQuote.character} wurde disliked!`);
    getNextQuote();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Game of Thrones Zitate Generator</h1>
        <p>Ein Ort für Weisheit (und Sarkasmus) aus Westeros.</p>
      </header>
      <main>
        <QuoteCard
          key={currentQuote.id}
          quoteText={currentQuote.quote}
          characterName={currentQuote.character}
          isQuoteEpic={currentQuote.epic}
          house={currentQuote.house}
          onLike={handleLike}
          onDislike={handleDislike}
        />
      </main>
    </div>
  );
}

export default App;
