import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Threed from '../Threed';

function Home() {
  return (
    <>
      {/* <Threed /> */}
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
