import React, {useState, useEffect} from 'react';

import '../css/main.css'
import '../css/responsive.css'

import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Abstract from '../components/Abstract.jsx'
import Offer from '../components/Offer.jsx';
import Showcase from '../components/Showcase.jsx';
import Preloader from '../components/Preloader.jsx';

import { motion} from "framer-motion"

const Home = () => {


  return (
    <main id="main" className="sm:p-0 xl:p-4 w-full">
      <Preloader/>
      <Abstract />
      
      <Header />

      <div id="padding-global" className="px-8 xl:px-48">

          <motion.div id="hero" className="m-auto py-16 xl:py-32 xl:min-h-screen flex flex-col gap-8 justify-center xl:items-center w-full">
           <motion.div className="w-full text-center flex flex-col xl:items-center" initial={{opacity: 0}} whileInView={{opacity: 1}}> 
               {/* <h1 id="hero-title" className="text-7xl xl:text-[12rem] text-center font-bold">Digital <br/>designer for<br/> founders</h1>  */}
               <h1 className="text-[4rem] text-left leading-none xl:leading-[0.8] xl:text-center xl:text-[13rem] uppercase leading-[0.8] font-bold tracking-tight">Digital <br/>designer for<br/> founders</h1>  
     
              {/* <img className="w-full xl:w-8/12" src="images/hero.svg" /> */}
            </motion.div>
            <p className="text-accent tracking-wider uppercase">From zero to product</p>

          </motion.div>

         
              <Offer />
        
           
         

          <div className="py-24 xl:py-64  flex flex-col gap-12 xl:gap-16 xl:w-9/12">
        <p className="text-6xl xl:text-9xl font-bold uppercase xl:leading-tighter xl:tracking-[-0.2rem] ">Move the ball forward no matter what. </p>
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
        <h2 id="hero-title" className="text-left xl:text-center text-[5rem] xl:text-[13rem] leading-none font-bold">Future oriented challenge solver</h2>
      </div>  

      <div id="" className="w-full flex place-content-center items-center min-h-screen">
        <p className="text-5xl xl:text-7xl text-left xl:text-center xl:leading-tight font-medium w-full xl:w-1/2">Aesthetic strategist.<br/><br/>
          Forging digital experiences since 2018.<br/><br/>
          Taking your idea from zero to product market fit through continuous design and thinking.<br/><br/>
          The future belongs to the bold.</p>
      </div>

      <div id="home-footer" className="py-32 h-screen xl:min-h-screen flex flex-col gap-8 xl:text-center xl:items-center place-content-center">
       
        <h2 className="text-7xl xl:text-[13rem] uppercase leading-[0.9] font-bold tracking-tight">Let's build<br/> the future</h2>
        <a href="mailto:leo@leovicario.com" className="text-accent uppercase text-2xl xl:text-4xl font-roman tracking-widest w-fit ">leo@leovicario.com</a>

      </div>

      </div>


    

      <Footer />

    </main>

  );
};

export default Home;