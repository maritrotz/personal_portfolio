import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import AboutMe from './components/pages/AboutMe'
import AboutMe2 from './components/pages/AboutMe2';
function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/aboutme' element={<AboutMe/>}/>
            <Route path='/aboutme2' element={<AboutMe2/>}/>

          </Routes>
      </Router>
    </>
  );
}

export default App;
