import React from 'react';
import '../css/main.css'
import '../css/responsive.css'

import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Scene from '../components/Scene.jsx'
import Offer from '../components/Offer.jsx';
import Showcase from '../components/Showcase.jsx';

const Home = () => {
  return (
    <main className="p-4 w-full">
      {/* <Scene /> */}
      
      <Header />

      <div id="padding-global" className="px-32">

          <div id="hero" className="m-auto h-screen flex flex-col gap-8 justify-center items-center w-full">
            <h1 id="hero-title" className="text-center font-bold">Digital <br/>designer for<br/> founders</h1>
            <img src="/images/edenic-logo.svg" />
          </div>

         
              <Offer />
        
           
         

          <div className="py-48 flex flex-col gap-8  ">
        <h2 className="text-8xl font-roman uppercase">Move the ball forward no matter what.</h2>
        <p className="text-lg">Founders often get slowed down when it comes down to product execution.<br/>
           Instead of hiring multiple specialist roles, focus on working with a superstar that can execute from 0 to 1. <br/>
           Of course, we’re not  talking about me. </p>
      </div>

      </div>

      <div id="showcase" className="w-full overflow-hidden text-center pt-12 mb-32 border border-zinc-500">
        <h2 id="text-full" className="text-center" >Showcase</h2>
  
      </div>

      <div id="padding-global" className="px-32">

      <Showcase />

      <div id="about" className="p-64 flex flex-col gap-8 justify-center items-center w-full">
        <h2 id="hero-title" className="text-center leading-none font-bold">Future oriented challenge solver</h2>
      </div>  

      <div id="offer" className="w-full text-center flex place-content-center items-center min-h-screen">
        <p className="text-5xl w-1/2">Aesthetic strategist.<br/><br/>
          Forging digital experiences since 2018.<br/><br/>
          Taking your idea from zero to product market fit through continuous design and thinking.<br/><br/>
          The future belongs to the bold.</p>
      </div>

      </div>

    

      <Footer />

    </main>

  );
};

export default Home;