import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SideLogo from './components/SideLogo';

import Home from './pages/Home';
import Industries from './pages/Industries';
import Pentakuhl from './pages/Pentakuhl';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans bg-gray-50">
        <Navbar />
        <SideLogo />
        {/* pt-20 pushes the content below the fixed 80px high navbar */}
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/pentakuhl" element={<Pentakuhl />} />
          </Routes>
        </main>

        
      </div>
    </Router>
  );
}

export default App;