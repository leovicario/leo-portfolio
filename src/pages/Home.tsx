import React from 'react';
import '../css/main.css'
import '../css/responsive.css'

import Header from '../components/Header.tsx'
import Footer from '../components/Footer.tsx'
import Scene from '../components/Scene.tsx'

const Home: React.FC = () => {
  return (
    <main className="p-4 w-full">
      <Scene />
      
      <Header />

          <div id="hero" className="m-auto h-screen flex flex-col gap-8 justify-center items-center w-full">
            <h1 id="hero-title" className="text-center font-bold">Design <br/>partner <br /> for founders</h1>
            <img src="/images/edenic-logo.svg" />
          </div>

          <div className="p-64 text-center min-h-screen flex items-center content-center">
        <h2 className="text-8xl font-roman uppercase">Move the ball forward no matter what.</h2>
      </div>

      <div id="about" className="p-64 flex flex-col gap-8 justify-center items-center w-full">
        <h2 id="hero-title" className="text-center leading-none font-bold">Future oriented challenge solver</h2>
      </div>

      <div id="showcase" className="w-full overflow-hidden p-0 m-0 flex flex-col gap-8 justify-center items-center w-full">
        <h2 id="text-full" className="w-full" >Showcase</h2>
  
      </div>

      <Footer />

    </main>

  );
};

export default Home;