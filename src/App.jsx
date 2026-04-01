import React from 'react';
import Navbar from './components/Navbar'; 
import Banner from './components/Banner';
import Footer from './components/Footer';
import Stats from './components/Stats';
import Main from './components/Main';

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Stats />
      <Main />
      <Footer />
    </div>
  )
}

export default App;