import React from 'react'

import Button from '@mui/material/Button';



const Offer = () => {
  return (
    <div id="cards" className="w-full min-h-screen flex flex-col place-content-center">
      <img id="artorias" className="min-h-screen w-auto" src="images/Dark-Souls-3.png" />
      <div className="sm:flex sm:flex-col xl:grid grid-cols-2 auto-rows-min gap-16 items-center">

      <div id="card" className="w-full mb-8 sm:mb-8 lg:mb-0 py-16 px-16 flex flex-col flex-wrap h-full gap-8 border border-zinc-800 rounded-lg backdrop-blur-md">
        <img className="w-8 h-8" src="images/crescent.svg" />
        <h2 className="text-4xl xl:text-6xl uppercase">MVP<br/> Creation</h2>
        <p className="text-lg">From zero to product. </p>
        <a href="mailto:leo@leovicario.com" className="text-2xl underline xl:no-underline xl:text-4xl ">Tell me about your business 🐅</a>
      </div>

      <div id="card" className="w-full py-16 px-16 flex flex-col gap-8 leading-relaxed flex-wrap border h-full border-zinc-800 rounded-lg backdrop-blur-md">
        <img className="w-8 h-8" src="images/crescent.svg" />
        <h2 className="text-4xl xl:text-6xl uppercase">Design <br/>partnership</h2>
        <p className="text-lg">A superstar as your entire design deparment. </p>
        <a href="mailto:leo@leovicario.com" className="text-2xl leading-relaxed underline xl:no-underline xl:text-4xl">Get in touch 🡥</a>
      </div>

      </div>

    </div>
  )
}

export default Offer