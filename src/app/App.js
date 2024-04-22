import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Story from '../components/Story';
import Economics from '../components/Economics';
import Faq from '../components/Faq';
import MemeDisplay from '../components/MemeDisplay';
import OurTeam from '../components/OurTeam';
import Buy from '../components/Buy';
import Footer from '../components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route exact path="/" element={
              <>
                <Hero />
                <Intro />
                <Story />
                <Buy />
              </>
            } />
            <Route path="/about" element={<Intro />} />
            <Route path="/memes" element={<MemeDisplay />} />
            <Route path="/tokenomics" element={<Economics />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/team" element={<OurTeam />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;