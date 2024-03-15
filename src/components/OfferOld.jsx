import React from 'react'

import Button from '@mui/material/Button';

import {  motion } from "framer-motion"

const buttonVariants = {
  hover: {
    background: 'white',
    textShadow: '0px 0px 8px rgb(255,255,255)',
    boxShadow: '0px 0px 8px rgb(255,255,255)',
    transition: {
      duration: 0.5,
      
      yoyo: Infinity
    }
  }
}

const Offer = () => {
  
  return (
    <div id="cards" className="w-full min-h-screen flex flex-col place-content-center">
      {/* <img id="artorias" className="min-h-screen w-auto" src="images/Dark-Souls-3.png" /> */}
      <div className="sm:flex sm:flex-col xl:grid grid-cols-2 auto-rows-min gap-16 items-center">

      <motion.div id="card" className="w-full mb-8 sm:mb-8 lg:mb-0 py-12 xl:py-32 px-16 flex flex-col flex-wrap h-full gap-8 border-none rounded-lg backdrop-blur-md">
        <img className="w-16 h-16" src="images/crescent.svg" />
        <h2 className="text-4xl xl:text-6xl font-bold uppercase">MVP<br/> Creation</h2>
        <p className="text-lg">From zero to product. </p>
        <motion.button  variants={buttonVariants}  whileHover="hover" href="mailto:leo@leovicario.com" className="w-fit text-accent p-4 border rounded-xl text-2xl underline xl:no-underline xl:text-4xl ">Tell me about your business 🡥</motion.button>
      </motion.div>

      <motion.div id="card" className="w-full py-12 xl:py-32 px-16 flex flex-col gap-8 leading-relaxed flex-wrap border h-full border-none rounded-lg backdrop-blur-md">
        <img className=" w-16 h-16" src="images/abstract-outline.svg" />
        <h2 className="text-4xl xl:text-6xl font-bold uppercase">Design <br/>partnership</h2>
        <p className="text-lg">A superstar as your entire design department. </p>
        <motion.button variants={buttonVariants} whileHover="hover" href="mailto:leo@leovicario.com" className="w-fit text-accent p-4 border rounded-xl text-2xl leading-relaxed underline xl:no-underline xl:text-4xl">Get in touch 🡥</motion.button>
      </motion.div>

      </div>

    </div>
  )
}

export default Offer