import React from 'react';
import '../css/main.css'
import '../css/responsive.css'


import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'




const Error = () => {
  return (
    <main className="p-4 w-screen">
      
      <Header />
        <div className="w-full m-auto gap-4 flex flex-col align-center items-center">
        <h1 className="text-8xl">Oops! 🔥</h1>
        <p>You're lost :)</p>
        </div>
      <Footer />

    </main>

  );
};

export default Error;