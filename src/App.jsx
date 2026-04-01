import React from 'react';
import Navbar from './components/Navbar'; 
import Banner from './components/Banner';
import Footer from './components/Footer';
import Stats from './components/Stats';

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Stats />
      <Footer />
    </div>
  )
}

export default App;