import React from 'react'

import { motion } from 'framer-motion'

const Header = () => {
  return (
    <header className="w-full z-10 grid grid-cols-3 gap-2 fixed py-3 px-8 xl:px-4 top-0 left-0 justify-between ">
      <motion.div whileTap={{ scale: 0.95 }} className="w-fit">
          <a href="/" className="uppercase text-m font-medium">Leo Vicario</a>
          {/* <a href="/blog" className="text-m font-roman"><br />Visit the blog</a> */}
      </motion.div>

      <motion.div  whileTap={{ scale: 0.9}} whileHover={{scale: 1.05, transition: { duration: 1 }}} className="w-full flex place-content-center">
          <motion.button transition={{duration: 0.3, type: 'spring', stiffness: '50'}} whileHover={{backgroundColor:'#a8b265', color:'#FFFFFF'}}className="text-[#fff] bg-transparent hidden lg:inline uppercase backdrop-blur-md text-sm font-roman py-1 px-8 ring-1 ring-accent rounded-3xl border-accent"><a href="https://www.linkedin.com/in/leovicario/" target='__blank'>Hire me</a></motion.button>
      </motion.div>

      <motion.div whileTap={{ scale: 0.9, transition: {duration: 0.4} }} className="w-fit hidden lg:inline w-full text-right uppercase">
          <a href="mailto:leo@leovicario.com" className="text-sm font-roman">leo@leovicario.com</a>
      </motion.div>
        
      
      </header>
  )
}

export default Header