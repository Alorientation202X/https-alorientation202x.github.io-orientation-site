import './styles/App.css';
import './styles/Navbar.css';
import './styles/PageStyle.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Bibliotheques from './pages/Bibliotheques'; // ✅ avec un B majuscule
import Services from './pages/Services';           // ✅ aussi avec un S majuscule
import TestRiasec from './components/TestRiasec';
import Results from './components/Results';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const [results, setResults] = useState(null);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apropos" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bibliotheque" element={<Bibliotheques />} />
          <Route path="/services" element={<Services />} />
          <Route path="/test" element={<TestRiasec onTestComplete={setResults} />} />
          <Route path="/resultats" element={<Results results={results} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

