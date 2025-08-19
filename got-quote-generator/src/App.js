import logo from './logo.svg';
import './App.css';

const quote = "Der Winter naht (Winter is Coming)";
const character = "Ned Stark";

function App() {
  return (
    <div className="App">
      <header className="App-header">
             <h1>Game of Thrones Zitate Generator</h1>
             <p>Ein Ort für Weisheit (und Sarkasmus) aus Westeros.</p>
      </header>
      <main>
        <blockquote>
          "{quote}"
        </blockquote>
      </main>
      <footer>
        - {character}
      </footer>
    </div>
  );
}

export default App;
