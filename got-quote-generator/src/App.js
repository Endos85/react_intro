import logo from './logo.svg';
import './App.css';

const quote = "Der Winter naht (Winter is Coming)";
const character = "Ned Stark";

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
        <blockquote style={quoteStyle}>
          "{quote}"
        </blockquote>
      </main>
      <footer style={characterStyle}>
        - {character}
      </footer>
    </div>
  );
}

export default App;
