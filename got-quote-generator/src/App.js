import logo from './logo.svg';
import './App.css';

const gotQuotes = [
  { id: 1, quote: "Der Winter naht.", character: "Ned Stark", epic: true },
  { id: 2, quote: "Ein Löwe kümmert sich nicht um die Meinung von Schafen.", character: "Tywin Lannister", epic: true },
  { id: 3, quote: "Chaos ist eine Leiter.", character: "Petyr Baelish", epic: true },
  { id: 4, quote: "Ein Mann hat keinen Namen.", character: "Arya Stark", epic: false },
  { id: 5, quote: "Der König im Norden.", character: "Jon Snow", epic: true },
  { id: 6, quote: "Der Drache ist tot.", character: "Daenerys Targaryen", epic: true },
  { id: 7, quote: "Der Winter ist hier.", character: "Eddard Stark", epic: true },
  { id: 8, quote: "Wenn du spielst, um zu gewinnen, musst du bereit sein, alles zu opfern.", character: "Cersei Lannister", epic: true },
  { id: 9, quote: "Hass ist ein tödlicher Trank.", character: "Tyrion Lannister", epic: false },
  { id: 10, quote: "Die Nacht ist dunkel und voller Schrecken.", character: "Melisandre", epic: true },
  { id: 11, quote: "Dracarys!", character: "Daenerys Targaryen", epic: true },
  { id: 12, quote: "Die Pflicht ist oft schwerer als die Liebe.", character: "Sansa Stark", epic: false },
  { id: 13, quote: "Ich trinke und ich weiß Dinge.", character: "Tyrion Lannister", epic: true },
  { id: 14, quote: "Ich bin der Sandor Clegane.", character: "Sandor Clegane", epic: false },
  { id: 15, quote: "Rache ist ein Gericht, das am besten kalt serviert wird.", character: "Cersei Lannister", epic: true },
  { id: 16, quote: "Ein Drache ist kein Sklave.", character: "Daenerys Targaryen", epic: true },
  { id: 17, quote: "Der Tod ist schneller als das Schwert.", character: "Brienne von Tarth", epic: false },
  { id: 18, quote: "Ich schwöre einen Eid.", character: "Jon Snow", epic: true },
  { id: 19, quote: "Valar Morghulis.", character: "Jaqen H’ghar", epic: true },
  { id: 20, quote: "Alles, was wir tun, ist in Bewegung.", character: "Varys", epic: false }
];

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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Game of Thrones Zitate Generator</h1>
        <p>Ein Ort für Weisheit (und Sarkasmus) aus Westeros.</p>
      </header>
      <main>
        {gotQuotes.map(q => (
          <figure key={q.id} style={{ margin: '20px 0' }}>
            <blockquote style={quoteStyle}>
              "{q.quote}"
            </blockquote>
            <figcaption style={characterStyle}>
              - {q.character}
              {q.epic && <span style={{ marginLeft: '10px' }}>🌟</span>}
            </figcaption>
          </figure>
        ))}
      </main>
    </div>
  );
}

export default App;
