import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Game of Thrones Zitate Generator</h1>
        <p>Ein Ort für Weisheit (und Sarkasmus) aus Westeros.</p>
        <nav className='main-nav'>
          <ul>
            <li><Link to="/" className='nav-link'>Home</Link></li>
            <li><Link to="/about" className='nav-link'>Über uns</Link></li>
          </ul>
        </nav>
      </header>

      <main className='app-main-content'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<h2 style={{color: 'white'}}>404 - Seite nicht gefunden!</h2>} />
        </Routes>
      </main>

      <footer className='app-footer'>
        <p>© 2025 Game of Thrones Zitate Generator. Alle Rechte vorbehalten.</p>
      </footer>
    </div>
  );
}

export default App;