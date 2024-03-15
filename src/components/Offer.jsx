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
    <div id="cards" className="w-full xl:min-h-screen flex flex-col place-content-center">
    
    <div>

    <motion.div id="card" className="w-full py-12 xl:py-64 flex flex-col gap-12 flex-wrap h-full">
        <p className="text-6xl xl:text-9xl font-bold xl:leading-tighter xl:tracking-tight">Hey! It's Leo. A superstar that will take you from 0 to product. </p>
        {/* <p className="text-4xl font-roman">I help founders break the digital barrier by creating brands and products that last.</p> */}
        {/* <motion.button  variants={buttonVariants}  whileHover="hover" href="mailto:leo@leovicario.com" className="w-fit text-accent p-4 border rounded-xl text-2xl underline xl:no-underline xl:text-4xl ">Tell me about your business 🡥</motion.button> */}
        <motion.button transition={{duration: 0.3, type: 'spring', stiffness: '25'}} whileTap={{ scale: 0.98}} whileHover={{backgroundColor:'rgb(206, 230, 51,0.8)',  boxShadow: '0px 0px 8px rgb(255,255,255)', color:'#FFFFFF'}}  
                      className="w-fit text-accent p-4 border rounded-xl backdrop-blur-md pr-16 text-left xl:text-center text-2xl xl:no-underline xl:text-4xl ">
                        <a href="mailto:leo@leovicario.com">Tell me about your business 
                        <motion.div className="absolute right-6 w-full text-right top-8 xl:top-4" whileHover={{rotate:1}}>🡥</motion.div></a>
        </motion.button>


      
        </motion.div>

      

      </div>

    </div>
  )
}

export default Offer