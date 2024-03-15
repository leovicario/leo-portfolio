import React from 'react'
import { motion } from 'framer-motion'

const Preloader = () => {
  return (
    <div>
    <motion.div  initial={{ opacity: 1 }}
       animate={{ y: '-100%' }}
       exit={{ opacity: 0 }}
       transition={{ type: 'spring', stiffness: 50, duration: 0.4, delay: 1}} // Adjust the duration as needed
       className="fixed top-0 left-0 w-screen h-screen bg-[#040404] flex justify-center items-center z-50"
   
        >
                
           
      
                <h2 className="text-6xl">Loading...</h2>
    </motion.div>    
    <motion.div initial={{ opacity: 1 }}
       animate={{ y: '-100%' }}
       exit={{ opacity: 0 }}
       transition={{ type: 'tween', stiffness: 25, duration: 0.55, delay: 1.1}} // Adjust the duration as needed
       className="fixed mix-blend-difference top-0 left-0 w-screen h-screen bg-[#969F7A] flex justify-center items-center z-10"
    
       >    
            </motion.div>
            
     </div>
  )
}

export default Preloader