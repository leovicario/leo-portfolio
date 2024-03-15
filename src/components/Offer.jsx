import React from 'react'

import Button from '@mui/material/Button';
import Abstract from './Abstract';

import {  motion } from "framer-motion"

const buttonVariants = {
  hover: {
    background: 'white',
    // textShadow: '0px 0px 8px rgb(255,255,255)',
    boxShadow: '0px 0px 8px rgb(255,255,255)',
    transition: {
      duration: 0.5,
      yoyo: Infinity,
    }
  }
}

const Offer = () => {
  
  return (
    <div id="cards" className="w-full min-h-screen flex flex-col place-content-center">
      {/* <img id="artorias" className="min-h-screen w-auto" src="images/Dark-Souls-3.png" /> */}
    <div>

    <motion.div id="card" className="w-full py-12 xl:py-64 flex flex-col gap-12 flex-wrap h-full">
        <p className="text-7xl xl:text-9xl font-medium xl:leading-tighter xl:tracking-tight">Hey! It's Leo. A superstar that will take you from 0 to product. </p>
        {/* <p className="text-4xl font-roman">I help founders break the digital barrier by creating brands and products that last.</p> */}
        {/* <motion.button  variants={buttonVariants}  whileHover="hover" href="mailto:leo@leovicario.com" className="w-fit text-accent p-4 border rounded-xl text-2xl underline xl:no-underline xl:text-4xl ">Tell me about your business 🡥</motion.button> */}
        <motion.button transition={{duration: 0.3, type: 'spring', stiffness: '25'}} whileTap={{ scale: 0.98}} whileHover={{backgroundColor:'rgb(206, 230, 51,0.8)',  boxShadow: '0px 0px 8px rgb(255,255,255)', color:'#FFFFFF'}}  
                      className="w-fit text-accent p-4 border rounded-xl backdrop-blur-md pr-16 text-left xl:text-center text-2xl xl:no-underline xl:text-4xl ">
                        <a href="mailto:leo@leovicario.com">Tell me about your business 
                        <motion.p className="absolute right-6 w-full text-right top-8 xl:top-4" whileHover={{rotate:1}}>🡥</motion.p></a>
        </motion.button>


      
        </motion.div>

{/* 
      <motion.div id="card" className="w-full mb-8 sm:mb-8 lg:mb-0 py-12 xl:py-32 flex items-end gap-8 h-full gap-8 border-none rounded-lg">
        <div className="flex flex-col gap-8">
           <img className="w-16 h-16" src="images/crescent.svg" />
           <h2 className="text-4xl xl:text-9xl font-bold uppercase">MVP<br/> Creation</h2>
           <p className="text-4xl">From zero to product. </p>
          <motion.button  variants={buttonVariants}  whileHover="hover" href="mailto:leo@leovicario.com" className="w-fit text-accent p-4 border rounded-xl text-2xl underline xl:no-underline xl:text-4xl ">Tell me about your business 🡥</motion.button>
        </div>
        <div className="flex flex-col h-full content-center gap-8 px-32">
        
          </div>
      </motion.div> */}

      

      </div>

    </div>
  )
}

export default Offer