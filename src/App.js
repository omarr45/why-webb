import './App.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Footer from './components/Footer';
import Game from './pages/Game';
import JamesWebb from './pages/JamesWebb';
import Navbar2 from './components/Navbar2';
import Telescopes from './pages/Telescopes';

function App() {
  const [page, setPage] = useState(null);

  useEffect(() => {
    console.log(window.location.pathname.slice(1));
    setPage(window.location.pathname.slice(1));
  }, []);

  return (
    <Router>
      <div className='App  min-h-screen text-white'>
        <div className='stars'></div>
        <div className='twinkling'></div>
        <Navbar2 p={page} />
        <Routes>
          <Route path='/' element={<div>Home</div>} />
          <Route path='/telescopes' element={<Telescopes />} />
          <Route path='/james-webb' element={<JamesWebb />} />
          <Route path='/game' element={<Game />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
