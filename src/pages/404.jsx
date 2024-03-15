import React from 'react';
import '../css/main.css'
import '../css/responsive.css'


import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'

import Cursor from '../components/Cursor.jsx';




const Error = () => {
  return (
    <main className="p-4 h-full flex flex-col items-center h-screen w-screen">
      <Cursor />
      <Header />
        <div className="w-full m-auto gap-8 flex flex-col align-center items-center">
         {/* <h1 className="text-8xl">Oops! 🔥</h1> */}
          <img className='' src="./images/psyduck2.png"/>
           <p className="text-6xl">You're lost :)</p>
        </div>
      <Footer />

    </main>

  );
};

export default Error;