import './App.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Footer from './components/Footer';
import Game01 from './pages/Game01';
import Game02 from './pages/Game02';
import Game02Lvl1 from './pages/Game02Lvl1';
import Game02Lvl3 from './pages/Game02Lvl3';
import Game03 from './pages/Game03';
import Games from './pages/Games';
import JamesWebb from './pages/JamesWebb';
import Navbar from './components/Navbar';
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
        <Navbar />
        {/* <Navbar2 /> */}
        <Routes>
          <Route path='/' element={<div>Home</div>} />
          <Route path='/telescopes' element={<Telescopes />} />
          <Route path='/james-webb' element={<JamesWebb />} />
          <Route path='/games' element={<Games />} />
          <Route path='/game-1' element={<Game01 />} />
          <Route path='/game-2' element={<Game02 />} />
          <Route path='/game-2a' element={<Game02Lvl1 />} />
          <Route path='/game-2c' element={<Game02Lvl3 />} />
          <Route path='/game-3' element={<Game03 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
