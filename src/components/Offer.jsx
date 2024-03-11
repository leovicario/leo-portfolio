import React from 'react'

import Button from '@mui/material/Button';



const Offer = () => {
  return (
    <div id="offer" className="w-full min-h-screen">
      <div className="grid grid-cols-2 gap-8 items-center min-h-screen">

      <div id="card" className="w-full py-32 px-16 flex flex-col gap-8 place-self-center justify-center text-center border border-zinc-800 rounded-lg backdrop-blur-md">
        <img className="w-8 h-8 place-self-center" src="images/edenic-logo.svg" />
        <h2 className="text-5xl font-thin uppercase">MVP<br/> Creation</h2>
        <p>From zero to product. </p>
        <Button className="place-self-center w-1/2" variant="outlined">Tell me about your business</Button>
      </div>

      <div id="card" className="w-full py-32 px-16 flex flex-col gap-8 place-self-center justify-center text-center border border-zinc-800 rounded-lg backdrop-blur-md">
        <img className="w-8 h-8 place-self-center" src="images/edenic-logo.svg" />
        <h2 className="text-5xl font-thin uppercase">Design <br/>partnership</h2>
        <p>A superstar as your entire design deparment. </p>
        <Button className="place-self-center w-1/2" variant="outlined">Get in touch</Button>
      </div>

      </div>

    </div>
  )
}

export default Offer