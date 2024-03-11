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
    <main className="sm:p-0 xl:p-4 w-full">
      {/* <Scene /> */}
      
      <Header />

      <div id="padding-global" className="px-8 xl:px-32">

          <div id="hero" className="m-auto py-32 xl:py-32 xl:min-h-screen flex flex-col gap-8 justify-center items-center w-full">
            {/* <h1 id="hero-title" className="text-center font-bold">Digital <br/>designer for<br/> founders</h1> */}
            <img className="w-full xl:w-8/12" src="images/hero.svg" />
            <p className="uppercase">From zero to product</p>
            <img className="w-12 h-12" src="/images/crescent.svg" />
          </div>

         
              <Offer />
        
           
         

          <div className="py-24 xl:py-64  flex flex-col gap-12 xl:gap-16 xl:w-9/12">
        <h2 className="text-6xl xl:text-8xl font-roman uppercase">Move the ball forward no matter what.</h2>
        <p className="text-4xl font-roman leading-snug">Founders often get slowed down when it comes down to product execution.<br/>
           Instead of hiring multiple specialist roles, focus on working with a superstar that can execute from 0 to 1. <br/><br/>
        </p>
      </div>

      </div>
      <div className="max-w-screen overflow-hidden m-0">
      <div id="showcase" className="w-full overflow-hidden text-center pt-12 mb-8 xl:mb-32 border border-zinc-500">
        <h2 id="text-full" className="text-center" >Showcase</h2>
  
      </div>
      </div>

      <div id="padding-global" className="px-8 xl:px-32">

      <Showcase />

      <div id="about" className="py-16 xl:p-48 flex flex-col gap-8 justify-center items-center w-full">
        <h2 id="hero-title" className="text-left xl:text-center leading-none font-bold">Future oriented challenge solver</h2>
      </div>  

      <div id="" className="w-full flex place-content-center items-center min-h-screen">
        <img id="artorias" src="images/Dark-Souls-3.png" className="absolute z-auto" />
        <p className="text-5xl text-left xl:text-center w-full xl:w-1/2">Aesthetic strategist.<br/><br/>
          Forging digital experiences since 2018.<br/><br/>
          Taking your idea from zero to product market fit through continuous design and thinking.<br/><br/>
          The future belongs to the bold.</p>
      </div>

      <div id="home-footer" className="py-32 min-h-screen flex flex-col gap-8 xl:text-center items-center place-content-center">
       
        <h2 id="hero-title" className=" leading-none font-bold">Let's build<br/> the future</h2>
        <a href="mailto:leo@leovicario.com" className="text-3xl font-light tracking-wide w-fit uppercase">leo@leovicario.com</a>

      </div>

      </div>


    

      <Footer />

    </main>

  );
};

export default Home;